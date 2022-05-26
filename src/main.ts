import * as dotenv from 'dotenv';
import * as path from 'path';
import { join } from 'path';
dotenv.config({
  path: path.join(__dirname, '..', 'config', `${process.env.NODE_ENV}.env`),
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'product',
      protoPath: join(__dirname, '../src/grpc/products.proto'),
      url: 'localhost:50052',
    },
  });
  app.setGlobalPrefix('api/catalog');
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
