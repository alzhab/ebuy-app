import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Customer } from './customers/entities/customer.entity';
import { Product } from './products/entities/product.entity';
import { Category } from './categories/entities/category.entity';

const config = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT, 10),
    host: process.env.HOST,
    database: process.env.DATABASE,
    synchronize: true,
    entities: [Customer, Product, Category],
  };
};

export default config;
