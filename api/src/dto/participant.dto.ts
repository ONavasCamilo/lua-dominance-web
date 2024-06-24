import {
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

export class signUpDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(17)
  nick: string;

  @IsOptional()
  @MinLength(2)
  @MaxLength(32)
  discord?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
  password: string;

  @IsNotEmpty()
  @IsString()
  confirmpassword: string;

  @IsEmpty()
  numberOfParticipations?: number;
}

export class updatePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
  password: string;

  @IsNotEmpty()
  confirmpassword: string;
}
