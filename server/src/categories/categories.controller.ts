import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Next,
  Param,
  Post,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { BaseController } from '../base/base.controller';
import { Category } from './entities/category.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { imagesUpload } from '../utils/file-upload.utils';
import { UpdateCustomerDto } from '../customers/dto/update-customer.dto';

@Controller('categories')
export class CategoriesController extends BaseController<
  Category,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor(private readonly categoriesService: CategoriesService) {
    super(categoriesService);
  }

  @Post()
  @UseInterceptors(FileInterceptor('img', imagesUpload))
  async createWithImg(
    @Request() req,
    @Body() body: UpdateCustomerDto,
    @UploadedFile() file: Express.Multer.File,
    @Next() next,
  ) {
    if (!file) {
      throw new HttpException('Img required', HttpStatus.FORBIDDEN);
    }

    req.body.img = file.filename;

    next();
  }

  @Get('/search/:value')
  async search(@Param('value') value: string) {
    return this.categoriesService.search(value);
  }
}
