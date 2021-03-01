import { Repository, EntityRepository } from 'typeorm';
import { Library } from 'src/models/library.entity';

@EntityRepository(Library)
export class LibraryRepository extends Repository<Library>{}