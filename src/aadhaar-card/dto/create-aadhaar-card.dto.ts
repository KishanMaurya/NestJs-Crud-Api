import { Transform } from 'class-transformer';
import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    MinDate,
    IsString,
    IsDateString,
    IsNumber,
    IsBoolean,
    IsNotEmpty,
} from 'class-validator';
export class CreateAadhaarCardDto {
    @IsString()
    @IsNotEmpty({ message: 'Name is required.' })
    "name": string;

    @IsEmail()
    @IsNotEmpty({ message: 'Email is required.' })
    "email": string;

    @IsNumber()
    "age": number;

    @IsNumber()
    @IsNotEmpty({ message: 'Mobile number is required.' })
    "mobileNo": number;

    @IsNotEmpty()
    @IsDateString()
    dob: Date;

    @IsString()
    "country": string;

    @IsString()
    @IsNotEmpty({ message : 'Gender is required.' })
    "gender": string;

    @IsString()
    @IsNotEmpty({ message: 'Address is required'})
    "address": string;

    @IsString()
    "profile": string;
}
