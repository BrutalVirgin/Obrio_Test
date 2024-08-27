export interface OfferInterface {
  id: string;
  name: string;
  price: number;
}

export const offers: OfferInterface[] = [
  {
    id: '0d8e0dab-4bb1-4cf2-8774-a9209de284fa',
    name: 'Standard offer',
    price: 10,
  },
  {
    id: 'd4de9224-5283-47a9-91ae-e5199e58a01c',
    name: 'Large offer',
    price: 20,
  },
  { id: 'c0771a51-b09c-4e2d-8a58-a996a722b604', name: 'Sale offer', price: 5 },
];
