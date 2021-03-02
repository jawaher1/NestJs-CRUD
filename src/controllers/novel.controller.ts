
import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { NovelService } from '../services/novel.service';
import { Novel } from '../models/novel.entity';


@Controller('novel')
export class NovelController {
    constructor(public service: NovelService) {}

    @Get()
    index(): Promise<Novel[]> {
      return this.service.findAll();
    }    

    @Post('create')
    async create(@Body() novel: Novel): Promise<Novel> {
      return this.service.create(novel);
    } 
    @Put('update/:id')
    async update(@Param('id') id, @Body() novel: Novel): Promise<any> {
        novel.id = Number(id);
        console.log('Update #' + novel.id)
        return this.service.update(novel);
    }  

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.service.delete(id);
    }  
  
}
