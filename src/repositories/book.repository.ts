import { Repository, EntityRepository } from 'typeorm';
import { Book } from 'src/models/book.entity';

@EntityRepository(Book)
export class BookRepository extends Repository<Book>{}