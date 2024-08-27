import { Body, Controller, Post } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseInput } from './dto/create-purchase.input';
import { PurchaseInterface } from './entities/purchase.entity';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}
  @Post()
  async create(@Body() data: CreatePurchaseInput): Promise<PurchaseInterface> {
    return this.purchasesService.create(data);
  }
}
