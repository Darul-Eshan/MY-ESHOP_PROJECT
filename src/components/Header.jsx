
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Heart, Search, ShoppingCart, Menu, X, Trash2, Plus, Minus } from 'lucide-react';

const Header = ({ cartCount, cart, onIncrease, onDecrease, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">E-Shop</div>

        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-600 ml-8">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          <Link to="/news" className="hover:text-indigo-600 transition-colors">News</Link>
        </nav>

        <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="bg-transparent w-full focus:outline-none text-sm text-gray-700"
          />
          <Search className="h-4 w-4 text-gray-400 cursor-pointer hover:text-indigo-500" />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer text-gray-700 hover:text-indigo-500">
            <Heart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </div>

          <div onClick={() => setIsCartOpen(true)} className="relative cursor-pointer text-gray-700 hover:text-indigo-600">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>

          <button onClick={toggleMenu} className="md:hidden flex items-center text-gray-700 hover:text-indigo-500">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2 w-full mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="bg-transparent w-full focus:outline-none text-sm text-gray-700"
            />
            <Search className="h-4 w-4 text-gray-400 cursor-pointer hover:text-indigo-500" />
          </div>
          <div className="flex flex-col items-start space-y-4 font-medium text-gray-600 ml-8">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/news" className="hover:text-indigo-600 transition-colors">News</Link>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={() => setIsCartOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[350px] sm:w-[400px] bg-white shadow-2xl z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <ShoppingCart /> Your Cart ({cart.length})
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="p-1 rounded-full hover:bg-gray-100 text-gray-500">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-gray-400">Your cart is empty!</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="relative flex items-start gap-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain bg-white p-1 rounded border" />
                <div className="flex-1 min-w-0 pr-8">
                  <h4 className="text-sm font-semibold text-gray-800 truncate">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Qty: {item.quantity}</p>
                  <p className="text-sm font-bold text-indigo-600 mt-1">${(item.price * item.quantity).toFixed(2)}</p>

                  <div className="flex items-center space-x-2 mt-2 bg-white border w-max rounded-md shadow-sm">
                    <button
                      onClick={() => onDecrease && onDecrease(item)}
                      className="p-1 hover:bg-gray-100 text-gray-600 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-xs font-semibold px-2 text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => onIncrease && onIncrease(item)}
                      className="p-1 hover:bg-gray-100 text-gray-600 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onDelete && onDelete(item)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                  title="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-4 space-y-4">
          <div className="flex items-center justify-between text-lg font-bold text-gray-800">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
