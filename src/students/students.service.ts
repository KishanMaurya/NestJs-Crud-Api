import { Model, Schema as MongooseSchema} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student, StudentDocument } from './schemas/students.schema';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}

  async create(createDogDto: CreateStudentDto) {
    const createdDog = new this.studentModel(createDogDto);
    const  dog = await createdDog.save();
    dog.__v = undefined
    console.log(dog);
    return dog;
  }

  async findAll(){
    return await this.studentModel.find().exec();
  }

  async findOne(id: MongooseSchema.Types.ObjectId){
    console.log("service-",id)
    const _id = id;
    return await this.studentModel.findById(_id);
  }

  async update(id: MongooseSchema.Types.ObjectId, updateDogDto: CreateStudentDto) {
    const _id = id;
    return await this.studentModel.updateOne({_id}, updateDogDto).exec();
  }

  async remove(id: MongooseSchema.Types.ObjectId){
    const _id = id;
    return await this.studentModel.findByIdAndDelete(_id).exec();
  }
}
