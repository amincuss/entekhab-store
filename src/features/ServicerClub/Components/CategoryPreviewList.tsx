import { TCategory, TProduct } from "../type";
import CategoryPreview from "./CategoryPreview";


interface CategoryPreviewListProps {
  categories: TCategory[];
  products: TProduct[];
}

export default function CategoryPreviewList({
  categories,
  products,
}: CategoryPreviewListProps) {
  return (
    <>
      {categories.map((category) => {
        const productsForCategory = products.filter(
          (p) => p.Category === category.Id
        );
        if (!productsForCategory?.length) return null;

        return (
          <CategoryPreview
            key={category.Id}
            category={category}
            products={productsForCategory}
          />
        );
      })}
    </>
  );
}
