import { Model, Schema as MongooseSchema} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateAadhaarCardDto } from './dto/create-aadhaar-card.dto';
import { AadhaarCard, AadhaarCardDocument  } from './schemas/aadhaarCard.schema';

@Injectable()
export class AadhaarCardService {
  constructor(@InjectModel(AadhaarCard.name) private AadhaarCardModel: Model<AadhaarCardDocument>) {}
  async create(createAadhaarCardDto: CreateAadhaarCardDto) {
    const createdDog = new this.AadhaarCardModel(createAadhaarCardDto);
    const  dog = await createdDog.save();
    dog.__v = undefined
    console.log(dog);
    return dog;
  }

  async findAll() {
    return await this.AadhaarCardModel.find().exec();
  }

  async findOne(id: MongooseSchema.Types.ObjectId){
    const _id = id;
    return await this.AadhaarCardModel.findById(_id);
  }

  async update(id: MongooseSchema.Types.ObjectId, updateAadhaarCardDto: CreateAadhaarCardDto) {
    const _id = id;
    return await this.AadhaarCardModel.updateOne({_id}, updateAadhaarCardDto).exec();
  }

  async remove(id: MongooseSchema.Types.ObjectId){
    const _id = id;
    return await this.AadhaarCardModel.findByIdAndDelete(_id).exec();
  }
}
