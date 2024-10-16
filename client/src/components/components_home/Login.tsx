import React from 'react';
import { Button, Checkbox, Form, Input, notification, ConfigProvider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../../css/login.css'
import axiosInstance from '../axios';
import { FieldType } from '../../interface/home';
// import GoogleIcon from '../../assets/google-icon.svg';
// import { reachGoogle } from '../components_login/Login';

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
            name="basic"
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="E-mail"
              name="email"
              rules={[{ required: true, message: 'Porfavor ingresa tu usuario!' }]}

            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Porfavor ingresa tu contraseña!' }]}
            >
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox style={{ color: '#f6ffed' }}>Recuerdame</Checkbox>
              <br />
              <a className="login-form-forgot p-10px" onClick={recoverpassword}>
                ¿Olvidaste tu contraseña?
              </a>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className={"div-148"} type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </div >
      </ConfigProvider>
    </>
  )
};

export default Login;