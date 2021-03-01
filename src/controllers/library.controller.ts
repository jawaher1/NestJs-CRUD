export class LibrayController {}
import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Render 
} from '@nestjs/common';
import { LibraryService } from '../services/library.service';
import { Library } from 'src/models/library.entity';

@Controller('library')
export class LibraryController {
  constructor(private service: LibraryService) {}


}
