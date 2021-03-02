import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { MagazineService } from '../services/magazine.service';
import { Magazine } from '../models/magazine.entity';


@Controller('magazine')
export class MagazineController {
    constructor(public service: MagazineService) {}

    @Get()
    index(): Promise<Magazine[]> {
      return this.service.findAll();
    }    

    @Post('create')
    async create(@Body() magazine: Magazine): Promise<Magazine> {
      return this.service.create(magazine);
    } 
    @Put('update/:id')
    async update(@Param('id') id, @Body() magazine: Magazine): Promise<any> {
        magazine.id = Number(id);
        console.log('Update #' + magazine.id)
        return this.service.update(magazine);
    }  

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.service.delete(id);
    }  
   

}
