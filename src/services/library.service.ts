import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../models/book.entity';
import { Library } from 'src/models/library.entity';
import { LibraryRepository } from '../repositories/library.repository';
@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library) private libraryRepository: LibraryRepository,
  ) {}


}
