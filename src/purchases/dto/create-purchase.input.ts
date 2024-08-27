import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePurchaseInput {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  offerId: string;
}
