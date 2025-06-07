function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
    
      <div className="w-full aspect-square bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      
      
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-green-600 dark:text-green-300 font-bold text-sm md:text-base mb-2">
          S/{product.price.toFixed(2)}
        </p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm md:text-base transition-colors"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}