import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import ngrok from '@ngrok/ngrok';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
    cors: true,
  });
  app.enableCors();
  app.useBodyParser('json');
  app.enableCors();
  // app.use(cookieParser())
  await app.listen(5000);
}
bootstrap();
