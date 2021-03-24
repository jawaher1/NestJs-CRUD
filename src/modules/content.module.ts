import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentService } from '../services/content.service';
import { ContentController } from '../controllers/content.controller';
import { ContentRepository } from '../repositories/content.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([ContentRepository]),
],
  exports : [ContentService],
  providers: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
