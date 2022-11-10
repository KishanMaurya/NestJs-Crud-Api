import { PartialType } from '@nestjs/mapped-types';
import { CreateAadhaarCardDto } from './create-aadhaar-card.dto';

export class UpdateAadhaarCardDto extends PartialType(CreateAadhaarCardDto) {}
