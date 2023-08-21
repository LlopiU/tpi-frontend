import Link from "next/link";

export default function Navbar(){
    return (
        <>
        <div className="fixed top-0 left-0 w-full z-50 bg-gray-800">
          <nav className="bg-gray-800">
            <div className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between ">
                <a href="/">
                <img src="./cetico.jpg" alt="logo" className="h-10 w-full rounded-full" />
                </a>
                <div className="flex space-x-4 text-sm">
                  <a href="/" className="text-gray-300 hover:text-yellow-500">Inicio</a>
                  
                <div className="relative group">
                  
                    <button className="text-gray-300 hover:text-yellow-500 focus:outline-none py-0">
                      <Link href="/Carreras">Carreras</Link>
                      
                    </button>
                    <ul className="absolute hidden mt-0.5 space-y-2 bg-gray-800 text-white group-hover:block text-xs border rounded-lg">
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg ">Ingenieria Química</a>
                      </li>
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg ">Ingenieria en Sistemas</a>
                      </li>
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg ">Ingenieria Electromecanica</a>
                      </li>
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg ">Licenciatura en Administracion Rural</a>
                      </li>
                      <li>
                        <a href="/" className="block px-5 py-2 hover:bg-yellow-700 rounded-lg">Tecnicatura Universitaria en Programacion</a>
                      </li>
                      
                    </ul>
                  </div>
                  <a href="/" className="text-gray-300 hover:text-yellow-500">Feria de Apuntes</a>
                  <a href="/" className="text-gray-300 hover:text-yellow-500">Mesa de Examenes</a>
                  <a href="/Documentos" className="text-gray-300 hover:text-yellow-500">Documentos</a>
                  <a href="/" className="text-gray-300 hover:text-yellow-500">Sitio de Interes</a>
                </div>
              </div>
            </div>
          </nav>
  
        </div>
        </>
    )
}