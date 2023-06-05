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
  place: number;
};
export const calculatePrice = (product: Product) => {
  return (
    Math.round(
      (((product.l100 / 100) * product.distance * product.essencePrice) / (product.place + 1)) *
        100,
    ) / 100
  );
};

export const products: Product[] = await fetch('http://localhost:3000/products').then(function (
  response,
) {
  return response.json();
});
