import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { Content } from '../models/content.entity';
import { ContentService } from '../services/content.service';
import { ChartsService } from 'src/services/chart.service';


@Controller('content')
export class ContentController {
    constructor(public service: ContentService, public chartservice : ChartsService) {}

    @Get()
    index(): Promise<Content[]> {
      return this.service.findAll();
    }   
    @Get(':id')
    getOne(@Param('id') id): Promise<Content> {
      return this.service.findById(id)
    }    
 

    @Post('create')
    async create(@Body() content: Content): Promise<Content> {
      return this.service.create(content);
    } 
    @Put('update/:id')
    async update(@Param('id') id, @Body() content: Content): Promise<any> {
        content.id = Number(id);
        console.log('Update #' + content.id)
        return this.service.update(content);
    }  

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.service.delete(id);
    }  
    @Get('/html')
    async getHtmlCode(): Promise<string> {
      return this.chartservice.screenshot()

}
}