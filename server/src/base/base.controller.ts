import {
  Body,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import later from '../utils/late.uttils';

const getOptions = (filter: string) => {
  let options;

  if (filter) {
    try {
      options = JSON.parse(filter);
    } catch (e) {
      throw new HttpException(
        'Query parameter filter invalid',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  return options;
};

export class BaseController<Repo, CreateDto, UpdateDto> {
  constructor(public service: BaseService<Repo, CreateDto, UpdateDto>) {}

  @Get()
  findAll(@Query('filter') filter: string): Promise<Repo[]> {
    return later(this.service.findAll(getOptions(filter)));
  }

  @Get(':id')
  findById(
    @Param('id') id: number,
    @Query('filter') filter: string,
  ): Promise<Repo> {
    return this.service.findById(id, getOptions(filter));
  }

  @Post()
  async create(@Body() data: CreateDto, ...args): Promise<Repo> {
    return await this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateDto): Promise<Repo> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.service.delete(id);
  }
}
