import React from 'react'
import LexcomAI_Items from '../components/logic/LexcomAI_Items';
import { Checkbox, Col, ConfigProvider, Form, Row, Space, Typography } from 'antd';
import { Input } from 'antd';
import './../css/TimelineDemo.css';

const onFinish = () => {
    console.log('asdf')
}

const LexcomAI: React.FC = () => {
    return (
        <div className='tutorial'>
             <Typography.Title level={4} style={{ color: '#fff' }}>¡Vamos a calcular si tu producto es ganador!</Typography.Title>

            <ConfigProvider
                theme={{
                    token: {
                        colorText: "#fff",
                    }
                }}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 20 }}
                    wrapperCol={{ span: 8 }}
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
                    <Row>
                    {LexcomAI_Items.map((item, index) => (
                        <Form.Item
                            name={item.id}
                            valuePropName="checked"
                            wrapperCol={{ offset: 5, span: 25 }}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                          <Col span={15}>
                            <Checkbox key={index}>
                                {item.question}
                            </Checkbox>
                          </Col>
                        </Form.Item>
                    ))}    
                    </Row>


                </Form>

            </ConfigProvider>
        </div>
    )
}

export default LexcomAI;