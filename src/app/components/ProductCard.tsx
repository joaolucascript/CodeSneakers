'use client';

import { useCart } from '../components/CartContext';
import Image from 'next/image';
import { ProductCardProps } from '../types/productCardProps';

export const ProductCard = ({
  img,
  title,
  description,
  price,
  id,
  color,
}: ProductCardProps) => {
  const cart = useCart();
  const add = () => {
    window.localStorage.setItem('cart', JSON.stringify(cart.cart));
    cart.addToCart({ id, title, price, img, color });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center">
        <div className="">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <Image
              className="rounded-t-lg"
              src={img}
              alt={title}
              width={1000}
              height={1000}
            />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-zinc-700 font-bold text-2xl mb-3 hover:text-gray-100 hover:cursor-pointer">
                {title}
              </h1>
              <p className="text-zinc-700 tracking-wide">{description}</p>
              <button
                className="mt-6 py-2 px-4 bg-j-dark text-gray-100 hover:bg-zinc-700 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={add}
              >
                Adicionar ao carrinho
              </button>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-j-dark rounded-lg">
              <span className="text-md">{`R$ ${price}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
