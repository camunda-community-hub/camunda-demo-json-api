import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = parseInt(process.env.JSON_API_PORT || '3000', 10);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  // tslint:disable-next-line: no-console
  console.log(`JSON API listening on port ${port}...`);
}
bootstrap();
