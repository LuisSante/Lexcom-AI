import React, { ChangeEvent, useEffect, useState } from 'react'
import axiosInstance from '../components/axios';
import '../css/Dashboard.css';
import { Avatar, Space, Input, MenuProps, Breadcrumb, theme, Typography, Flex, Button, Modal, Form, notification } from 'antd';
import { Dropdown, ConfigProvider, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import logo from '../assets/lexcom.svg';
import '../css/Dashboard.css';
import About from '../components/components_home/About';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface UserType {
  id: number,
  username: string,
  email: string,
  name: string,
  surname: string,
  phone: string,
  country: string,
  city: string,
  address: string,
  gender: string,
  date_of_birth: string,
  password: string,
}
interface FieldType {
  email: string
}

const Settings: React.FC = () => {

  const { Header, Content } = Layout;
  const [data, setData] = useState<UserType | null>(null);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditPassword = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = async (email: FieldType) => {
    axios.post('http://localhost:8000/api/v1/password_reset/', email)
      .then(
        res => {
          if (res.status === 200) {
            api.success({
              message: 'Envío exitoso!',
              description: 'Revise su correo electrónico',
              duration: 4
            })
          }
        }
      )
      .catch(
        err => {
          api.error({
            message: 'Error al registrar usuario',
            description: `${err.message}`,
            duration: 4
          })
        }
      )
    setIsModalVisible(false);

  };




  const emailValidator = (_: any, value: string) => {
    if (value !== data?.email) {
      return Promise.reject(new Error('El correo es incorrecto'));
    }
    return Promise.resolve();
  };

  const [form] = Form.useForm();

  const handleSaveClick = () => {
    const url = `update/`

    const userData = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      country: country,
      city: city,
      address: address,
      gender: gender,
      username: username,
      id: data?.id,
      date_of_birth: data?.date_of_birth,
      password: data?.password
    };

    axiosInstance.put(url, userData)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log('error:', err);
      })
      .finally(() => {

      })
    setIsEditing(false);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const fetchData = () => {
      const url = `update/`
      axiosInstance.get<UserType>(url)
        .then(response => {
          setData(response.data);
          setName(response.data.name);
          setSurname(response.data.surname);
          setEmail(response.data.email);
          setUsername(response.data.username);
          setPhone(response.data.phone);
          setCountry(response.data.country);
          setCity(response.data.city)
          setAddress(response.data.address);
          setGender(response.data.gender);

        })
        .catch(err => {

        })
        .finally(() => {

        })
    };
    fetchData();
  }, []);


  const handleLogout = () => {
    try {
      axiosInstance.post('logout/', {
        refresh_token: localStorage.getItem('refresh_token'),
      });

      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;

      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handleSettings = async () => {
    navigate('/dashboard');
  }

  const items: MenuProps['items'] = [
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={handleSettings}>
          Nueva Busqueda
        </a>
      ),
    },
    {
      key: '4',
      danger: true,
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={handleLogout}>
          Logout
        </a>
      ),
    },
  ];
  const handleChange = (event: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(event.target.value);
  };


  return (
    <>
      {contextHolder}
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: '#000',
              bodyBg: '#000',
            },
          },
          token: {
            fontFamily: "Poppins, sans-serif",
          }

        }}
      >
        <Layout className="body-layout" style={{ minHeight: '100vh' }}>
          <Header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%'
          }}>
            <img src={logo} alt="Lexcom Logo" className="navbar_logo_" />
            <div style={{ marginLeft: 'auto' }}>
              <p className="welcome">Configuraciones</p>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <p className="welcome"> {data?.name}</p>
            </div>
            <div >
              <Avatar style={{ backgroundColor: '#87d068', minWidth: '35px', marginLeft: '20px', marginRight: '10px' }} icon={<UserOutlined />} />
            </div>

            <div>
              <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </Header>

          <Layout style={{
            padding: 24,
            minHeight: 360,
          }} className="lexcom-layout">
            <Content style={{ padding: '0 48px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>Configuraciones</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ margin: '0 16px', padding: '0 24px', minHeight: 500 }} >
                <div style={{
                  background: colorBgContainer,
                  minHeight: 280,
                  padding: 24,
                  borderRadius: borderRadiusLG,
                }}>
                  <Flex vertical gap={16}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <div style={{ width: '48%' }}>
                        <Typography.Title level={5}>Nombres</Typography.Title>
                        <Input value={name} disabled={!isEditing} onChange={(e) => handleChange(e, setName)} />
                        <Typography.Title level={5}>Apellidos</Typography.Title>
                        <Input value={surname} disabled={!isEditing} onChange={(e) => handleChange(e, setSurname)} />
                        <Typography.Title level={5}>Email</Typography.Title>
                        <Input value={email} disabled={!isEditing} onChange={(e) => handleChange(e, setEmail)} />
                        <Typography.Title level={5}>Telefono</Typography.Title>
                        <Input value={phone} disabled={!isEditing} onChange={(e) => handleChange(e, setPhone)} />
                        <Typography.Title level={5}>Usuario</Typography.Title>
                        <Input value={username} disabled={!isEditing} onChange={(e) => handleChange(e, setUsername)} />
                      </div>
                      <div style={{ width: '48%' }}>
                        <Typography.Title level={5}>Pais</Typography.Title>
                        <Input value={country} disabled={!isEditing} onChange={(e) => handleChange(e, setCountry)} />
                        <Typography.Title level={5}>Ciudad</Typography.Title>
                        <Input value={city} disabled={!isEditing} onChange={(e) => handleChange(e, setCity)} />
                        <Typography.Title level={5}>Dirección</Typography.Title>
                        <Input value={address} disabled={!isEditing} onChange={(e) => handleChange(e, setAddress)} />
                        <Typography.Title level={5}>Genero</Typography.Title>
                        <Input value={gender} disabled={!isEditing} onChange={(e) => handleChange(e, setGender)} />
                        <Typography.Title level={5}>Otros ajustes: </Typography.Title>
                        <Button onClick={handleEditPassword}>Cambiar Contraseña</Button>
                        <Modal
                          title="Cambiar Contraseña"
                          visible={isModalVisible}
                          onOk={() => form.validateFields().then(handleOk)}
                          onCancel={handleCancel}
                        >
                          <Form form={form}>
                            <Form.Item
                              label="Email"
                              name="email"
                              rules={[{ type: 'email', message: 'Por favor ingrese un email valido' },
                              { required: true, message: 'Por favor ingrese un email' },
                              { validator: emailValidator }
                              ]}
                            >
                              <Input />
                            </Form.Item>
                          </Form>
                        </Modal>
                      </div>
                    </div>

                    {isEditing ? (
                      <Button onClick={handleSaveClick}>Guardar</Button>
                    ) : (
                      <Button onClick={handleEditClick}>Editar</Button>
                    )}
                  </Flex>

                </div>
              </Content>
            </Content>
          </Layout >
          <Layout >
            <About id='about' />
          </Layout>
        </Layout>
      </ConfigProvider>

    /*<div>{data && (
        <div>
          {data.name}
        </div>
      )}
      </div> */
    </>
  )
}
export default Settings