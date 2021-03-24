import { Repository, EntityRepository } from 'typeorm';
import { Content } from 'src/models/content.entity';

@EntityRepository(Content)
export class ContentRepository extends Repository<Content>{}