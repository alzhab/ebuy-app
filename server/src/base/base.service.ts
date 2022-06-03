import {
  DeepPartial,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  Repository,
  SaveOptions
} from 'typeorm';
import later from '../utils/late.uttils';

export class BaseService<Repo, CreateDto, UpdateDto> {
  constructor(private repo: Repository<Repo>) {}

  findAll(options?: FindManyOptions<Repo>): Promise<Repo[]> {
    return later(this.repo.find(options));
  }

  findById(id: number, options?: FindOneOptions<Repo>): Promise<Repo> {
    return this.repo.findOne(id, options);
  }

  create(
    data: CreateDto,
    relations: string[] = [],
    options?: SaveOptions,
  ): Promise<DeepPartial<Repo>> {
    if (relations.length) {
      relations.forEach((relation) => {
        if (data[relation]) {
          data[relation] = data[relation].map((rel: string) => ({ id: rel }));
        }
      });
    }

    return this.repo.save(data, options);
  }

  async update(
    id: number,
    data: UpdateDto,
    relations: string[] = [],
  ): Promise<DeepPartial<Repo>> {
    const row = await this.findById(id, { relations });

    if (relations.length) {
      relations.forEach((relation) => {
        if (data[relation]) {
          data[relation] = data[relation].map((rel: string) => ({ id: rel }));
        }
      });
    }

     const this.repo.save({ ...row, ...data, id });
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
