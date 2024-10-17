import React from 'react';
import axiosInstance from '../axios';
import { Button, Form, Input, notification, ConfigProvider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FieldType } from '../../interface/home';
import GoogleIcon from '../../assets/google-icon.svg';
import { reachGoogle } from '../logic/components_form/redirect-oauth';

const Login: React.FC<FieldType> = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const onFinish = async (values: FieldType) => {
    try {
      const res = await axiosInstance.post('token/', values);

      if (res.status === 200) {
        const access_token = res.data.access;
        const refresh_token = res.data.refresh;

        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');

        api.success({
          message: 'Inicio de sesión exitoso!',
          description: 'Bienvenido de nuevo a LexCom',
          duration: 4
        });

        navigate('/dashboard');
      }
    } catch (err) {
      api.error({
        message: 'Error al iniciar sesión',
        description: 'Por favor, revise su usuario o contraseña',
        duration: 4
      });
    }
  };

  const recoverpassword = () => {
    navigate('/recoverpassword');
  }

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
        <div  >
          <Form
            // name="basic"
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <div className='flex flex-col justify-center md:pl-28 max-w-xl'>
              <Form.Item<FieldType>
                wrapperCol={{ span: 24 }}
                // label="E-mail"
                name="email"
                rules={[{ required: true, message: 'Por favor ingresa tu email' }]}

              >
                <Input prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item<FieldType>
                wrapperCol={{ span: 24 }}
                // label="Password"
                name="password"
                rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>

              <div className='flex flex-col justify-center items-center'>
                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button className="w-52" type="primary" htmlType="submit">
                    Continue
                  </Button>
                </Form.Item>

                <div className='flex items-center pb-4 w-full'>
                  <hr className="flex-grow border-[#F2F2F2] border-t" />
                </div>

                <button
                  className='flex justify-center items-center gap-x-2 bg-[#F2F2F2] hover:bg-slate-300 py-[6px] border-none rounded-md w-52 font-medium font-poppins cursor-pointer'
                  onClick={reachGoogle}
                >
                  <img src={GoogleIcon} className='max-w-full' />
                  <span>Google</span>
                </button>
                <div className='pt-4'>
                  <a onClick={recoverpassword}>
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

            </div>

          </Form>
        </div >
      </ConfigProvider >
    </>
  )
};

export default Login;