import { useState } from 'react';
import { ConfigProvider } from 'antd';
import { ButtonPlan } from './ButtonPlan';
import { PlanPayment } from '../logic/components_dashboard/plan';
import { PaymentPlan } from '../../interface/dashboard';

const styleButton = {
    background: 'transparent',
    border: 'none',
    color: 'black',
    fontSize: '15px',
    height: 0,
    fontWeight: 'bold',
    padding: '0'
}

export const Payment: React.FC<PaymentPlan> = ({defaultValue , onChange}) => {

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
            <div className="grip-pricing-modal">

                {PlanPayment.map((item, index) => (
                    <div className="pricingTable" key={index}>
                        <div className="pricingTable-header" style={{ color: 'black' }}>
                            <h3 className="heading">{item.title}</h3>
                            <div className="price-value">{item.value}
                                <span className="currency">$</span>
                            </div>
                        </div>
                        <ul className="pricing-content">
                            <li>{item.n_search}</li>
                            <li>{item.benefits1}</li>
                            <li>{item.benefits2}</li>
                        </ul>
                        <div className={clicked ? "read active" : "read "}>
                            <ButtonPlan
                                type= {item.title}
                                value_plan={item.value_plan}
                                name="Comprar Plan"
                                styleButton={styleButton}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </ConfigProvider>
    )
}
