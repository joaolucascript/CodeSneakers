import Link from 'next/link';
import Image from 'next/image';
import { MenuCloseIcon } from '../../components/icons/MenuCloseIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../components/CartContext';

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Menu = ({ isVisible, onClose }: MenuProps) => {
  const cart = useCart();
  const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity;
  }, 0);
  return (
    <div
      className={`${
        isVisible ? 'flex' : 'hidden'
      } fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm z-50 md:hidden`}
      onClick={onClose}
    >
      <div
        className="w-full bg-j-dark text-gray-100 h-fit shadow-md py-4 px-5"
        onClick={(event) => event.stopPropagation()} // Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
      >
        <div className="flex justify-between mb-5 px-2">
          <Link href="/">
            <div className="flex text-2xl items-center text-gray-100 font-bold">
              <Image
                src="/icon.svg"
                alt="Logo"
                width={50}
                height={50}
                className="mr-4"
              />
              Code Sneakers
            </div>
          </Link>
          <button onClick={onClose}>
            <MenuCloseIcon className="fill-j-dark w-10 h-10 rounded-md bg-gray-100 p-2 hover:bg-slate-700 hover:fill-gray-100" />
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-2xl p-5 items-center font-bold">
          <Link
            href="#quemsomos"
            className="p-2 text-white rounded hover:bg-gray-100 hover:text-j-dark transition-colors duration-300"
            onClick={onClose}
          >
            Quem Somos
          </Link>
          <Link
            href="#time"
            className="p-2 text-white rounded hover:bg-gray-100 hover:text-j-dark transition-colors duration-300"
            onClick={onClose}
          >
            Time
          </Link>
          <Link
            href="#produtos"
            className="p-2 text-white rounded hover:bg-gray-100 hover:text-j-dark transition-colors duration-300"
            onClick={onClose}
          >
            Produtos
          </Link>
          <Link href="/cart">
            <button
              className="p-2 lg:px-4 items-center text-gray-100 flex border border-solid border-gray-100 rounded hover:bg-gray-100 hover:text-j-dark transition-colors duration-300"
              onClick={onClose}
            >
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
      </div>
    </div>
  );
};
