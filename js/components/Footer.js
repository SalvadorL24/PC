function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-green-200 dark:bg-green-800 p-4 text-center">
      <div className="container mx-auto">
        <p className="text-gray-800 dark:text-white">
          © {new Date().getFullYear()} GAME ZONE - Todos los derechos reservados
        </p>
        <p className="text-gray-800 dark:text-white mt-2">
          <button 
            onClick={() => setCurrentPage('contacto')}
            className="hover:underline"
          >
            Contacto
          </button>
        </p>
      </div>
    </footer>
  );
}