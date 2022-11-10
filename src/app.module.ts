import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AadhaarCardModule } from './aadhaar-card/aadhaar-card.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
  StudentsModule,
  AadhaarCardModule],
})
export class AppModule {}
