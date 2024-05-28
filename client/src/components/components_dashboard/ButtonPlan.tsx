import { Button, ConfigProvider, Modal } from 'antd';
import React, { useState } from 'react'
import { ButtonPlanType } from '../../interface/dashboard';
import { Card } from '../logic/components_dashboard/CardAccept';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axiosInstance from '../axios';


export const ButtonPlan: React.FC<ButtonPlanType> = ({ plan, value, styleButton }) => {

  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  initMercadoPago(public_key, {
    locale: 'es-PE'
  });


  const [buttonModalVisible, setButtonModalVisible] = useState(false);
  // const [preferenceId, setPreferenceId] = useState(null);

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
  };

  const createPreference = async () => {
    try {
      const response = await axiosInstance.post("create_preference/", {
        title: plan,
        quantity: 1,
        price: value,
      });

      // const id = response.data;
      const data = response.data;

      const sandbox = data.sandbox_init_point;
      // const sandbox = data.init_point;
      // window.location.href = sandbox;
      window.open(sandbox);
      // return id;

      try {
        const response = await axiosInstance.post("webhook/");
        console.log('datos', response.data);
        // const status = response.data.state;
        // console.log('estado', status);

        // if (status === 'approved') {
        //   // window.location.href = "https://www.youtube.com/watch?v=QqiDandkcBY";
        //   console.log("estadooooo aprovadoooooo")
        // }
        // console.log("TARJETAZOO", response);
      }

      catch {
        console.log("algo")
      }

    }

    catch (error) {
      console.log();
    }
  }

  // const handleBuy = async () => {
  //   const id = await createPreference();
  //   console.log(id);
  //   if (id) {
  //     setPreferenceId(id);
  //   }
  // }

  // const handleMercadoPagoPayment = () => {
  //   // Aquí puedes agregar la lógica para procesar el pago con Mercado Pago
  //   console.log('Procesando pago con Mercado Pago');
  // }

  // const handlePayment = () => {
  //   axiosInstance.post('update_plan/', { new_plan: plan })
  //     .then(response => {
  //       handleRegisterModalCancel();
  //       console.log(response.data);
  //       api.success({
  //         message: 'Compra realizada con éxito',
  //         description: 'Espere un momento por favor, actualizando...',
  //         duration: 3
  //       });
  //       setTimeout(() => {
  //         navigate('/dashboard');
  //       }, 3000); // 3000 milisegundos = 3 segundos
  //     })
  //     .catch(error => {
  //       console.error('Error al realizar la compra:', error);
  //       api.error({
  //         message: 'Error al realizar la compra',
  //         duration: 3
  //       });
  //     });
  // };

  const handleButtonClick = () => {
    setButtonModalVisible(true);
  };

  // const onFinish = async (values: PayType) => {
  //   try {
  //     console.log(values);
  //   }

  //   catch (err) {
  //     console.log('error');
  //   }
  // };

  // const onFinishFailed = () => {
  //   console.log('errorr');
  // };

  return (
    <>
      {/* {contextHolder} */}
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
            <div className='flex flex-col gap-4'  >
              <Button onClick={createPreference} type="primary" htmlType="submit">
                Pagar
              </Button>
              {/* {preferenceId && (
                <Wallet initialization={{ preferenceId: preferenceId }} />
              )} */}
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