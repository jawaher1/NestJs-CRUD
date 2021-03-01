import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './controllers/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './services/book.service';
import { BooksModule } from './modules/book.modules';
import { BookRepository } from './repositories/book.repository';

@Module({
  imports: [TypeOrmModule.forRoot(), BooksModule],
  controllers: [AppController],
  providers: [AppService,BookService, BookRepository],
})
export class AppModule {}
