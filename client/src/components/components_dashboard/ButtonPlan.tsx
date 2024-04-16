import { Button, Modal} from 'antd';
import React, { useState } from 'react'
import { ButtonPlanType } from '../../interface/dashboard';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

export const ButtonPlan: React.FC<ButtonPlanType> = ({ plan, value, styleButton }) => {
  const navigate = useNavigate()
  const [buttonModalVisible, setButtonModalVisible] = useState(false);

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
  };

  const handlePayment = () => {
    axiosInstance.post('update_plan/', { new_plan: plan })
      .then(response => {
        navigate('/dashboard')
        handleRegisterModalCancel();
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error al realizar la compra:', error);
      });
  };

  const handleButtonClick = () => {
    setButtonModalVisible(true);
  };

  return (
    <>
      <Button value={plan} onClick={handleButtonClick} style={styleButton}>
        Comprar Plan
      </Button>
      <Modal
        title="Finaliza tu compra"
        open={buttonModalVisible}
        onCancel={handleRegisterModalCancel}
        footer={null}
      >
        <div style={{ color: 'white' }}>
            <p>Tu pedido: {plan}</p>
            <p>Total: ${value}</p>
                <Button onClick={handlePayment} type="primary" block>
                    Pagar
                </Button>
        </div>
      </Modal>
    </>
  )
}