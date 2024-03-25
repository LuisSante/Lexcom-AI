import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    Select,
    notification,
    ConfigProvider,
} from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { strongPasswordRegex } from './logic/components_form/password_strong';
import { formItemLayout, tailFormItemLayout } from './logic/components_form/position_form';
import { termofUse } from './components_home/Legal';

interface FormValues {
    title: string;
    description: string;
    completed: boolean;
    key: string;
    name: string;
    surname: string;
    phone: string;
    country: string;
    city: string;
    address: string;
    email: string;
    password: string;
    user: string;
    gender: string;
    date_of_birth: Date;
}

const { Option } = Select;


const Register: React.FC = () => {
    const [form] = Form.useForm();
    const [user, setUser] = useState<FormValues[]>([])
    const [api, contextHolder] = notification.useNotification();

    const onFinish = (values: FormValues) => {
        // axios.post('http://localhost:8000/api/v1/register', values)
        axios.post('http://34.42.26.12:8080/api/v1/register', values)
            .then(
                res => {
                    if (res.status === 201) {
                        setUser([...user, res.data])
                        api.success({
                            message: 'Registro exitoso!',
                            description: 'Usuario registrado correctamente',
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
                }}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    scrollToFirstError
                >

                    <Form.Item
                        name="name"
                        label="Nombres"
                        tooltip=""
                        rules={[{ required: true, message: '¡Por favor ingresa tu nombre!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="surname"
                        label="Apellidos"
                        tooltip=""
                        rules={[{ required: true, message: '¡Por favor ingresa tu apellido!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Número de teléfono"
                        rules={[{ required: true, message: '¡Por favor ingrese su número de teléfono!' }]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="country"
                        label="País"
                        tooltip=""
                        rules={[{ required: true, message: '¡Por favor ingresa tu país!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="city"
                        label="Ciudad"
                        tooltip=""
                        rules={[{ required: true, message: '¡Por favor ingresa tu ciudad!', whitespace: true }]}
                    >
                        <Input />

                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="Dirección"
                        tooltip=""
                        rules={[{ required: true, message: '¡Por favor ingrese su dirección!', whitespace: true }]}
                    >
                        <Input />
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
                        <Input.Password />
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

                    <Form.Item
                        name="username"
                        label="Username"
                        tooltip="¿Cómo quieres que te llamen los demás?"
                        rules={[{ required: true, message: '¡Por favor ingresa tu usuario!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="gender"
                        label="Género"
                        rules={[{ required: true, message: '¡Por favor seleccione el género!' }]}
                    >
                        <Select placeholder="Selecciona tu género">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="date_of_birth"
                        label="Fecha de nacimiento"
                        rules={[{ required: true, message: '¡Por favor seleccione la fecha de su cumpleaños!' }]}
                    >

                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Debe aceptar el acuerdo')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox style={{ color: '#f6ffed' }}>
                            He leído el <a onClick={termofUse}>acuerdo</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </>
    );
};

export default Register;