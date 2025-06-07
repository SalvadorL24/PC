const { useState } = React;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('inicio');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'juegos': return <Games addToCart={addToCart} />;
      case 'funkos': return <Funkos addToCart={addToCart} />;
      case 'consolas': return <Consoles addToCart={addToCart} />;
      case 'accesorios': return <Accessories addToCart={addToCart} />;
      case 'contacto': return <Contact />;
      default: return <Home addToCart={addToCart} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        setCurrentPage={setCurrentPage}
        cartItems={cartItems}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      
      <main className="flex-grow bg-white dark:bg-gray-800">
        {renderPage()}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
      
      {showCart && (
        <Cart 
          cartItems={cartItems} 
          setShowCart={setShowCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);