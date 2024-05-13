import {
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

export class signUpDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(15)
  nick: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  discord?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(80)
  @Matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
  password: string;

  @IsNotEmpty()
  confirmpassword: string;

  @IsEmpty()
  IsAdmin?: boolean;
}
