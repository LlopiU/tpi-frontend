import Articulos from '@/app/articulos'
import Comision from '@/app/comision'
import Carusel from '@/app/carusel'


export const metadata = {
  title: 'Cet-Home',
  description: 'Pagina Principal',
}
export default function Page(){

  
  return (
    <>
    <div>
      <Carusel/>
      <div className="bg-white px-5 py-5">
       
        <div className='text-center'>
          <h1 className="articulos">Sobre Nosotros</h1>
          <div className='text-justify py-5'>
            <p>El CET (Centro de Estudiantes Tecnológicos) representa los intereses de todos los estudiantes frente a las autoridades (tanto de la Universidad como fuera de ella), siendo el vínculo que tenemos con los demás órganos de la Facultad. Ante cualquier anomalía en el cumplimiento de las leyes educativas o de seguridad social, deben ser comunicados para poder gestionar una solución.</p>
          </div>
          <div className='text-justify py-4'>
            <p>En nuestra oficina, vas a encontrar un grupo de alumnos capacitados y dispuestos a ayudarte con cualquier duda, inconveniente, o para escuchar tus ideas y propuestas, y te asesoramos en cuestiones académicas, si necesitas ponerte en contacto con las autoridades de la facultad o tenés que presentar alguna nota.</p>
          </div>
          <div className='text-justify py-4'>
            <p>Además, del asesoramiento en cuestiones académicas, el centro de estudiantes te ofrece otros servicios que hacen tus días en la facultad mas cómodos y relajados. Solo con tu DNI o libreta podes hacer uso de los siguientes artículos.</p>
          </div>
        </div>
        <div>
          <Articulos/>
          <Comision/>
          <div>
        
          </div>
        
        </div>
       </div>
       </div>

    </>
  )
}