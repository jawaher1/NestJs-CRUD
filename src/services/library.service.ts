import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../models/book.entity';
import { Novel } from '../models/novel.entity';
import { Library } from 'src/models/library.entity';
import { LibraryRepository } from '../repositories/library.repository';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
@Injectable()
export class LibraryService {
  
  constructor(
    @InjectRepository(Library) private libraryRepository: LibraryRepository,
  ) { }


  async  findAll(): Promise<Library[]> {
    return await this.libraryRepository.find();
  }

  async  create(library: Library): Promise<Library> {
    return await this.libraryRepository.save(library);
  }

  async update(library: Library): Promise<UpdateResult> {
    return await this.libraryRepository.update(library.id, library);
  }


  async delete(id): Promise<DeleteResult> {
    return await this.libraryRepository.delete(id);
  }

  async findByName(name: string): Promise<Library> {
    return await this.libraryRepository.findOne({ name: name });
  }

  async getAllBooksByLibraryId(name: string): Promise<Book[]> {
    return (await this.libraryRepository.findOne({ where: { name: name }, relations: ['books'] })).books;
  }
}


