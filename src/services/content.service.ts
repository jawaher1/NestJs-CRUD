import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Content } from '../models/content.entity';



@Injectable()
export class ContentService {


    constructor(
      @InjectRepository(Content) private ContentRepository: Repository<Content>,
    ) {}
  
    async  findAll(): Promise<Content[]> {
      return await this.ContentRepository.find();
  }
  async  findById(id : number): Promise<Content> {
    return await this.ContentRepository.findOne(id);
  }
  async  create(content: Content): Promise<Content> {
      return await this.ContentRepository.save(content);
  }
  
  async update(content: Content): Promise<UpdateResult> {
    return await this.ContentRepository.update(content.id, content);
  }
  
  
  async delete(id): Promise<DeleteResult> {
    return await this.ContentRepository.delete(id);
  }
 
  
  
  
  }
  

