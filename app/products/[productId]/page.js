import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import ProductCommentForm from './ProductCommentForm';

export function generateMetadata({ params }) {
  const singleProduct = getProduct(Number(params.productId));
  return {
    title: singleProduct ? singleProduct.toyName : '',
  };
}

export default function ProductsPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  if (!singleProduct) {
    return notFound();
  }

  return (
    <div>
      This is my detailed product page
      <h1>{singleProduct.toyName}</h1>
      <Image
        src={`/images/${singleProduct.toyName}.jpg`}
        alt={singleProduct.toyName}
        width={400}
        height={300}
      />
      This is a {singleProduct.type} that named {singleProduct.toyName}
      <ProductCommentForm />
    </div>
  );
}
