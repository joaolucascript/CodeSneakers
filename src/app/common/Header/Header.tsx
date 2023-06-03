'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { MenuIcon } from '../../components/icons/MenuIcon';
import { useCallback, useState } from 'react';
import { Menu } from './Menu';
import { useCart } from '../../components/CartContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const cart = useCart();

  // const itemsCount = Object.keys(cart.cart).length;
  const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity;
  }, 0);

  return (
    <div className="sticky top-0 z-20 bg-j-dark flex justify-center scroll-mt-6">
      <header className="text-lg flex py-3 px-4 sm:px-6 lg:px-8 justify-between items-center container">
        <Link
          href="/"
          className="flex text-2xl items-center text-gray-100 font-bold"
        >
          <Image
            src="../icon.svg"
            alt="Logo da loja"
            width={50}
            height={50}
            className="mr-4"
          />
          Code Sneakers
        </Link>
        <button className="md:hidden">
          <MenuIcon
            onClick={openMenu}
            className="fill-j-dark w-10 h-10 rounded-md bg-gray-100 p-2 hover:bg-slate-700 hover:fill-gray-100"
          />
        </button>
        <nav className="hidden md:flex items-center">
          <Link
            href="#quemsomos"
            className="lg:p-2 md:mx-2 text-gray-100 rounded hover:bg-gray-100 hover:text-j-dark transition-colors duration-300"
          >
            Quem Somos
          </Link>
          <Link
            href="#time"
            className="lg:p-2 md:mx-2 text-gray-100 rounded hover:bg-gray-100 hover:text-j-dark transition-colors duration-300"
          >
            Time
          </Link>
          <Link
            href="#produtos"
            className="lg:p-2 md:mx-2 text-gray-100 rounded hover:bg-gray-100 hover:text-j-dark transition-colors duration-300"
          >
            Produtos
          </Link>
          <Link href="/cart">
            <button className="p-2 md:ml-2 lg:px-4 items-center text-gray-100 flex border border-solid border-gray-100 rounded hover:bg-gray-100 hover:text-j-dark transition-colors duration-300">
              Carrinho
              <FontAwesomeIcon
                icon={faCartShopping}
                className="ml-2 w-5 mr-1"
              />
              {itemsCount > 0 && (
                <span className="ml-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                  {itemsCount}
                </span>
              )}
            </button>
          </Link>
        </nav>
        <Menu isVisible={isMenuOpen} onClose={closeMenu} />
      </header>
    </div>
  );
};
