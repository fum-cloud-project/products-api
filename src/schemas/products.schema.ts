import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Category } from './category.schema';
import { Supplier } from './supplier.schema';

@Schema({ collection: 'products' })
export class ProductsSchema {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'categories' })
  category: Category;

  @Prop({ min: 0 })
  listPrice: number;

  @Prop({ min: 0 })
  unitCost: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'suppliers' })
  supplier: Supplier;

  @Prop()
  status: string;

  @Prop({ type: [String] })
  attributes: string[];

  @Prop({ min: 0 })
  quantity: number;
}
