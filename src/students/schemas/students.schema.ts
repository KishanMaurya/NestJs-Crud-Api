import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema({
  timestamps: true,
})
export class Student {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  mobileNo: number;

  @Prop()
  city: string;

  @Prop()
  country : string;

  @Prop()
  professsionType: string;

  @Prop()
  address: string;

  @Prop()
  profile: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);