import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { imagesUpload } from '../utils/file-upload.utils';
import { FileInterceptor } from '@nestjs/platform-express';
import clearImage from '../utils/clear-image.utils';
import { BaseController } from '../base/base.controller';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController extends BaseController<
  Customer,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  constructor(private readonly customersService: CustomersService) {
    super(customersService);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getMe(@Request() req) {
    return await this.customersService.getMe(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/profile')
  @UseInterceptors(FileInterceptor('avatar', imagesUpload))
  async editMe(
    @Request() req,
    @Body() body: UpdateCustomerDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (JSON.stringify(body) === JSON.stringify({})) {
      if (!file.filename) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }
    }

    if (file) {
      body.avatar_path = file.filename;
      await this.customersService.deleteOldAvatar(req.user.userId);
    }

    return await this.customersService.update(req.user.userId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/toggle_favorite/:product_id')
  async toggleFavorite(
    @Request() req,
    @Param('product_id') product_id: string,
  ) {
    const { favorite_products } = await this.customersService.findById(
      req.user.userId,
      { select: ['id'], relations: ['favorite_products'] },
    );

    let favorite_products_ids = favorite_products.map((product) => product.id);

    if (favorite_products_ids.includes(product_id)) {
      favorite_products_ids = favorite_products_ids.filter(
        (id) => id !== product_id,
      );
    } else {
      favorite_products_ids = [...favorite_products_ids, product_id];
    }

    return this.customersService.update(
      req.user.userId,
      { favorite_products: favorite_products_ids },
      ['favorite_products'],
    );
  }
}
