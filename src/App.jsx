import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductCard from './components/ProductCard';
import About from './components/About';
import News from './components/News';
import Footer from './components/Footer';
import Feedback from './components/Feedback';

function Home({ loading, products, addToCart }) {
  return (
    <>
      <Slider />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Trending Products
        </h2>
        {loading ? (
          <div className="text-center py-20 text-lg font-medium text-gray-500">
            Products Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=8');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('ডাটা আনতে সমস্যা হয়েছে:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);
    if (isExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      return;
    }

    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);
    if (!isExist) return;

    if (isExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const deleteFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        cart={cartItems}
        onIncrease={addToCart}
        onDecrease={removeFromCart}
        onDelete={deleteFromCart}
      />

      <Routes>
        <Route path="/" element={<Home loading={loading} products={products} addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;