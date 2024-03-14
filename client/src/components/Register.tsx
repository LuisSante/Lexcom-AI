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
import { Modal } from 'antd';

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
        axios.post('http://localhost:8000/api/v1/register', values)
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

    const termofUse = () => {
        Modal.info({
            title: 'Términos y Condiciones',
            content: (
                <div>
                    <p>Las siguientes condiciones se aplican al uso de nuestros servicios:</p>
                    <p>
                        Registro y utilización de cuentas:<br/>
                        El uso de nuestros servicios requiere necesariamente la creación de una cuenta de usuario con nosotros. El registro es gratuito y cuenta con 2 busquedas gratuitas. <br/>
                        Usted es responsable de todas las actividades que se produzcan en su cuenta y se compromete a mantener segura su contraseña y a no compartirla con terceros. Si tiene conocimiento de cualquier uso no autorizado de su cuenta, deberá notificárnoslo inmediatamente.
                    </p>
                    <p>
                        Productos digitales:<br/>
                        Nuestros productos son exclusivamente fichas digitales que pueden utilizarse para utilizar el modelo de nuestra plataforma. Una vez realizado el pago, las busquedas correspondientes se abonan en su cuenta en tiempo real.
                    </p>
                    <p>
                        Condiciones de uso:<br/>
                        Las busquedas adquiridos sólo podrán utilizarse para los fines indicados en nuestra plataforma. No está permitido ceder o vender a terceros.
                    </p>
                    <p>
                        Expiración de busquedas y cuentas, así como cancelación de cuentas:<br/>
                        Con el fin de garantizar la administración y el mantenimiento eficaces de nuestra plataforma, nos reservamos el derecho a eliminar las cuentas y las busquedas no utilizados tras un periodo de inactividad de al menos un año. Los busquedas pierden su valor al darse de baja. <br/>
                        Esto se hace con el fin de utilizar nuestros recursos de manera eficiente y para garantizar que los usuarios no puedan reclamar sus buquedas no utilizados después de un período significativo de inactividad. Le recomendamos que acceda regularmente a su cuenta y utilice sus busquedas.<br/>
                        Usted mismo tiene derecho a eliminar su cuenta en cualquier momento. Tenga en cuenta que al eliminar su cuenta se borrarán irrevocablemente todos los datos almacenados en ella y lo que haya comprado.<br/>
                        Nos reservamos el derecho a eliminar su cuenta y poner fin a su uso de nuestros servicios si incumple estas Condiciones Generales o si tenemos conocimiento de cualquier uso indebido o ilegal de su cuenta.
                    </p>
                    <p>
                        Cambios y rescisión de servicios:<br/>
                        Nos reservamos el derecho de cambiar o interrumpir nuestros servicios en cualquier momento, incluyendo, pero no limitado a, en el caso de que nuestra cooperación con Google Cloud o cualquier otro proveedor de servicios se termine o debido a circunstancias fuera de nuestro control.<br/>
                        En caso de que se produzca un cambio sustancial en nuestros Servicios o se ponga fin a los mismos, nos esforzaremos por notificárselo con antelación y tomaremos todas las medidas necesarias para minimizar el impacto sobre usted. <br/>
                        Sin embargo, no garantizamos ni aceptamos responsabilidad alguna por cualquier cambio, fallo, interrupción o finalización de nuestros servicios, y no podemos garantizar que podamos proporcionar reembolsos u otras formas de compensación en tales casos.<br/>
                    </p>
                    <p>
                        Precios y condiciones de pago:<br/>
                        Los precios de nuestros productos se indican en la descripción del producto en la pagina principal.
                    </p>
                </div>
            ),
            onOk() {},
            width: '80%',
        });
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