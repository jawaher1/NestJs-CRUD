import { Entity, Column, PrimaryGeneratedColumn , OneToMany, JoinTable ,BaseEntity,} from 'typeorm';
import { Book } from './book.entity';

@Entity('author')
export class Author  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany( type => Book , book => book.author)
  @JoinTable()
  books: Book[];

}