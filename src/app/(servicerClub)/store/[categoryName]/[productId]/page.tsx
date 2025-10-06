import ProductDetailsView from '@/features/ServicerClub/Components/ProductDetailsView';
import React from 'react';

interface PageProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: PageProps) => {
  const { productId } = await params;

  return <ProductDetailsView productId={productId} />;
};

export default ProductPage;
