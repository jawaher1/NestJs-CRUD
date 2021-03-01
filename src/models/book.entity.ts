import { Entity, Column, PrimaryGeneratedColumn,ManyToMany ,JoinTable , ManyToOne } from 'typeorm';
import { Author } from './author.entity';
export enum ECategories {
  Historical,
  Crime,
  Fashion,
  Fiction,
  Cooking,
}

@Entity()
export class Book {
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

  @Column()
  categories: ECategories;

  
/*
  constructor(id, title, price, total_units_sold, publication_date, categories) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.total_units_sold = total_units_sold;
    this.publication_date = publication_date;
    this.categories = categories;
  }
*/
  @ManyToOne(type => Author, author => author.books)
  author: Author;
  
}
