import CategoryView from "@/features/ServicerClub/Components/CategoryView";
import React from "react";
interface pageProps {
  params: Promise<{ categoryName: string }>;
}
const CategoryPage = async ({ params }: pageProps) => {
  const { categoryName } = await params;
  return <CategoryView category={categoryName} />;
};

export default CategoryPage;
