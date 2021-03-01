
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from '../services/author.service';
import { AuthorController } from '../controllers/author.controller';
import { AuthorRepository } from '../repositories/author.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorRepository]),
],
  exports : [AuthorService],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}
