function Cart({ cartItems, setShowCart, removeFromCart }) {
  return (
    <div className="fixed top-20 right-4 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 z-50 w-64 max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-gray-800 dark:text-white">Carrito</h3>
        <button 
          onClick={() => setShowCart(false)}
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ✕
        </button>
      </div>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">El carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-gray-800 dark:text-white">{item.name}</p>
                <p className="text-green-600 dark:text-green-300">${item.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold text-gray-800 dark:text-white">
            Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </div>
          <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}