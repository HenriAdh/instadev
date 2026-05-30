import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './shared/middlewares/logger.middleware';
import { HttpExceptionFilter } from './shared/filters/HttpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);

  const url = await app.getUrl();
  console.log(`Server is running at ${url} 🔥`);
}
bootstrap();
