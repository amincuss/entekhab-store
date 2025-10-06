import React from "react";
import CategoryItem from "./CategoryItem";
import { TCategory } from "../type";

interface CategoryListProps {
  categories: TCategory[];
}
function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide p-2">
      <div className="flex gap-4 w-max">
        {categories.map((category) => (
          <CategoryItem key={category.Id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
