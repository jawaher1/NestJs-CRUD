import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { Library } from '../models/library.entity';
import { LibraryService } from '../services/library.service';

@Controller('library')
export class LibraryController {
    constructor(public service: LibraryService) {}

    @Get()
    index(): Promise<Library[]> {
      return this.service.findAll();
    }    

    @Post('create')
    async create(@Body() library: Library): Promise<Library> {
      return this.service.create(library);
    } 
    @Put('update/:id')
    async update(@Param('id') id, @Body() library: Library): Promise<any> {
      library.id = Number(id);
        console.log('Update #' + library.id)
        return this.service.update(library);
    }  

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.service.delete(id);
    }  
    

}
