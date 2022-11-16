import { Model, Schema as MongooseSchema} from 'mongoose';
import { HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateAadhaarCardDto } from './dto/create-aadhaar-card.dto';
import { AadhaarCard, AadhaarCardDocument  } from './schemas/aadhaarCard.schema';
import { getPagination } from '../helpers/pagination';
import { NotFoundError  } from '../helpers/not_found_error';

@Injectable()
export class AadhaarCardService {
  constructor(@InjectModel(AadhaarCard.name) private AadhaarCardModel: Model<AadhaarCardDocument>) {}
  async create(createAadhaarCardDto: CreateAadhaarCardDto) {
    const  { name, email, age, mobileNo, dob, country, gender, address, profile } = createAadhaarCardDto;
    const numberWithSpaces = () =>{
      let cardNumber = Math.floor(Math.random() * 900000000000) + 1;
      return  cardNumber.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "-");
    }
    console.log("Number->", numberWithSpaces)
    const isEmail = await this.AadhaarCardModel.findOne({email : email});
    console.log(isEmail, isEmail && isEmail.email, numberWithSpaces());

    if(isEmail && isEmail.email === email) {
      return {
        status:HttpStatus.BAD_REQUEST,
        ErrorMsg:'Email is allready taken'
      };
    }
    let createCardObj = {
        name : name,
        email : email,
        age : age,
        mobileNo : mobileNo,
        dob : dob,
        country : country,
        gender : gender,
        address : address,
        profile : profile,
        aadhaarNo : numberWithSpaces()
    }
    const createdDog = new this.AadhaarCardModel(createCardObj);
    const cardDetails = await createdDog.save();
    cardDetails.__v = undefined
    console.log(cardDetails);
    return {
      msg : "Data Added successfully",
      status:HttpStatus.OK,
      data:cardDetails
    };
  }

  async findAll(nextPage : any, filter : any) {
    console.log("filter=>",nextPage, filter);

    const { search, gender } = filter;
    const Filter : any = {};
    if(search){
      Filter.name = search;
    }
    if(gender){
      Filter.gender = gender;
    }

    const pagination = await getPagination(nextPage)
    console.log("pagination", pagination)
    const searchQuery : any = [
      { $match: { Filter } },
      { $sort: { _id: pagination.sort} },
      {
        $facet:{
          metadata : [{ $count: "total"}],
          data : [{ $skip: pagination.skip }, { $limit: pagination.limit }]
        }
      }
    ]
    console.log("searchQuery-",  searchQuery)
    const data : any = await this.AadhaarCardModel.aggregate(searchQuery);
    console.log("data--", data)
    return {
      status  : HttpStatus.OK,
      messsage : "Data fetch successfully",
      totalData : data[0] && data[0].metadata[0] ? data[0].metadata[0].total : 0,
      result : data[0] && data[0].data ? data[0].data : []
    }
  }

  async findOne(id: MongooseSchema.Types.ObjectId){
    const _id = id;
    const  result : any = await this.AadhaarCardModel.findById(_id).lean();
    if(!result) throw new BadRequestException({ error : "Data Not Found" });
    return {
      status  : HttpStatus.OK,
      messsage : "Data fetch successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }

  async update(id: MongooseSchema.Types.ObjectId, updateAadhaarCardDto: CreateAadhaarCardDto) {
    const _id = id;
    const result : any = await this.AadhaarCardModel.updateOne({_id}, updateAadhaarCardDto).exec();
    return {
      status  : HttpStatus.OK,
      messsage : "Data updated successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }

  async remove(id: MongooseSchema.Types.ObjectId){
    const _id = id;
    const result : any = await this.AadhaarCardModel.findByIdAndDelete(_id).exec();
    return {
      status  : HttpStatus.OK,
      messsage : "Data deleted successfully",
      totalData : result && result.length ? result.length :  0,
      result : result
    }
  }
}
