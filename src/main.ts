import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import *  as express from 'express';
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // serve static files under uploaded-filse under root
  app.use('/uploaded-files', express.static(join(__dirname, '..', 'uploaded-files')));
  await app.listen(3001);
}

bootstrap();
