import { Entity, Column, PrimaryGeneratedColumn , OneToMany, JoinTable } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany( type => Book , book => book.author)
  books: Book[];

}