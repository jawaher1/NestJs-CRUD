import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { Book } from '../models/book.entity';
import { BookService } from '../services/book.service';
import { Magazine } from '../models/magazine.entity';


@Controller('book')
export class BookController {
    constructor(public service: BookService) {}

    @Get()
    index(): Promise<Book[]> {
      return this.service.findAll();
    }    

    @Post('create')
    async create(@Body() book: Book): Promise<Book> {
      return this.service.create(book);
    } 
    @Put('update/:id')
    async update(@Param('id') id, @Body() book: Book): Promise<any> {
      book.id = Number(id);
        console.log('Update #' + book.id)
        return this.service.update(book);
    }  

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.service.delete(id);
    }  
    

}
