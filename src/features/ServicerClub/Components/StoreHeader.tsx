import { TCategory } from "../type";
import CategoryList from "./CategoryList";

interface StoreHeaderProps {
  categories: TCategory[];
}

export default function StoreHeader({ categories }: StoreHeaderProps) {
  if (!categories?.length) return null;

  return <CategoryList categories={categories} />;
}
