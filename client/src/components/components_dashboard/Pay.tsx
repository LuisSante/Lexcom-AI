import { useState } from 'react';
import { ConfigProvider } from 'antd';
import { TransitionY } from '../Section';
import { PlanPayment } from '../logic/components_dashboard/plan';
import { ButtonPlan } from './ButtonPlan';
import { styleButton } from '../logic/components_dashboard/style_antd';
import About from '../components_home/About';
import Faq from '../components_home/FAQ';
import NavbarPricing from './NavbarPricing';

const Pay = () => {

    const [clicked] = useState(false);

    return (
        <>
            <NavbarPricing />
            <div className='container-page-services'>
                <TransitionY>
                    <h1 className='mt-[100px] text-center'>Elige el plan de LexCom adecuado para ti</h1>
                    <p className='text-center'>LexCom te ofrece 5 búsquedas gratuitas al comenzar. <br /> Sin embargo, cuando estas acaben, dispones de opciones de pago aumentar tus búsuedas</p>
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
                                        <li>{item.n_search}</li>
                                        <li>AutoFinance Pro: Calculadora de precios</li>
                                        <li>LexIA Determination: Porcentaje de éxito</li>
                                        <li>TikTok TrendFeed: Videos de tiktok</li>
                                        <li>Lex Generator</li>
                                        <li>Lexcom Courses: E-Commerce</li>
                                    </ul>
                                    <div className={clicked ? "read active" : "read "}>
                                        <ButtonPlan
                                            plan={item.plan}
                                            value={item.value}
                                            styleButton={styleButton}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '40px' }}></div>
                        <div className='mt-20 mb-72'>
                            <Faq id="faq" />
                        </div>
                        <About id='about' />
                    </ConfigProvider>
                </TransitionY>
            </div>
        </>
    )
}

export default Pay