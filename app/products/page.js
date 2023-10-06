import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Products Page',
  description: 'Generated by create next app',
};
const products = [
  { id: 1, toyName: 'Robox', type: 'robot' },
  { id: 2, toyName: 'Skeleton', type: 'skelet' },
  { id: 3, toyName: 'Action men', type: 'figure' },
  { id: 4, toyName: 'Voltron', type: 'robot' },
];
export default function ProductsPage() {
  return (
    <div>
      <h1>These are my CoOl Toys:</h1>

      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.toyName}</Link>
            <Image
              src={`/images/${product.toyName}.jpg`}
              alt={product.toyName}
              width={500}
              height={400}
            />
          </div>
        );
      })}
    </div>
  );
}
