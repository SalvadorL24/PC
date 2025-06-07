function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">CONTACTO</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Formulario de Contacto</h3>
          {isSubmitted && (
            <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
              ¡Gracias! Tu mensaje ha sido enviado correctamente.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name"
              placeholder="Nombre" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" 
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" 
              required
            />
            <textarea 
              name="message"
              placeholder="Mensaje" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            ></textarea>
            <button 
              type="submit" 
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:opacity-80">
              <img src="images/facebook-icon.png" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="images/instagram-icon.png" alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="images/whatsapp-icon.png" alt="WhatsApp" className="w-10 h-10" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="images/twitter-icon.png" alt="Twitter" className="w-10 h-10" />
            </a>
          </div>
          <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
          <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center rounded">
            <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1148.7779518754571!2d-76.97579355152996!3d-12.085307781637768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7ee4efb8e21%3A0x2509617adc638a91!2sJockey%20Plaza.!5e0!3m2!1ses-419!2spe!4v1749243179365!5m2!1ses-419!2spe" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  className="rounded-lg"
                ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}