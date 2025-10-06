import { TProduct } from "../../type";
import CartItem from "../Peroduct/CartItem";

type ProductGridProps = {
  products: TProduct[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto scrollbar-hide px-2 py-3">
      {products.map((product) => (
        <CartItem key={product.Id} product={product} />
      ))}
    </main>
  );
}
