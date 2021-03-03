import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { Author } from '../models/author.entity';
import { AuthorService } from '../services/author.service';
import { Book } from '../models/book.entity';
import { NovelService } from '../services/novel.service';

@Controller('author')
export class AuthorController {
    constructor(public service: AuthorService,
      public novelservice: NovelService) {}

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
   
  @Get(':id')
  async getBooks(@Param() params: any): Promise<Book[]> {
    return await this.service.getAllBooksByAuthorId(params.id)
  } 
  @Get('most-sold-novel/:id')
   async  getMostSoldNovel(@Param('id') id): Promise<Book[]>{
      let l = await this.service.getAllBooksByAuthorId(id)
     let nb =  await  l.reduce((acc, Book) => acc = acc > Book.total_units_sold ? id : Book.total_units_sold, 0);
      return await this.novelservice.getNovelBySoldUnits(nb)
    }  
}
