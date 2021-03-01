import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from '../services/book.service';
import { BookController } from '../controllers/book.controller';
import { BookRepository } from '../repositories/book.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookRepository]),
],
  exports : [BookService],
  providers: [BookService],
  controllers: [BookController],
})
export class BooksModule {}
