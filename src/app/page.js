import Articulos from '@/app/articulos'

export default function Page(){
  return (
    <>
  
      <div className="bg-white px-5 py-5">
        <div className='text-center'>
          <h1 className="articulos">Sobre Nosotros</h1>
          <p>El CET (Centro de Estudiantes Tecnológicos) representa los intereses de todos los estudiantes frente a las autoridades (tanto de la Universidad como fuera de ella), siendo el vínculo que tenemos con los demás órganos de la Facultad. Ante cualquier anomalía en el cumplimiento de las leyes educativas o de seguridad social, deben ser comunicados para poder gestionar una solución.</p>
        </div>
        <div>
          <Articulos/>
          
        
        </div>
       </div>
    </>
  )
}