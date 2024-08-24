import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  role: string;

  @Column()
  address: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column({ default: true })
  isActive: boolean;
}
