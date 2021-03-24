import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentService } from '../services/content.service';
import { ChartsService } from '../services/chart.service';
import { ContentController } from '../controllers/content.controller';
import { ContentRepository } from '../repositories/content.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([ContentRepository]),
],
  exports : [ContentService,ChartsService],
  providers: [ContentService,ChartsService],
  controllers: [ContentController],
})
export class ContentModule {}
