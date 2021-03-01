import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../models/author.entity';
import { AuthorRepository } from '../repositories/author.repository';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private authorsRepository: AuthorRepository
  ) {}

}
