import { Module } from '@nestjs/common';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';
import { OffersModule } from '../offers/offers.module';
import { UsersModule } from '../users/users.module';
import { AstrologyModule } from '../astrology/astrology.module';
import { RabbitmqModule } from '../rabbitmq/rabbitmq.module';

@Module({
  imports: [OffersModule, UsersModule, AstrologyModule, RabbitmqModule],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
