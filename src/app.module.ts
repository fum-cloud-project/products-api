import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';

console.log(process.env.MONGO_PRODUCTS_URI);

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_PRODUCTS_URI), AuthModule],
})
export class AppModule {}
