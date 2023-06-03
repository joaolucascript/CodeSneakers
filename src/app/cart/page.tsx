'use client';

import { useCart } from '../components/CartContext';
import Image from 'next/image';

const ShoppingCart = (): JSX.Element => {
  const cart = useCart();

  const remove = (id: string) => {
    cart.removeFromCart(id);
  };

  const increaseQuantity = (id: string) => {
    const item = cart.cart[id];
    cart.addToCart({
      ...item,
      quantity: item.quantity + 1,
    });
  };

  const decreaseQuantity = (id: string) => {
    const item = cart.cart[id];
    if (item.quantity > 1) {
      cart.addToCart({
        ...item,
        quantity: item.quantity - 1,
      });
    } else {
      remove(id);
    }
  };

  return (
    <div className="w-full">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="mb-10 text-center font-bold text-4xl text-j-dark">
          Carrinho de compras
        </h1>
        {Object.keys(cart.cart).length === 0 ? (
          <p className="text-gray-500 text-center">Nenhum item no carrinho.</p>
        ) : (
          <div className="grid align-middle grid-cols-1 lg:grid-cols-3 w-full gap-6">
            <div className="col-span-1 lg:col-span-2">
              {Object.keys(cart.cart).map((itemId) => {
                const item = cart.cart[itemId];
                return (
                  <div
                    key={itemId}
                    className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-4 sm:gap-0 items-center text-center sm:text-start mb-6 rounded-lg bg-white p-6 shadow-md"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="sm:mt-0">
                        <h2 className="text-lg font-bold text-j-dark">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-xs text-zinc-700">
                          Cor: {item.color}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between items-center space-y-2 mt-3 sm:mt-0">
                        <span className="text-sm text-end">Quantidade</span>
                        <div className="flex items-center border-gray-100">
                          <button
                            onClick={() => decreaseQuantity(itemId)}
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-j-dark hover:text-blue-50"
                          >
                            -
                          </button>
                          <span className="flex h-8 w-8 border bg-white items-center justify-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(itemId)}
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-j-dark hover:text-blue-50"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">
                            R${item.price * item.quantity}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            onClick={() => remove(itemId)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-span-1">
              <div className="rounded-lg border bg-white shadow-md mt-0 p-6">
                <div className="mb-2 flex justify-between">
                  <p className="text-zinc-700">Subtotal</p>
                  <p className="text-zinc-700">
                    R$
                    {
                      Object.values(cart.cart).reduce(
                        (subtotal: number, item: any) =>
                          subtotal + item.price * item.quantity,
                        0
                      ) as number
                    }
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-zinc-700">Frete</p>
                  <p className="text-zinc-700">R$25</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="text-right">
                    <p className="mb-1 text-lg font-bold">
                      R$
                      {
                        Object.values(cart.cart).reduce(
                          (total: number, item: any) =>
                            total + item.price * item.quantity,
                          25
                        ) as number
                      }
                    </p>
                    <p className="text-sm text-zinc-700">{`em até 3x de R$${
                      Math.floor(
                        (Object.values(cart.cart).reduce(
                          (total: number, item: any) =>
                            total + item.price * item.quantity,
                          25
                        ) /
                          3) *
                          100
                      ) / 100
                    }`}</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-j-dark py-1.5 font-medium text-blue-50 hover:bg-zinc-700">
                  Fazer pedido
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Cart(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between bg-gray-100 min-h-[calc(100vh-4.625rem)] overflow-y-auto">
      <ShoppingCart />
    </main>
  );
}
