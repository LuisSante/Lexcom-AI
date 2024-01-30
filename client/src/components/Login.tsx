import React from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface FieldType {
  password: string;
  remember: string;
  user: string;
}

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const onFinish = (values: FieldType) => {
    console.log(values);
    axios.post('http://localhost:8000/api/user/login', values)
      .then(
        res => {
          if (res.status === 200) {  // Cambiado de 201 a 200 para reflejar éxito en el inicio de sesión
            
            console.log(res.data);
            // Puedes manejar la respuesta del servidor según tus necesidades
            // Por ejemplo, podrías almacenar información del usuario en el estado o en el almacenamiento local.
            // setUser(res.data.user);  // Suponiendo que res.data tiene información del usuario
            api.success({
              message: 'Inicio de sesión exitoso!',
              description: 'Bienvenido de nuevo a LexCom',
              duration: 1000
            });
          }
        }
      )
      .catch(
        err => {
          api.error({
            message: 'Error al iniciar sesión',
            description: 'Por favor, revise su usuario o contraseña. ' + `${err.message}`,
            duration: 1000
          });
        }
      );
  }
  

  
  return (
    <>
        {contextHolder}
    <Form
      name="basic"
      form={form}
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      // onFinish={onFinish} 
    >
      <Form.Item<FieldType>
        label="User"
        name="user"
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
        <Checkbox>Recuerdame</Checkbox>
        <br />
        <a className="p-10px login-form-forgot" href="">
          ¿Olvidaste tu contraseña?
        </a>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  </>
  )
};

export default Login;