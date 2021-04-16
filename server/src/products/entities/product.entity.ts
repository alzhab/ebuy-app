import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { Category } from '../../categories/entities/category.entity';
import { Customer } from '../../customers/entities/customer.entity';

@Entity('products')
export class Product extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'double precision', nullable: false })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  video: string;

  @ManyToMany(() => Category, (category) => category.products, {
    cascade: true,
  })
  @JoinTable({ name: 'product_categories' })
  categories: Category[];

  @ManyToMany(() => Customer, (customer) => customer.favorite_products, {
    cascade: true,
  })
  customers: Customer[];
}
