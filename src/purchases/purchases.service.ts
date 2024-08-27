import { Injectable } from '@nestjs/common';
import { CreatePurchaseInput } from './dto/create-purchase.input';
import { PurchaseInterface, purchases } from './entities/purchase.entity';
import { OffersService } from '../offers/offers.service';
import { OfferErrors } from '../offers/errors/offer.errors';
import { UsersService } from '../users/users.service';
import { UserErrors } from '../users/errors/user.errors';
import { randomUUID } from 'node:crypto';
import { AstrologyService } from '../astrology/astrology.service';
import { ProducerService } from '../rabbitmq/producer.service';

@Injectable()
export class PurchasesService {
  constructor(
    private readonly offersService: OffersService,
    private readonly usersService: UsersService,
    private readonly astrologyService: AstrologyService,
    private readonly producerService: ProducerService,
  ) {}
  async create(data: CreatePurchaseInput): Promise<PurchaseInterface> {
    const { offerId, userId } = data;
    const offer = this.offersService.find(offerId);

    if (!offer) {
      throw OfferErrors.OfferNotExists();
    }

    const user = this.usersService.find(userId);

    if (!user) {
      throw UserErrors.UserNotExists();
    }

    const newPurchase: PurchaseInterface = {
      id: randomUUID(),
      offerId: offerId,
      userId: userId,
    };

    purchases.push(newPurchase);

    await this.producerService.send(user.email);
    await this.astrologyService.sendReport(user.marketingData);

    return newPurchase;
  }
}
