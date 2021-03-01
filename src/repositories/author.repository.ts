import { Repository, EntityRepository } from 'typeorm';
import { Author } from '../models/author.entity';

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {}