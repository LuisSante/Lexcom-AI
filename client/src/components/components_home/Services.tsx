import '../../css/styles_home/services.css'
import { ComponentProps } from '../../interface/home';
import Pricing from './Pricing';

const Services: React.FC<ComponentProps> = ({ id }) => {

  return (
    <div className='mt-20 md:mt-10' id={id}>
      <div className="md:flex md:flex-col">
        <div className="">
          <Pricing />
        </div>
        <div className="text-white text-center text-lg font-bold leading-5 self-center mt-7 whitespace-nowrap md:max-w-full md:whitespace-normal">
          <span>
            Hey! Necesitas un plan personalizado?
          </span>
          <br />
          <span style={{ color: '#0561ac' }}> Contáctanos!</span>
        </div>
        <div className="text-white text-center text-sm font-normal leading-[142.857%] max-w-[406px] self-center">
          <br />
          Pruebe nuestros servicios sin compromiso
          <br />
          con 8 búsquedas gratuitas
          <br />
          ¡Sin riesgos, garantizado!
        </div>
        {/* <p className="div-148">
          <div className="text-white text-center text-sm font-bold leading-[120%] uppercase self-center whitespace-nowrap md:whitespace-normal">¡Vamos!</div>
        </p> */}
      </div>

    </div>
  )
}

export default Services