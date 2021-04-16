import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';
import { LoginCustomerDto } from '../customers/dto/login-customer.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('customer/register')
  async register(@Body() registrationData: CreateCustomerDto) {
    return this.authService.registerCustomer(registrationData);
  }

  @HttpCode(200)
  @Post('customer/login')
  async logIn(@Body() data: LoginCustomerDto) {
    return this.authService.loginCustomer(data);
  }
}
