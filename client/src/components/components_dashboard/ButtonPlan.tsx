import { Button, ConfigProvider, Modal, notification } from 'antd';
import React, { useState } from 'react'
import { ButtonPlanType } from '../../interface/dashboard';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

export const ButtonPlan: React.FC<ButtonPlanType> = ({ plan, value, styleButton }) => {
  const navigate = useNavigate()
  const [buttonModalVisible, setButtonModalVisible] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
  };

  const handlePayment = () => {
    axiosInstance.post('update_plan/', { new_plan: plan })
      .then(response => {
        handleRegisterModalCancel();
        console.log(response.data);
        api.success({
          message: 'Compra realizada con éxito',
          description: 'Espere un momento por favor, actualizando...',
          duration: 3
        });
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000); // 3000 milisegundos = 3 segundos
      })
      .catch(error => {
        console.error('Error al realizar la compra:', error);
        api.error({
          message: 'Error al realizar la compra',
          duration: 3
        });
      });
  };

  const handleButtonClick = () => {
    setButtonModalVisible(true);
  };

  return (
    <>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins, sans-serif",
          },
        }}
      >
        <Button value={plan} onClick={handleButtonClick} style={styleButton}>
          Comprar Plan
        </Button>
        <Modal
          title="Carrito de compras"
          open={buttonModalVisible}
          onCancel={handleRegisterModalCancel}
          footer={null}
        >
          <div style={{ color: 'white' }}>
            <p>Tu pedido: {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</p>
            <p>Total: ${value}</p>
            <Button onClick={handlePayment} type="primary" block>
              Pagar
            </Button>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  )
}