import { Repository, EntityRepository } from 'typeorm';
import { Novel } from 'src/models/novel.entity';

@EntityRepository(Novel)
export class NovelRepository extends Repository<Novel>{}