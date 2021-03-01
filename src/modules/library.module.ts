import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryService } from '../services/library.service';
import { LibraryController } from '../controllers/library.controller';
import { LibraryRepository } from '../repositories/library.repository';


@Module({
  imports: [

    TypeOrmModule.forFeature([LibraryRepository]),
],
  exports : [LibraryService],
  providers: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
