import '../../css/styles_home/services.css'
import { ComponentProps } from '../../interface/home';
import Pricing from './Pricing';

const Services: React.FC<ComponentProps> = ({ id }) => {

  return (
    <div className="mt-20 md:mt-10" id={id}>
      <div className="md:flex md:flex-col md:justify-center md:items-center">
        <div className="px-4">
          <Pricing />
        </div>
        <div className="text-white text-center text-lg font-bold leading-5 self-center mt-10 whitespace-nowrap md:max-w-full md:whitespace-normal">
          <p className="text-[#0561ac] text-2xl"> Contáctanos!</p>
        </div>
        <div className="text-white text-center text-sm font-normal max-w-[406px] self-center">
          <br />
          Pruebe nuestros servicios sin compromiso
          <br />
          ¡Sin riesgos, garantizado!
        </div>
      </div>
    </div>
  );
}

export default Services