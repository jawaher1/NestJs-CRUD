import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Delete,
    Param,
  } from '@nestjs/common';
  import { AuthorService } from '../services/author.service';
  
  @Controller('author')
  export class AuthorController {
    constructor(private service: AuthorService) {
    }
  
    
  
}
  
  