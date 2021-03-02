import { ChildEntity, Column, PrimaryGeneratedColumn,ManyToMany ,JoinTable , ManyToOne } from 'typeorm';
import { Book } from '../models/book.entity';

@ChildEntity('magazine')
export class Magazine extends Book{
    @Column()
    next_release_date: string;
    keywords: string;
  
    constructor(next_release_date, keywords) {
      super()
      this.next_release_date = next_release_date;
      this.keywords = keywords;
    }
}


