import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Novel } from '../models/novel.entity';
import { Author } from '../models/author.entity';

import {
    Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
  } from "sequelize";
import { Stream } from 'stream';
import { Book } from 'src/models/book.entity';

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

 
}