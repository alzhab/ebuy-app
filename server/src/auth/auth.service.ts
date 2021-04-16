import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginCustomerDto } from '../customers/dto/login-customer.dto';

enum PostgresErrorCode {
  UniqueViolation = '23505',
}

@Injectable()
export class AuthService {
  constructor(
    private customersService: CustomersService,
    private jwtService: JwtService,
  ) {}

  public async registerCustomer(registrationData: CreateCustomerDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdCustomer = await this.customersService.create({
        ...registrationData,
        password: hashedPassword,
      });
      delete createdCustomer.password;
      return {
        userId: createdCustomer.id,
        token: this.jwtService.sign({
          email: createdCustomer.email,
          id: createdCustomer.id,
        }),
      };
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async loginCustomer({ email, password }: LoginCustomerDto) {
    try {
      const customer = await this.customersService.findByEmail(email);
      await this.verifyPassword(password, customer.password);
      return {
        userId: customer.id,
        token: this.jwtService.sign({ email: customer.email, id: customer.id }),
      };
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async verifyPassword(hashPassword, checkPassword) {
    const isPasswordMatching = await bcrypt.compare(
      hashPassword,
      checkPassword,
    );

    if (!isPasswordMatching) {
      throw new HttpException('Wrong password', HttpStatus.BAD_REQUEST);
    }
  }
}
