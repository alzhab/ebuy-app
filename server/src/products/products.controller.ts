import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BaseController } from '../base/base.controller';
import { Product } from './entities/product.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('products')
export class ProductsController extends BaseController<
  Product,
  CreateProductDto,
  UpdateProductDto
> {
  constructor(private readonly productService: ProductsService) {
    super(productService);
  }

  @Post()
  async create(data: CreateProductDto, ...args): Promise<Product> {
    return super.create(data, ...args);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/popular')
  async getPopular(@Request() req) {
    const id = req.user.userId;
    return this.productService.getBestProducts(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/favorites')
  async gettFavories(@Request() req) {
    const id = req.user.userId;
    return this.productService.getFavorites(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-category/:categoryId')
  async getByCategory(@Request() req, @Param('categoryId') categoryId: string) {
    const id = req.user.userId;

    return this.productService.getByCategory(categoryId, id);
  }
}
