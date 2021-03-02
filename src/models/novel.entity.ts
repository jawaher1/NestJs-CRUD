import { Column, ChildEntity, } from 'typeorm';
import { Book } from '../models/book.entity';

@ChildEntity('novel')
export class Novel extends Book {
  @Column()
  story_summary: string;

  constructor(story_summary) {
    super()
    this.story_summary = story_summary;
  }
}

