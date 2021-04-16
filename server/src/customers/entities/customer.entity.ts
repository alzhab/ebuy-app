import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('customers')
export class Customer extends BaseEntity {
  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false, select: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar_path: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  last_name: string;

  @Column({ type: 'date', nullable: false })
  birth_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  interested_in: 'woman' | 'men';

  @Column({ type: 'simple-array', nullable: true })
  mailing_themes: string[];

  @ManyToMany(() => Product, (product) => product.customers)
  @JoinTable({ name: 'favorite_products' })
  favorite_products: Product[];
}
