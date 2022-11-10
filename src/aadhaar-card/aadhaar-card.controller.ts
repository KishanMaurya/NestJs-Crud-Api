import { Controller, Get, Post, Body, Query, Res , Req, HttpStatus } from '@nestjs/common';
import { AadhaarCardService } from './aadhaar-card.service';
import { CreateAadhaarCardDto } from './dto/create-aadhaar-card.dto';
import { UpdateAadhaarCardDto } from './dto/update-aadhaar-card.dto';
import { Request, Response } from 'express';
import { Schema as MongooseSchema } from 'mongoose';

@Controller('aadhaarCard')
export class AadhaarCardController {
  constructor(private readonly aadhaarCardService: AadhaarCardService) {}

  @Post()
  async create(@Req() req:Request, @Res() res: Response, @Body() createAadhaarCardDto: CreateAadhaarCardDto) {
    const result : any = this.aadhaarCardService.create(createAadhaarCardDto);
    return res.send({
      msg : "Data Added successfully",
      status:HttpStatus.OK,
      data:result
    })
  }

  @Get()
  async findAll(@Req() req:Request, @Res() res: Response) {
    const total : any = this.aadhaarCardService.findAll();
    return res.send({
      msg : "Single data fetch successfully",
      status:HttpStatus.OK,
      data:total
    })
  }

  @Get('/onePersonCard')
  async findOne(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId) {
    const onePersonCard = this.aadhaarCardService.findOne(id)
    return res.send({
        msg : "Single data fetch successfully",
        status:HttpStatus.OK,
        data:onePersonCard
    })
  }

  @Post('/updateOnePerson')
  async update(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId, @Body() updateAadhaarCardDto: CreateAadhaarCardDto) {
    const updatedData : any= this.aadhaarCardService.update(id, updateAadhaarCardDto);
    return res.send({
      msg : "Data updated successfully",
      status : HttpStatus.OK,
      data : updatedData
    })
  }

  @Post('/deleteOnePerson')
  async remove(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId) {
    const deleteData : any =  this.aadhaarCardService.remove(id);
    return res.send({
      msg : "Data deleted successfully",
      status : HttpStatus.OK,
      data : deleteData
    })
  }
}
