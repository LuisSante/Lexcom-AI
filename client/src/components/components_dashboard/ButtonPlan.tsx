import { Button, ConfigProvider, Modal } from 'antd';
import React, { useState } from 'react'
import { ButtonPlanType, PayType } from '../../interface/dashboard';
// import axiosInstance from '../axios';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { Card } from '../logic/components_dashboard/CardAccept';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


export const ButtonPlan: React.FC<ButtonPlanType> = ({ plan, value, styleButton }) => {
  initMercadoPago('TEST-1a4ae6c1-f284-46ff-9084-9385b30b0bbd', {
    locale: 'es-PE'
  });

  // const navigate = useNavigate()
  // const [form] = Form.useForm();
  const [buttonModalVisible, setButtonModalVisible] = useState(false);
  // const [api, contextHolder] = notification.useNotification();
  // const [showMercadoPagoButton, setShowMercadoPagoButton] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);

  const handleRegisterModalCancel = () => {
    setButtonModalVisible(false);
    // setShowMercadoPagoButton(false)
  };

  // const handlePayment = () => {
  //   setShowMercadoPagoButton(true);
  // }

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/create_preference/", {
        title: plan,
        quantity: 1,
        price: value,
      });

      console.log('response', response)

      const id = response.data;

      console.log(id)
      return id;
    }

    catch (error) {
      console.log(error);
    }
  }

  const handleBuy = async () => {
    const id = await createPreference();
    console.log(id);
    if (id) {
      setPreferenceId(id);
    }
  }

  const handleMercadoPagoPayment = () => {
    // Aquí puedes agregar la lógica para procesar el pago con Mercado Pago
    console.log('Procesando pago con Mercado Pago');
  }

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

            {/* <Form
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="number_target"
                rules={[{ required: true }, { warningOnly: true }, { type: 'string', min: 16 }]}
              >
                <Input placeholder="Número de tarjeta" />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 24 }}
                className='mb-0'
              >
                <Form.Item
                  name="MM_AA"
                  rules={[{ required: true }, { warningOnly: true }, { type: 'string', min: 5 }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginRight: '16px' }}
                >
                  <Input placeholder="MM/AA" />
                </Form.Item>
                <Form.Item
                  name="code_security"
                  rules={[{ required: true }, { warningOnly: true }, { type: 'string', min: 1 }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}

                >
                  <Input placeholder="Código de seguridad" />
                </Form.Item>
              </Form.Item>
              <Form.Item
                name="titular"
                // label="Titular de la tarjeta"
                rules={[{ required: true }, { warningOnly: true }, { type: 'string', min: 1 }]}
              >
                <Input placeholder="Titular de la tarjeta" />
              </Form.Item>
              <Form.Item
                name="code_postal"
                // label="Código postal"
                rules={[{ required: true }, { warningOnly: true }, { type: 'string', min: 1 }]}
              >
                <Input placeholder="Código postal" />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: '¡La entrada no es un correo electrónico válido!',
                  },
                  {
                    required: true,
                    message: '¡Por favor ingrese su correo electrónico!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

            </Form> */}
            <div className='flex flex-col gap-4'  >
              <Button onClick={handleBuy} type="primary" htmlType="submit">
                Pagar
              </Button>
              {preferenceId && (
                <Wallet initialization={{ preferenceId: preferenceId }} />
              )}
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