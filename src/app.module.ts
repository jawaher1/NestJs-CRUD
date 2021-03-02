import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './controllers/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './services/book.service';
import { MagazineService } from './services/magazine.service';
import { BooksModule } from './modules/book.module';
import { MagazineModule } from './modules/magazine.module';
import { NovelModule } from './modules/novel.module';
import { BookRepository } from './repositories/book.repository';
import { MagazineRepository } from './repositories/magazine.repository';
import { NovelRepository } from './repositories/novel.repository';
@Module({
  imports: [TypeOrmModule.forRoot(), BooksModule,MagazineModule, NovelModule],
  controllers: [AppController],
  providers: [AppService,
  ],
})
export class AppModule {}
