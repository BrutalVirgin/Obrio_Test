import { DomainError } from '../../utils/domain-error';

export class OfferErrors extends DomainError {
  constructor(name: string, message: string, statusCode: number) {
    super(name, message, statusCode);
  }
  public static OfferNotExists(): OfferErrors {
    return new OfferErrors('OfferNotExists', 'Offer not exists', 404);
  }
}
