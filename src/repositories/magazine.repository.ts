import { Repository, EntityRepository } from 'typeorm';
import { Magazine } from 'src/models/magazine.entity';

@EntityRepository(Magazine)
export class MagazineRepository extends Repository<Magazine>{}