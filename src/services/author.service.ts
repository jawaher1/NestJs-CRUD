import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Author } from '../models/author.entity';



@Injectable()
export class AuthorService {


    constructor(
      @InjectRepository(Author) private authorRepository: Repository<Author>,
    ) {}
  
    async  findAll(): Promise<Author[]> {
      return await this.authorRepository.find();
  }
  
  async  create(author: Author): Promise<Author> {
      return await this.authorRepository.save(author);
  }
  
  async update(author: Author): Promise<UpdateResult> {
    return await this.authorRepository.update(author.id, author);
  }
  
  
  async delete(id): Promise<DeleteResult> {
    return await this.authorRepository.delete(id);
  }
 
  
  
  
  }
  

