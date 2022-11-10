import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AadhaarCardService } from './aadhaar-card.service';
import { AadhaarCardController } from './aadhaar-card.controller';
import { AadhaarCard, AadhaarCardSchema  } from './schemas/aadhaarCard.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AadhaarCard.name, schema: AadhaarCardSchema}])],
  controllers: [AadhaarCardController],
  providers: [AadhaarCardService]
})
export class AadhaarCardModule {}
