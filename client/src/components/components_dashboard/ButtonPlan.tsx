import { Button, ConfigProvider, Modal, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { ButtonPlanType } from '../../interface/dashboard';
import { Card } from '../logic/components_dashboard/CardAccept';
import { initMercadoPago } from '@mercadopago/sdk-react'
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
// import { usePlanContext } from './PlanContext';

export const ButtonPlan: React.FC<ButtonPlanType> = ({ plan, value, styleButton }) => {

  const public_key = import.meta.env.VITE_PUBLIC_KEY;
  const navigate = useNavigate();
  const [buttonModalVisible, setButtonModalVisible] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  initMercadoPago(public_key, {
    locale: 'es-PE'
  });

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
  };


  const createPreference = async () => {
    try {
      const resposeEmail = await axiosInstance.get("get_email/");
      const getEmail = resposeEmail.data.email;
      await axiosInstance.post("cache/", {
        'email': getEmail,
        'plan': plan,
      })

      const response = await axiosInstance.post("create_preference/", {
        title: plan,
        quantity: 1,
        price: value,
      });
      const data = response.data;
      const sandbox = data.sandbox_init_point;
      window.location.href = sandbox;
    }

    catch (error) {
      api.error({
        message: 'Registrate en nuestra plataforma',
        duration: 3
      });
    }
  }


  const handlePayment = async () => {

    const resposeEmail = await axiosInstance.get("get_email/");
    const getEmail = resposeEmail.data.email;
    const responsePlan = await axiosInstance.post("send_plan/", {
      'email': getEmail
    })
    const currentPlan = responsePlan.data.plan;

    axiosInstance.post('update_plan/', { suscription: currentPlan })
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

  useEffect(() => {
    const fetchRequest = async () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const collectionStatus = urlParams.get('collection_status');
      const status = urlParams.get('status');

      console.log('collectionStatus ', collectionStatus);
      console.log('status ', status);
      if (status === 'approved') {
        // console.log('CURRENT PLAN', currentPlan);
        handlePayment();
      } else {
        console.log('Error en la compra');
      }
    }

    fetchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleButtonClick = () => {
    setButtonModalVisible(true);
  };

  return (
    <>
      {contextHolder}
      <ConfigProvider
        theme={{
          components: {
            Form: {
              labelColor: '#fff',
              colorBgContainer: '#f6ffed',
              controlOutline: '#000000',
            },
          },
          token: {
            fontFamily: "Poppins, sans-serif",
          },
        }}
      >

        <button onClick={handleButtonClick} style={styleButton}>
          Comprar Plan
        </button>
        <Modal
          title="Carrito de compras"
          open={buttonModalVisible}
          onCancel={handleRegisterModalCancel}
          footer={null}
        >
          <div style={{ color: 'white' }}>
            <p>Tu pedido: {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</p>
            <p>Total: ${value}</p>
            <div className='flex flex-col gap-4'  >
              <Button onClick={createPreference} type="primary" htmlType="submit">
                Pagar
              </Button>
            </div>
            <div className='flex gap-4 mt-4'>
              {Card.map((item, index) => (
                < img height="24" width="38" key={index} src={item.src} />
              ))}
            </div>
          </div>
        </Modal>
      </ConfigProvider >
    </>
  )
}