import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Price is required' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'Price must be a number' },
  )
  price: number;

  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsNotEmpty({ each: true, message: 'Categories required' })
  @IsUUID('all', { each: true, message: 'Category must be id' })
  @IsArray({ message: 'Categories must be array' })
  @ArrayMinSize(1, { message: 'Categroues required' })
  categories: string[];

  // @IsNotEmpty({ message: 'Video is required' })
  video: string;
}
