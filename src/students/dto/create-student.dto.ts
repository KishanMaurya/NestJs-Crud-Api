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
    IsString,
    IsNumber,
    IsBoolean,
    IsNotEmpty,
  } from 'class-validator';

export class CreateStudentDto {
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

    @IsString()
    "city": string;

    @IsString()
    "country": string;

    @IsString()
    "professsionType": string;

    @IsString()
    @IsNotEmpty({ message: 'Address is required'})
    "address": string;

    @IsString()
    "profile": string;

}
