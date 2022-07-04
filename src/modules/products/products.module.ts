import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsPublicController } from './controllers/public.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Category,
  categorySchema,
  Product,
  productsSchema,
  Supplier,
  supplierSchema,
} from '../../schemas';
import { ProductsAdminController } from './controllers/admin.controller';
import { ProductsGrpcController } from './controllers/grpc.controller';
import { AuthModule } from '../auth/auth.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_PACKAGE } from '../auth/constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: productsSchema },
      { name: Supplier.name, schema: supplierSchema },
      { name: Category.name, schema: categorySchema },
    ]),
    AuthModule,
    ClientsModule.register([
      {
        name: AUTH_PACKAGE,
        transport: Transport.GRPC,
        options: {
          url: process.env.AUTH_GRPC_URL,
          package: 'auth',
          protoPath: 'src/grpc/auth.proto',
        },
      },
    ]),
  ],
  controllers: [
    ProductsPublicController,
    ProductsAdminController,
    ProductsGrpcController,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
