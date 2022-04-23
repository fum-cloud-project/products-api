import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'suppliers' })
export class Supplier {
  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop({ required: true })
  address1: string;

  @Prop({ required: false })
  address2: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  zip: string;

  @Prop()
  phone: string;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);

export type SupplierDocument = Supplier & Document;
