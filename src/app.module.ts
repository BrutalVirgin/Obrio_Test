import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PurchasesModule } from './purchases/purchases.module';
import { OffersModule } from './offers/offers.module';
import { AstrologyModule } from './astrology/astrology.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    UsersModule,
    PurchasesModule,
    OffersModule,
    AstrologyModule,
    RabbitmqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
