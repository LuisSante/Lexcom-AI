import '../../css/styles_home/services.css'
import Register from '../Register';
import { useState } from 'react';
import ButtonComponent from '../ButtonComponent';

interface ComponentProps {
  id: string;
}

const styleButton = {
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '15px',
  height: 0,
  fontWeight: 'bold',
  padding: '0'
}

const name: string = "Registrate ahora";

const types = {
  name: name,
  ButtonForm: Register,
  styleButton: styleButton,
}

const Services: React.FC<ComponentProps> = ({ id }) => {

  const [clicked] = useState(false);

  return (
    <div className='container-page-services' id={id}>
      <div className="div-75">
        <div className="demo">
          <div className="grip-pricing">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <h3 className="heading">Standard</h3>
                <div className="price-value">15
                  <span className="currency">$</span>
                  <span className="month"> /mes</span>
                </div>
              </div>
              <ul className="pricing-content">
                <li>5 consultas diarias</li>
                <li>Porcentaje de exito</li>
                <li>Recomendacion de ventas</li>
                <li>-</li>
              </ul>
              <div className={clicked ? "read active" : "read "}>
                <ButtonComponent {...types} />
              </div>

            </div>

            <div className="pricingTable">
              <div className="pricingTable-header">
                <h3 className="heading">Business</h3>
                <div className="price-value">23
                  <span className="currency">$</span>
                  <span className="month">/mes</span>
                </div>
              </div>
              <ul className="pricing-content">
                <li>15 consultas diarias</li>
                <li>Porcentaje y estadísticas</li>
                <li> Recomendación de ventas</li>
                <li>- </li>
              </ul>
              <div className={clicked ? "read active" : "read "}>
                <ButtonComponent {...types} />
              </div>
            </div>
            <div className="pricingTable">
              <div className="pricingTable-header">
                <h3 className="heading">Premium</h3>
                <div className="price-value">30
                  <span className="currency">$</span>
                  <span className="month">/mes</span>
                </div>
              </div>
              <ul className="pricing-content">
                <li>Consultas ilimitadas</li>
                <li>Porcentaje y estadísticas</li>
                <li>Recomendacion de ventas</li>
                <li>Trends</li>
              </ul>
              <div className={clicked ? "read active" : "read "}>
                <ButtonComponent {...types} />
              </div>
            </div>
          </div>

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