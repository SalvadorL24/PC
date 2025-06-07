const { useState, useEffect } = React;

function Funkos({ addToCart }) {
  const [funkos, setFunkos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/funkos.json')
      .then(response => response.json())
      .then(data => {
        setFunkos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error cargando funkos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Cargando funkos...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">FUNKOS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {funkos.map(funko => (
          <ProductCard 
            key={`funko-${funko.id}`} 
            product={funko} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}