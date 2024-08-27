import { Injectable } from '@nestjs/common';
import { OfferInterface, offers } from './entities/offer.entity';

@Injectable()
export class OffersService {
  find(id: string): OfferInterface {
    return offers.find((o) => o.id === id);
  }
}
