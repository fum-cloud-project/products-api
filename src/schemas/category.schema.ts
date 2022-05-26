import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'categories' })
export class Category {}

export const categorySchema = SchemaFactory.createForClass(Category);
export type CategoryDocument = Category & Document;
