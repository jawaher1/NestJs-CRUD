import { Entity, Column, PrimaryGeneratedColumn,ManyToMany ,JoinTable , BaseEntity } from 'typeorm';
import { Book } from './book.entity';

@Entity('library')
export class Library  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  adress: string;
  

  @ManyToMany(type => Book)
  @JoinTable()
  books: Book[];
}
