import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovelService } from '../services/novel.service';
import { NovelController } from '../controllers/novel.controller';
import { NovelRepository } from 'src/repositories/novel.repository';
import { AuthorService } from '../services/author.service';
import { AuthorRepository } from 'src/repositories/author.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([NovelRepository,AuthorRepository]),
],
  exports : [NovelService],
  providers: [NovelService,AuthorService],
  controllers: [NovelController],
})
export class NovelModule {}
