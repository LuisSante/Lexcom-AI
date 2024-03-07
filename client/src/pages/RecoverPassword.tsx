import { UserOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Divider, Form, Input, notification } from 'antd';
import About from '../components/components_home/About';
import '../css/recoverpassword.css'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/lexcom.svg';
import axios from 'axios';

interface FieldType {
    email: string
}

const RecoverPassword = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();

    const onClick = () => {
        navigate('/');
    }

    const onFinish = async (email: FieldType) => {
        axios.post('http://localhost:8000/api/v1/password_reset/', email)
            .then(
                res => {
                    if (res.status === 200) {
                        api.success({
                            message: 'Envío exitoso!',
                            description: 'Revise su correo electrónico',
                            duration: 2000
                        })
                        api.success({
                            message: 'Puedes cerrar esta pestaña',
                            duration: 2000
                        })
                    }
                }
            )
            .catch(
                err => {
                    api.error({
                        message: 'Error al registrar usuario',
                        description: `${err.message}`,
                        duration: 1000
                    })
                }
            )
    }

    return (
        <>
            {contextHolder}
            <div className="recover-password-container">
                <div>
                    <img src={logo} alt="Lexcom Logo" />
                </div>
                <div className='recover-password-content'>
                    <div className="recover-container">
                        <span className='recover-title'>Recupera tu cuenta</span>
                        <Divider className="custom-divider" />
                        <ConfigProvider
                            theme={{
                                components: {
                                    Form: {
                                        labelColor: '#fff',
                                        colorBgContainer: '#f6ffed',
                                        controlOutline: '#000000',
                                    },
                                    Checkbox: {

                                    }
                                },
                            }}
                        >
                            <div  >
                                <span className='recover-subtitle'>Introduce tu correo electrónico</span>
                                <Form
                                    name="basic"
                                    form={form}
                                    style={{ maxWidth: 2000 }}
                                    onFinish={onFinish}
                                    labelCol={{ span: 50 }}
                                    initialValues={{ remember: true }}
                                    autoComplete="off"
                                >
                                    <Form.Item<FieldType>
                                        name="email"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}

                                    >

                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                                    </Form.Item>

                                    <Divider className="custom-divider" />

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <div className="recover-form-buttons">
                                            <Button className='recover-cancel' onClick={onClick}>
                                                Cancelar
                                            </Button>
                                            <Button className='recover-submit' type="primary" htmlType="submit">
                                                Buscar
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div >
                        </ConfigProvider>
                    </div>
                </div>
                <div className='recover-footer'>
                    <About />
                </div>
            </div>
        </>
    )
}

export default RecoverPassword