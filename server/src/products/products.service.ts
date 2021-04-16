import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BaseService } from '../base/base.service';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import later from '../utils/late.uttils';

@Injectable()
export class ProductsService extends BaseService<
  Product,
  CreateProductDto,
  UpdateProductDto
> {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {
    super(productRepo);
  }

  getFavorites(id: string): Promise<Product[]> {
    return this.productRepo
      .createQueryBuilder('product')
      .orderBy('product.created_at', 'DESC')
      .innerJoin('product.customers', 'customers', 'customers.id = :id', { id })
      .select([
        'product.created_at',
        'product.id',
        'product.price',
        'product.name',
        'customers.id',
      ])
      .getMany();
  }

  getBestProducts(id: string): Promise<Product[]> {
    return later(
      this.productRepo
        .createQueryBuilder('product')
        .orderBy('product.created_at', 'DESC')
        .leftJoinAndSelect(
          'product.customers',
          'customers',
          'customers.id = :id',
          { id },
        )
        .take(8)
        .select([
          'product.created_at',
          'product.id',
          'product.price',
          'product.name',
          'customers.id',
        ])
        .getMany(),
    );
  }

  getByCategory(categoryId: string, userId: string): Promise<Product[]> {
    return this.productRepo
      .createQueryBuilder('product')
      .orderBy('product.created_at', 'DESC')
      .leftJoinAndSelect(
        'product.customers',
        'customers',
        'customers.id = :id',
        { id: userId },
      )
      .innerJoinAndSelect('product.categories', 'categories')
      .where('categories.id = :categoryId', { categoryId })
      .select([
        'product.created_at',
        'product.id',
        'product.price',
        'product.name',
        'customers.id',
      ])
      .getMany();
  }

  create(data: CreateProductDto): Promise<Product> {
    return super.create(data, ['categories', 'customers']);
  }

  async update(
    id: number,
    data: UpdateProductDto,
    relations: string[] = [],
  ): Promise<Product> {
    return super.update(id, data, ['categories', 'customers']);
  }
}
