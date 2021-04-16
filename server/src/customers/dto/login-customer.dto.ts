import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginCustomerDto {
  @IsNotEmpty({ message: 'Email required' })
  @IsEmail({}, { message: 'Email not valid' })
  email: string;

  @IsNotEmpty({ message: 'Password name required' })
  password: string;
}
