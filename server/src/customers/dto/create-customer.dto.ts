import { IsEmail, IsNotEmpty, MaxDate, MinDate } from 'class-validator';
import * as moment from 'moment';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'Email required' })
  @IsEmail({}, { message: 'Email not valid' })
  email: string;

  @IsNotEmpty({ message: 'First name required' })
  first_name: string;

  @IsNotEmpty({ message: 'Last name required' })
  last_name: string;

  @IsNotEmpty({ message: 'Password name required' })
  password: string;

  @IsNotEmpty({ message: 'Birthday required' })
  birth_date: string;

  interested_in: string;

  avatar_path: string;

  token: string;
}
