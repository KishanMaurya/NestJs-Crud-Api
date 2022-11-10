import { Controller, Get, Post, Body, Query, Res , Req, HttpStatus } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Request, Response } from 'express';
import { Schema as MongooseSchema } from 'mongoose';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Req() req:Request, @Res() res: Response, @Body() createStudentDto: CreateStudentDto) {
    console.log(req.body)
    const result : any = await this.studentsService.create(createStudentDto);
    return res.send({
      msg : "Data Added successfully",
      status:HttpStatus.OK,
      data:result
    })
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const total : any = await  this.studentsService.findAll();
    return res.send({
      msg : "Single data fetch successfully",
      status:HttpStatus.OK,
      data:total
    })
  }

  @Get('/getSingleStudent')
  async findOne(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId) {
    const findSingleDog = await this.studentsService.findOne(id)
    return res.send({
        msg : "Single data fetch successfully",
        status:HttpStatus.OK,
        data:findSingleDog
    })
  }

  @Post('/updateStudent')
  async update(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId, @Body() updateDogDto: CreateStudentDto) {
    const updatedData : any= await this.studentsService.update(id, updateDogDto);
    return res.send({
      msg : "Data updated successfully",
      status : HttpStatus.OK,
      data : updatedData
    })
  }

  @Post('/deleteStudent')
  async remove(@Req() req: Request, @Res() res: Response, @Query('id') id: MongooseSchema.Types.ObjectId) {
    const deleteData : any =  await this.studentsService.remove(id);
    return res.send({
      msg : "Data deleted successfully",
      status : HttpStatus.OK,
      data : deleteData
    })
  }
}
