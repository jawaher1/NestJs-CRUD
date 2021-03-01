import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Magazine extends Book {
  @Column()
  next_release_date: string;
  keywords: string;
/*
  constructor(id, title, price, total_units_sold, publication_date, categories, next_release_date, keywords) {
    super(id, title, price, total_units_sold, publication_date, categories)
    this.next_release_date = next_release_date;
    this.keywords = keywords;
  }*/
}
