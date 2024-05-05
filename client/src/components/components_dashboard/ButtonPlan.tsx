import { Button, ConfigProvider, Form, Input, Modal, notification } from 'antd';
import React, { useState } from 'react'
import { ButtonPlanType } from '../../interface/dashboard';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
import { Card } from '../logic/components_dashboard/CardAccept';

export const ButtonPlan: React.FC<ButtonPlanType> = ({ plan, value, styleButton }) => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
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

  const onFinish = () => {
    console.log('envio form');
  };

  const onFinishFailed = () => {
    console.log('errorr');
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

            <Form
              // {...formItemLayoutPay}
              form={form}
              // layout="vertical"
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

              <Button onClick={handlePayment} type="primary" block>
                Pagar
              </Button>
            </Form>

            {Card.map((item, index) => (
              <div className='flex' key={index}>
                <img height="24" width="38" src={item.src} />
              </div>
            ))}
          </div>
        </Modal>
      </ConfigProvider>
    </>
  )
}