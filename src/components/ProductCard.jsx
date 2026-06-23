import { Star, ShoppingCart } from 'lucide-react'

const ProductCard = ({ product,onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col justify-between h-full group">
      
      {/* প্রোডাক্টের ছবি */}
      <div className="h-48 w-full p-4 flex items-center justify-center bg-gray-50 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* প্রোডাক্টের তথ্য */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* ক্যাটাগরি */}
          <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
            {product.category}
          </span>
          
          {/* প্রোডাক্টের নাম */}
          <h3 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2 hover:text-indigo-600 cursor-pointer">
            {product.title}
          </h3>
          
          {/* রেটিং (Rating) */}
          <div className="flex items-center space-x-1 mt-2">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-gray-600">{product.rating?.rate || 4.5}</span>
            <span className="text-xs text-gray-400">({product.rating?.count || 120})</span>
          </div>
        </div>

        {/* দাম এবং অ্যাড টু কার্ট বাটন */}
        <div className="flex items-center justify-between mt-4 border-t border-gray-50 pt-3">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button 
            className="bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white p-2 rounded-full transition-colors group/btn"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard
