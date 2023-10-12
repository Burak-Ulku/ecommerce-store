import 'server-only';

const products = [
  { id: 1, toyName: 'Robox', type: 'robot' },
  { id: 2, toyName: 'Skeleton', type: 'skelet' },
  { id: 3, toyName: 'Action men', type: 'figure' },
  { id: 4, toyName: 'Voltron', type: 'robot' },
];

export function getProducts() {
  return products;
}
export function getProduct(id) {
  return products.find((product) => product.id === id);
}
