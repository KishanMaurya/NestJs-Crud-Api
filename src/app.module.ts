import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AadhaarCardModule } from './aadhaar-card/aadhaar-card.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
  StudentsModule,
  AadhaarCardModule,
  AuthModule,
  UsersModule],
})
export class AppModule {}
