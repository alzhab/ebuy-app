import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { BaseService } from '../base/base.service';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import clearImage from '../utils/clear-image.utils';

@Injectable()
export class CustomersService extends BaseService<
  Customer,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  constructor(
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
  ) {
    super(customerRepo);
  }

  findByEmail(email: string): Promise<Customer> {
    const customer = this.customerRepo.findOne({
      where: { email },
      select: ['password', 'id'],
    });
    if (customer) {
      return customer;
    }
    throw new HttpException(
      'Customer with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async getMe(id: string) {
    const customer = await this.customerRepo.findOne(id);
    if (customer) {
      delete customer.password;
      return customer;
    }
    throw new HttpException(
      'Customer with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async deleteOldAvatar(id: number) {
    const user = await this.findById(id, {
      select: ['id', 'avatar_path'],
    });

    if (user) {
      if (user.avatar_path) {
        clearImage(user.avatar_path);
      }
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
