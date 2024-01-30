// import { useNavigate } from "react-router-dom";
import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    Select,
    notification,
} from 'antd';
import axios from 'axios';
import { useState } from 'react';
// import axios from "axios";
// import { useNavigate  } from 'react-router-dom';

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

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


// const navigate = useNavigate();


//  const onFinish = async (e) => {
//  };

const Register: React.FC = () => {
    const [form] = Form.useForm();
    const [user, setUser] = useState<FormValues[]>([])
    const [api, contextHolder] = notification.useNotification();

    const onFinish = (values: FormValues) => {
        console.log(values)
        axios.post('http://localhost:8000/api/user', values)
            .then(
                res => {
                    if (res.status === 201) {
                        console.log(res.data)
                        setUser([...user, res.data])
                        api.success({
                            message: 'Registro exitoso!',
                            description: 'Usuario registrado correctamente',
                            duration: 1000
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

    //   const on.Finish = (values: any) => {
    //     console.log('Received values of form: ', values);
    //   };

    return (
        <>
            {contextHolder}
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
                    label="Name"
                    tooltip=""
                    rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="surname"
                    label="Surname"
                    tooltip=""
                    rules={[{ required: true, message: 'Please input your surname!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="country"
                    label="Country"
                    tooltip=""
                    rules={[{ required: true, message: 'Please input your country!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="city"
                    label="City"
                    tooltip=""
                    rules={[{ required: true, message: 'Please input your city!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Address"
                    tooltip=""
                    rules={[{ required: true, message: 'Please input your address!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
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
                    <Input />
                </Form.Item>

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

                <Form.Item
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
                </Form.Item>

                <Form.Item
                    name="user"
                    label="user"
                    tooltip="What do you want others to call you?"
                    rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="date_of_birth"
                    label="Date of Birth"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                >

                    <DatePicker />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Register;