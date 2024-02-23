import React from 'react'
import LexcomAI_Items from '../components/logic/LexcomAI_Items';
import { Checkbox, ConfigProvider, Form } from 'antd';
import { Input } from 'antd';


const onFinish = () => {
    console.log('asdf')
}

const LexcomAI: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: "#fff",
                }
            }}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: '100%' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Cuánto es el interés que hay sobre el producto"
                    name="interest"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <br />
                    <Input />
                </Form.Item>


                {LexcomAI_Items.map((item, index) => (
                    <Form.Item
                        name={item.id}
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Checkbox key={index}>
                            {item.question}
                        </Checkbox>
                    </Form.Item>
                ))}


            </Form>

        </ConfigProvider>
    )
}

export default LexcomAI;