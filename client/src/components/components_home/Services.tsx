import '../../css/styles_home/services.css'
import Pricing from './Pricing';

interface ComponentProps {
  id: string;
}

const Services: React.FC<ComponentProps> = ({ id }) => {

  return (
    <div className='container-page-services' id={id}>
      <div className="div-75">
        <div className="demo">
        <Pricing/>
        </div>

        <div className="div-146">
          <span style={{}}>
            Hey! Necesitas un plan personalizado?
          </span>
          <span style={{ color: '#0561ac' }}> Contáctanos!</span>
        </div>
        <div className="div-147">
          <br />
          Pruebe nuestros servicios sin compromiso durante
          <br />
          7 días.
          <br />
          Si no queda satisfecho, le devolvemos su dinero.
          <br />
          ¡Sin riesgos, garantizado!
        </div>
        <p className="div-148">
          <div className="div-149">¡Vamos!</div>
        </p>
      </div>

    </div>
  )
}

export default Services