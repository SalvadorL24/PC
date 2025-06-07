function Header({ darkMode, toggleDarkMode, setCurrentPage, cartItems, showCart, setShowCart }) {
  const pages = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'juegos', label: 'JUEGOS' },
    { id: 'funkos', label: 'FUNKOS' },
    { id: 'consolas', label: 'CONSOLAS' },
    { id: 'accesorios', label: 'ACCESORIOS' },
    { id: 'contacto', label: 'CONTACTO' }
  ];

  return (
    <header className="bg-green-200 dark:bg-green-800 p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <h1 
          onClick={() => setCurrentPage('inicio')} 
          className="text-3xl font-bold text-gray-800 dark:text-white cursor-pointer order-1 md:order-none mb-4 md:mb-0"
        >
          GAME ZONE
        </h1>
        
        
        <div className="flex items-center space-x-4 order-2">
          <button onClick={toggleDarkMode} className="p-2 rounded-full focus:outline-none">
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button onClick={() => setShowCart(!showCart)} className="relative p-2">
            <span>🛒</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          
          <button className="p-2">
            <span>🔍</span>
          </button>
        </div>
      </div>
      
      <nav className="bg-green-300 dark:bg-green-700 mt-2">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-0 md:justify-around py-2">
            {pages.map(page => (
              <li 
                key={page.id} 
                className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-300 cursor-pointer px-2 py-1 text-sm md:text-base"
                onClick={() => setCurrentPage(page.id)}
              >
                {page.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}