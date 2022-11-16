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
    const result : any = await this.aadhaarCardService.create(createAadhaarCardDto);
    return res.send(result);
  }

  @Get()
  async findAll(@Req() req:Request, @Res() res: Response) {
    const total : any = await this.aadhaarCardService.findAll(req.query, req.body);
    console.log(total); 
    return res.send(total)
  }

  @Get('/onePersonCard')
  async findOne(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId) {
    const onePersonCard =await  this.aadhaarCardService.findOne(id)
    return res.send(onePersonCard)
  }

  @Post('/updateOnePerson')
  async update(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId, @Body() updateAadhaarCardDto: CreateAadhaarCardDto) {
    const updatedData : any = await this.aadhaarCardService.update(id, updateAadhaarCardDto);
    return res.send(updatedData)
  }

  @Post('/deleteOnePerson')
  async remove(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId) {
    const deleteData : any =await this.aadhaarCardService.remove(id);
    return res.send(deleteData)
  }
}
