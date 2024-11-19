import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CatchEverythingFilter } from './filters/catch-everything.filter';
import { PrismaClientExceptionFilter } from './filters/catch-prisma.filter';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new CatchEverythingFilter(httpAdapter));
  app.useGlobalFilters(new PrismaClientExceptionFilter());
  await app.listen(config.get('APP_PORT') || 3000);
};
bootstrap();
