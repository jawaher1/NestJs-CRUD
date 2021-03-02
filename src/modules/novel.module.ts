import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovelService } from '../services/novel.service';
import { NovelController } from '../controllers/novel.controller';
import { NovelRepository } from 'src/repositories/novel.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([NovelRepository]),
],
  exports : [NovelService],
  providers: [NovelService],
  controllers: [NovelController],
})
export class NovelModule {}
