import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './orm.config';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

const ENV = process.env.NODE_ENV;
const configFile = !ENV ? '.env' : `.env.${ENV}`;

process.env.static_path = join(__dirname, '..', 'files');

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot({
      envFilePath: configFile,
    }),
    TypeOrmModule.forRoot(config()),
    CustomersModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
  ],
})
export class AppModule {}
