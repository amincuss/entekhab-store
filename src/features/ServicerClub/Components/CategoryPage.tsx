"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import CategoryEmpty from "./Category/CategoryEmpty";
import ProductGrid from "./Category/ProductGrid";
import { TProduct } from "../type";

type CategoryPageProps = {
  category: string | number;
};

function CategoryPage({ category }: CategoryPageProps) {
  const { Categories, Products } = useSelector( (state: RootState) => state.rewards);

  const categoryItem = Categories.find(
    (cat) => String(cat.Id) === String(category)
  );

  if (!categoryItem) {
    return (
      <>
        <CategoryEmpty message="دسته‌بندی مورد نظر یافت نشد!" />
      </>
    );
  }

  const products: TProduct[] = Products.filter(
    (product) => product.Category === categoryItem.Id
  ).sort((a, b) => Number(b.Status) - Number(a.Status));

  if (products.length === 0) {
    return (
      <>
        <CategoryEmpty
          message={`محصولی برای دسته‌بندی ${categoryItem.Title} یافت نشد!`}
        />
      </>
    );
  }

  return (
      <ProductGrid products={products} />
  );
}

export default CategoryPage;
