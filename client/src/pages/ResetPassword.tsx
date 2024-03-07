import React from 'react'
import {useParams } from 'react-router-dom';
import { Button, ConfigProvider, Divider, Form, Input, notification } from 'antd';
import About from '../components/components_home/About';
import '../css/recoverpassword.css'
import logo from '../assets/lexcom.svg';
import axios from 'axios';

interface FormValues {
    password: string;
    token: string;
}

const ResetPassword: React.FC = () => {

    const { token } = useParams<{ token: string }>();
    const tokenParam = token ?? '';
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();

    const onFinish = (values: FormValues) => {
        const updatedValues = { ...values, token: token };
        const url = `http://localhost:8000/api/v1/password_reset/confirm/?token=${encodeURIComponent(tokenParam)}`;
        axios.post(url, updatedValues)
            .then(
                res => {
                    if (res.status === 200) {
                        console.log(res.data)
                        api.success({
                            message: 'Cambio de contraseña exitoso!',
                            duration: 1000
                        })
                    }
                    // navigate('/');
                }
            )
            .catch(
                err => {
                    console.log(updatedValues);
                    console.log(updatedValues.token);
                    api.error({
                        message: 'Error al cambiar  la contraseña',
                        description: `${err.response.data.password}`,
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
                                <span className='recover-subtitle'>Introduzca su nueva contraseña</span>
                                <Form
                                    name="resetpassword"
                                    form={form}
                                    style={{ maxWidth: 600 }}
                                    onFinish={onFinish}
                                    labelCol={{ span: 50 }}
                                    initialValues={{ remember: true }}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    {/* <Form.Item
                                        name="confirm"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item> */}

                                    <Divider className="custom-divider" />

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <div className="recover-form-buttons">
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

export default ResetPassword