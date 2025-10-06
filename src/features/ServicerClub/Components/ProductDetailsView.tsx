"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Empty from "@/components/Empty";
import ProductGallery from "./ProductDetails/ProductGallery";
import ProductInfo from "./ProductDetails/ProductInfo";
import BuyProductFooter from "./ProductDetails/BuyProductFooter";
import { TProduct } from "../type";

type ProductDetailsViewProps = {
  productId: string;
};

export default function ProductDetailsView({
  productId,
}: ProductDetailsViewProps) {
  const products = useSelector((state: RootState) => state.rewards.Products);

  const product = products.find((p:TProduct) => String(p.Id) === productId);

  if (!product) {
    return <Empty message="محصول مورد نظر یافت نشد!" />;
  }

  return (
    <div className="flex flex-col h-full gap-1">
      <div className="overflow-y-auto scrollbar-hide px-2 flex-1 py-3">
        <ProductGallery
          title={product.Title}
          mainImage={product.MainImage ?? undefined}
          attaches={product.Attaches}
        />
        <ProductInfo title={product.Title} description={product.Description} />
      </div>

      <BuyProductFooter productId={product.Id} price={product.Price} />
    </div>
  );
}
