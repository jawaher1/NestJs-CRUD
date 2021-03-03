
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from '../services/author.service';
import { AuthorController } from '../controllers/author.controller';
import { AuthorRepository } from '../repositories/author.repository';
import { NovelService } from 'src/services/novel.service';
import { NovelRepository } from 'src/repositories/novel.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorRepository,NovelRepository]),
],
  exports : [AuthorService,NovelService],
  providers: [AuthorService,NovelService],
  controllers: [AuthorController],
})
export class AuthorModule {}
