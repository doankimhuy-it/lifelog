import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatchEverythingFilter } from './filters/catch-everything.filter';
import { HttpExceptionFilter } from './filters/catch-http.filter';
import { PrismaClientExceptionFilter } from './filters/catch-prisma.filter';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new CatchEverythingFilter(httpAdapter),
    new HttpExceptionFilter(),
    new PrismaClientExceptionFilter(),
  );
  await app.listen(config.get('APP_PORT') || 3000);
};
bootstrap();
