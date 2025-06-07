const { useState, useEffect } = React;

function Games({ addToCart }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 fetch(https://salvador124.github.io/game-zone/data/productos/juegos.json)
.then(response => response.json())
.then(data => setProductos(data))
.catch(error => console.error('Error:', error));
> {
        console.error('Error cargando juegos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Cargando juegos...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">JUEGOS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map(game => (
          <ProductCard 
            key={`game-${game.id}`} 
            product={game} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}
