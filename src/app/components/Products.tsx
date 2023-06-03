'use client';

import { products } from '../database/Products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../components/CartContext';

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export const ProductsSection = () => {
  const cart = useCart();
  return (
    <section
      className="container pt-[calc(74px+2.5rem)] mt-[-74px]"
      id="produtos"
    >
      <div className="py-10 px-4 sm:px-6 lg:px-8 ">
        <h2 className="font-bold text-4xl mb-10 text-center">Produtos</h2>
        <div className="text-gray-100 text-center">
          <Products />
        </div>
      </div>
    </section>
  );
};
