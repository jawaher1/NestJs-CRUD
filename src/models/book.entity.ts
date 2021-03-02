import { Entity, Column, PrimaryGeneratedColumn , ManyToOne, TableInheritance,BaseEntity , JoinTable} from 'typeorm';
import { Author } from '../models/author.entity';
import  { ECategories} from 'src/models/ECategories'

@Entity('book')
@TableInheritance({column: {type: 'varchar', name: 'type'}})

export abstract class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  total_units_sold: number;

  @Column()
  publication_date: Date;

  @Column('text')
  categories: ECategories;


  @ManyToOne(type => Author, author => author.books)
  @JoinTable()
  author: Author; 
}
