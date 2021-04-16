import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn({ nullable: true })
  created_at?: Date;

  @CreateDateColumn({ nullable: true })
  updated_at?: Date;
}
