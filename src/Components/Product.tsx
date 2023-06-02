export type Product = {
  name: string;
  destination: string;
  depart: string;
  car: string;
  heure: number;
  minute: number;
  essencePrice: number;
  l100: number;
  distance: number;
};
export const calculatePrice = (product: Product[]) => {
  return ((product.l100 / 100) * product.distance * product.essencePrice) / 2;
};

export const products: Product[] = [
  {
    name: 'Jean',
    destination: 'entreprise',
    depart: 'Grezieu la Varenne',
    car: 'Clio',
    heure: 4,
    minute: 40,
    essencePrice: 2,
    l100: 7,
    distance: 10,
  },
  {
    name: 'Pierre',
    destination: 'entreprise',
    depart: 'Marcy',
    car: '308',
    heure: 3,
    minute: 50,
    essencePrice: 2,
    l100: 9,
    distance: 7,
  },
  {
    name: 'Roger',
    destination: 'entreprise',
    depart: 'Lyon 5',
    car: 'Megane',
    heure: 0,
    minute: 45,
    essencePrice: 2,
    l100: 12,
    distance: 3,
  },
];
