import { useState } from 'react';
import { ConfigProvider } from 'antd';
import { ButtonPlan } from './ButtonPlan';

const styleButton = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '15px',
    height: 0,
    fontWeight: 'bold',
    padding: '0'
}

export const Payment = () => {

    const [clicked] = useState(false);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        titleColor: '#fff',
                        colorBgContainer: '#f6ffed',
                        controlOutline: '#000000',
                        contentBg: '#000000',
                        titleFontSize: 25,
                        headerBg: '#000000',
                        colorIcon: '#fff',
                        colorIconHover: '#ecb6ff'
                    },
                },
            }}
        >
            <div className="grip-pricing">

                <div className="pricingTable">
                    <div className="pricingTable-header">
                        <h3 className="heading">Standard</h3>
                        <div className="price-value">19
                            <span className="currency">$</span>
                        </div>
                    </div>
                    <ul className="pricing-content">
                        <li>Primera vez usando: 2 búsquedas gratuitas </li>
                        <li>5 búsquedas </li>
                        <li>Porcentaje de éxito</li>
                        <li>Recomendacion de ventas</li>
                        <li>-</li>
                    </ul>
                    <div className={clicked ? "read active" : "read "}>
                    <ButtonPlan
                            name="Regístrate ahora"
                            styleButton={styleButton}
                        />
                    </div>
                </div>

                <div className="pricingTable">
                    <div className="pricingTable-header">
                        <h3 className="heading">Business</h3>
                        <div className="price-value">36
                            <span className="currency">$</span>
                        </div>
                    </div>
                    <ul className="pricing-content">
                        <li>Primera vez usando: 2 búsquedas gratuitas </li>
                        <li>10 búsquedas</li>
                        <li>Porcentaje y estadísticas</li>
                        <li> Recomendación de ventas</li>
                        <li>- </li>
                    </ul>
                    <div className={clicked ? "read active" : "read "}>
                        <ButtonPlan
                            name="Regístrate ahora"
                            styleButton={styleButton}
                        />
                    </div>
                </div>

                <div className="pricingTable">
                    <div className="pricingTable-header">
                        <h3 className="heading">Premium</h3>
                        <div className="price-value">70
                            <span className="currency">$</span>
                        </div>
                    </div>
                    <ul className="pricing-content">
                        <li>Primera vez usando: 2 búsquedas gratuitas </li>
                        <li>20 búsquedas</li>
                        <li>Porcentaje y estadísticas</li>
                        <li>Recomendacion de ventas</li>
                        <li>-</li>
                    </ul>
                    <div className={clicked ? "read active" : "read "}>
                        <ButtonPlan
                            name="Regístrate ahora"
                            styleButton={styleButton}
                        />
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}