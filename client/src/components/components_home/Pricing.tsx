import { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import { ConfigProvider } from 'antd';
import { PlanPayment } from '../logic/components_dashboard/plan';

const styleButton = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '15px',
    height: 0,
    fontWeight: 'bold',
    padding: '0'
}

const Pricing = () => {

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
                {PlanPayment.map((item, index) => (
                    <div className="pricingTable" key={index}>
                        <div className="pricingTable-header">
                            <h3 className="heading">{item.title}</h3>
                            <div className="price-value">{item.value}
                                <span className="currency">$</span>
                            </div>
                        </div>
                        <ul className="pricing-content">
                            <li>Primera vez usando: 5 búsquedas gratuitas </li>
                            <li>{item.n_search}</li>
                            <li>GeoTrend Lex: Recomendación de ventas</li>
                            <li>AutoFinance Pro: Calculadora de precios</li>
                            <li>LexIA Determination: Porcentaje de éxito</li>
                            <li>TikTok TrendFeed: Videos de tiktok</li>
                            <li>Lex Generator</li>
                            <li>Lexcom Courses: E-Commerce</li>
                        </ul>
                        <div className={clicked ? "read active" : "read "}>
                            <ButtonComponent
                                name="Regístrate ahora"
                                styleButton={styleButton}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </ConfigProvider>
    )
}

export default Pricing;