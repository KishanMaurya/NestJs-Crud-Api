import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type AadhaarCardDocument = HydratedDocument<AadhaarCard>;

@Schema({
  timestamps: true,
})
export class AadhaarCard {
  @Prop({
    type: String,
    required : true
  })
  name: string;

  @Prop({
    type: String,
    unique: true,
    required : true
  })
  email: string;

  @Prop()
  age: number;

  @Prop({
    type: Number,
    required: true
  })
  mobileNo: number;

  @Prop({ type: Date, required: true })
  dob: Date;

  @Prop()
  country : string;

  @Prop({
    type : String,
    enum :  ["male", "female", "other"],
    default : "other",
    required : true
  })
  gender: string;

  @Prop({
    type: String,
    required : true
  })
  address: string;

  @Prop()
  profile: string;

  @Prop({
    type : Number,
    required : true,
  })
  aadhaarNo : number;
}

export const AadhaarCardSchema = SchemaFactory.createForClass(AadhaarCard);