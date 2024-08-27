import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserInput {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly marketingData: string;
}
