import Link from "next/link";

export default function Navbar(){
    return (
        <>
        <div className="fixed top-0 left-0 w-full z-50 bg-gray-800">
          <nav className="bg-gray-800">
            <div className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between ">
                <a href="/" className="px-0 py-0">
                <img src="./cetico.jpg" alt="logo" className="h-10 w-15 rounded-full" />
                </a>
                <div className="flex space-x-4 text-base">
                  <a href="/" className="text-gray-300 hover:text-yellow-500 max-w-xs transition duration-300 ease-in-out hover:scale-110">Inicio</a>
                  
                <div className="relative group">
                  
                    <button className="text-gray-300 hover:text-yellow-500 focus:outline-none py-0 max-w-xs transition duration-300 ease-in-out hover:scale-110">
                      <Link href="/Carreras">Carreras</Link>
                      
                    </button>
                    <ul className="absolute hidden mt-0.5 space-y-2 bg-gray-800 text-white group-hover:block text-xs border rounded-lg">
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110">Ingenieria Química</a>
                      </li>
                      
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110">Ingenieria en Sistemas</a>
                      </li>
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110">Ingenieria Electromecanica</a>
                      </li>
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110">Licenciatura en Administracion Rural</a>
                      </li>
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110">Tecnicatura Universitaria en Programacion</a>
                      </li>
                      
                    </ul>
                  </div>
                  <button className="text-gray-300 hover:text-yellow-500 focus:outline-none py-0 max-w-xs transition duration-300 ease-in-out hover:scale-110">
                      <Link href="/Feria">Feria de Apuntes</Link>
                  </button>
                  <button className="text-gray-300 hover:text-yellow-500 focus:outline-none py-0 max-w-xs transition duration-300 ease-in-out hover:scale-110">
                      <Link href="/Mesas">Mesa de Examenes</Link>
                      
                  </button>
                  <button className="text-gray-300 hover:text-yellow-500 focus:outline-none py-0 max-w-xs transition duration-300 ease-in-out hover:scale-110">
                      <Link href="/Documentos">Documentos</Link>
                      
                  </button>
                  <button className="text-gray-300 hover:text-yellow-500 focus:outline-none py-0 max-w-xs transition duration-300 ease-in-out hover:scale-110">
                      <Link href="/Sitio">Sitio de Interes</Link>
                      
                  </button>

                </div>
              </div>
            </div>
          </nav>
  
        </div>
        </>
    )
}