import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { BaseService } from '../base/base.service';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import clearImage from '../utils/clear-image.utils';

@Injectable()
export class CategoriesService extends BaseService<
  Category,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {
    super(categoryRepo);
  }

  async delete(id: number): Promise<DeleteResult> {
    const { img } = await this.findById(id, { select: ['img'] });
    if (img) {
      clearImage(img);
    }
    return super.delete(id);
  }

  async search(value: string): Promise<Category[]> {
    return this.categoryRepo
      .createQueryBuilder('category')
      .leftJoin('category.products', 'products')
      .where('category.name ILIKE :value', { value: `%${value}%` })
      .orWhere('products.name ILIKE :value', { value: `%${value}%` })
      .getMany();
  }
}
