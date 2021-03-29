import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode } from '@nestjs/common';
import { Content } from '../models/content.entity';
import { ContentService } from '../services/content.service';
import { ChartsService } from 'src/services/chart.service';
import { UseInterceptors, UploadedFile, UploadedFiles } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer'

@Controller('content')
export class ContentController {
  constructor(public service: ContentService, public chartservice: ChartsService) { }

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




  @Post("upload")
  @UseInterceptors(
    FileInterceptor("upload", {
      storage: diskStorage({
        destination: './uploaded-files',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}.${file.originalname.split('.')[1]}`)
        }
      })
    })
  )
  @HttpCode(200)
  uploadSingle(@UploadedFile() upload) {
    console.log(upload)
    return { url: "//localhost:3001/uploaded-files/" + upload.filename }
  }


}