const { useState, useEffect } = React;

function Accessories({ addToCart }) {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/accesorios.json')
      .then(response => response.json())
      .then(data => {
        setAccessories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error cargando accesorios:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Cargando accesorios...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">ACCESORIOS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {accessories.map(accessory => (
          <ProductCard 
            key={`accessory-${accessory.id}`} 
            product={accessory} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}