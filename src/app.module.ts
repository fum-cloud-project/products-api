import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_PRODUCTS_URI),
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {}
