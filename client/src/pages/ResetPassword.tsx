import React from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { Button, ConfigProvider, Divider, Form, Input, notification } from 'antd';
import About from '../components/components_home/About';
import '../css/recoverpassword.css'
import logo from '../assets/lexcom.svg';
import axios from 'axios';
import { strongPasswordRegex } from '../components/logic/components_form/password_strong';
import { formItemLayout, tailFormItemLayout } from '../components/logic/components_form/position_form';

interface FormValues {
    password: string;
    token: string;
}

const ResetPassword: React.FC = () => {

    const navigate = useNavigate();

    const { token } = useParams<{ token: string }>();
    const tokenParam = token ?? '';
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();

    const onFinish = (values: FormValues) => {
        const updatedValues = { ...values, token: token };
        // const url = `http://localhost:8000/api/v1/password_reset/confirm/?token=${encodeURIComponent(tokenParam)}`;
        const url = `http://34.42.26.12:8080/api/v1/password_reset/confirm/?token=${encodeURIComponent(tokenParam)}`;
        axios.post(url, updatedValues)
            .then(
                res => {
                    if (res.status === 200) {
                        api.success({
                            message: 'Cambio de contraseña exitoso!',
                            duration: 4
                        })
                    }
                    navigate('/');
                }
            )
            .catch(
                err => {
                    api.error({
                        message: 'Error al cambiar  la contraseña',
                        description: `${err.response.data.password}`,
                        duration: 4
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
                                    },
                                },
                            }}
                        >
                            <div  >
                                <span className='recover-subtitle'>Introduzca su nueva contraseña</span>
                                <Form
                                    {...formItemLayout}
                                    form={form}
                                    name="resetpassword"
                                    onFinish={onFinish}
                                    style={{ maxWidth: 600 }}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[
                                            {
                                                required: true,
                                                message: '¡Por favor ingrese su contraseña!',
                                            },
                                            {
                                                validator: (_, value) =>
                                                    value && strongPasswordRegex.test(value)
                                                        ? Promise.resolve()
                                                        : Promise.reject(new Error('Contraseña débil!!! debe contener mínimo 8 caracteres, minúsculas, mayúsculas, números y símbolos (!*)')),
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password/>
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        label="Confirmar Password"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: '¡Por favor, confirme su contraseña!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('¡La nueva contraseña que ingresó no coincide!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Divider className="custom-divider" />

                                    <Form.Item {...tailFormItemLayout}>
                                        <div className="recover-form-buttons">
                                            <Button className='recover-submit' type="primary" htmlType="submit">
                                                Cambiar
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