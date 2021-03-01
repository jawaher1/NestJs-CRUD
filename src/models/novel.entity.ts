import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Novel extends Book {
  @Column()
  story_summary: string;
/*
  constructor(id, title, price, total_units_sold, publication_date, categories, story_summary) {
    super(id, title, price, total_units_sold, publication_date, categories)
    this.story_summary = story_summary;
  }*/
}
