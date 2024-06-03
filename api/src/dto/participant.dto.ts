import {
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
  @MinLength(9)
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
