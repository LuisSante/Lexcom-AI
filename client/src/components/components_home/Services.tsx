import { Button, Modal } from 'antd';
import '../../css/styles_home/services.css'
import Register from '../Register';
import { useState } from 'react';

interface ComponentProps {
  id: string;
}

interface NameButton {
  name: string;
}


const ButtonPrincing: React.FC<NameButton> = ({name}) => {
  const [clicked] = useState(false);
  const [registerModalVisible, setRegisternModalVisible] = useState(false);

  const showRegisterModal = () => {
    setRegisternModalVisible(true);
  };

  const handleRegisterModalCancel = () => {
    setRegisternModalVisible(false);
  };

  return (
    <>
      <div className={clicked ? "read active" : "read "}>
        <Button className="ant-btn"
          onClick={showRegisterModal}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '25px',
            height: 0,
            fontWeight: 'bold',
            padding: '0'
          }}>
          {name}
        </Button>
      </div>
      <Modal
        title="Pruebelo_gratis"
        open={registerModalVisible}
        onCancel={handleRegisterModalCancel}
        footer={null}
      >
        <Register />
      </Modal>
    </>
  )

}

const Services: React.FC<ComponentProps> = ({ id }) => {

  const registerData = {
    name: "Registrate ahora",
  };

  // const GoData = {
  //   name: "Registrate ahora",
  // };

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
              {/* <a onclick="showRegister()" className="read">Pruebalo Gratis</a> */}
              {/* <p className="read">Pruébalo Gratis</p> */}
              <ButtonPrincing {...registerData}/>


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
              {/* <a onclick="showRegister()" className="read">Pruebalo Gratis</a> */}
              <ButtonPrincing {...registerData} />
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
              {/* <a className="read" onclick="showRegister()">Pruebalo Gratis</a> */}
              <ButtonPrincing {...registerData}/>
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
        {/* <a className="div-148" onclick="showRegister()"> */}
        <p className="div-148">
          <div className="div-149">¡Vamos!</div>
        </p>
      </div>

    </div>
  )
}

export default Services