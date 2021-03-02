import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Novel } from '../models/novel.entity';


@Injectable()
export class NovelService {


    constructor(
        @InjectRepository(Novel) private novelRepository: Repository<Novel>,
    ) { }

    async  findAll(): Promise<Novel[]> {
        return await this.novelRepository.find();
    }

    async  create(novel: Novel): Promise<Novel> {
        return await this.novelRepository.save(novel);
    }

    async update(novel: Novel): Promise<UpdateResult> {
        return await this.novelRepository.update(novel.id, novel);
    }


    async delete(id): Promise<DeleteResult> {
        return await this.novelRepository.delete(id);
    }

    async get_All_units_sold(collection: any) {
        var values = [];
        collection.forEach(function (item) {
        values.push(item.total_units_sold);
        });
        return values;
    }
    async most_sold_novel_by_author(id) : Promise<Novel>{

        return (await this.novelRepository.find({ where: { authorId: id}})).sort())}

}