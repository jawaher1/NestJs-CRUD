import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagazineService } from '../services/magazine.service';
import { MagazineController } from '../controllers/magazine.controller';
import { MagazineRepository } from '../repositories/magazine.repository';
import { NovelRepository } from 'src/repositories/novel.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([MagazineRepository]),
],
  exports : [MagazineService],
  providers: [MagazineService],
  controllers: [MagazineController],
})
export class MagazineModule {}
