import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { Student, StudentSchema } from './schemas/students.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema}])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
