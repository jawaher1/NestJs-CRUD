import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Book } from '../models/book.entity';
import { Magazine } from '../models/magazine.entity';


@Injectable()
export class BookService {


    constructor(
      @InjectRepository(Book) private booksRepository: Repository<Book>,
    ) {}
  
    async  findAll(): Promise<Book[]> {
      return await this.booksRepository.find();
  }
  
  async  create(book: Book): Promise<Book> {
      return await this.booksRepository.save(book);
  }
  
  async update(book: Book): Promise<UpdateResult> {
    return await this.booksRepository.update(book.id, book);
  }
  
  
  async delete(id): Promise<DeleteResult> {
    return await this.booksRepository.delete(id);
  }
  async  create_mag(mag: Magazine): Promise<Magazine> {
    return await this.booksRepository.save(mag);
  }
  
  
  
  }
  

