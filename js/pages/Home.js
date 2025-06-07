function Home() {
 
  const ads = [
    { id: 1, image: 'images/banner.jpge.jpg', link: '#' },
    { id: 2, image: 'images/banner2.webp', link: '#' },
    { id: 3, image: 'images/banner3.webp', link: '#' },
    { id: 4, image: 'images/banner4.webp', link: '#' }
  ];

  return (
    <div className="container mx-auto p-4">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {ads.slice(0, 2).map(ad => (
          <a key={`ad-top-${ad.id}`} href={ad.link} className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
            <img 
              src={ad.image} 
              alt="Anuncio" 
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '16/9' }}
            />
          </a>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ads.slice(2, 4).map(ad => (
          <a key={`ad-bottom-${ad.id}`} href={ad.link} className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
            <img 
              src={ad.image} 
              alt="Anuncio" 
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '16/9' }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}