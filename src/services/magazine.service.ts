import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Book } from '../models/book.entity';
import { Magazine } from '../models/magazine.entity';


@Injectable()
export class MagazineService {


  constructor(
    @InjectRepository(Magazine) private magRepository: Repository<Magazine>,
  ) { }

  async  findAll(): Promise<Magazine[]> {
    return await this.magRepository.find();
  }

  async  create(magazine: Magazine): Promise<Magazine> {
    return await this.magRepository.save(magazine);
  }

  async update(magazine: Magazine): Promise<UpdateResult> {
    return await this.magRepository.update(magazine.id, magazine);
  }


  async delete(id): Promise<DeleteResult> {
    return await this.magRepository.delete(id);
  }


  async  getCookingMagazine(): Promise<Magazine> {

   return  (await (this.magRepository.find({ where: { categories: "Cooking" } }))).
   sort((a,b )=> new Date(b.next_release_date).getTime() - new Date(a.next_release_date).getTime())[0]
   
   



  

  

  }
}

