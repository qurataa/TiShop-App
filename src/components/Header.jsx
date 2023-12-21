import CartIcon from "../assets/cart.svg";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";
import InputSearch from "./InputSearch";

const Header = ({ handleOpenModalCart }) => {
  const cartTotalItems = useSelector(selectCartTotalItems);
  return (
    <header className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-3xl font-bold text-gray-100">TiShop</h1>
          <div className="flex justify-between items-center gap-4">
            <InputSearch />

            <button type="button" className="relative rounded-full bg-blue-800 p-2 text-gray-100" onClick={handleOpenModalCart}>
              {cartTotalItems > 0 ? <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-sm text-white flex items-center justify-center">{cartTotalItems}</span> : null}

              <img src={CartIcon} alt="cart" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
