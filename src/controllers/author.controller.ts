import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { Author } from '../models/author.entity';
import { AuthorService } from '../services/author.service';

@Controller('library')
export class AuthorController {
    constructor(public service: AuthorService) {}

    @Get()
    index(): Promise<Author[]> {
      return this.service.findAll();
    }    

    @Post('create')
    async create(@Body() author: Author): Promise<Author> {
      return this.service.create(author);
    } 
    @Put('update/:id')
    async update(@Param('id') id, @Body() author: Author): Promise<any> {
      author.id = Number(id);
        console.log('Update #' + author.id)
        return this.service.update(author);
    }  

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.service.delete(id);
    }  
    

}
