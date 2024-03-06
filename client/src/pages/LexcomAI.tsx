import React from 'react'
import { Button, Checkbox, Col, ConfigProvider, Form, Row, Typography } from 'antd';
import { Input } from 'antd';
import './../css/TimelineDemo.css';
import {
    firstColumnItems_visual,
    secondColumnItems_visual,
    firstColumnItems_technical,
    secondColumnItems_technical,
    firstColumnItems_strategic,
    secondColumnItems_strategic,
    firstColumnItems_financial,
    secondColumnItems_financial
} from '../components/logic/components_lexcomai/questions';
import axiosInstance from '../components/axios';



const LexcomAI: React.FC = () => {
    const onFinish = (formData) => {
        axiosInstance.post('lexcom/', formData)
        .then(response => {
            console.log('Respuesta del backend:', response.data);
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
        });
    }

    return (
        <div className='tutorial'>
            <Typography.Title level={4} style={{ color: '#000' }}>¡Vamos a calcular si tu producto es ganador!</Typography.Title>

            <ConfigProvider
                theme={{
                    token: {
                        colorText: "#000",
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
                    <div>
                        <div>
                            <h2>Análisis Visual</h2>
                        </div>
                        <Form.Item
                            label="¿Cuál es el nivel de interés de su producto entre el público objetivo?"
                            name="interest"
                            tooltip={
                                <span>
                                    Este espacio de aquí lo sacas del módulo GeoTrend Lex
                                    <a> GeoTrend Lex</a>
                                </span>
                            }
                            rules={[{ required: true, message: 'Por favor ingresa el interés sobre el producto!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Row>
                            <Col span={12}>
                                {firstColumnItems_visual.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.id}
                                        valuePropName="checked"
                                        rules={[{ required: true }]}
                                    >
                                        <Checkbox>
                                            {item.question}
                                        </Checkbox>
                                    </Form.Item>
                                ))}
                            </Col>
                            <Col span={12}>
                                {secondColumnItems_visual.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.id}
                                        valuePropName="checked"
                                        rules={[{ required: true }]}
                                    >
                                        <Checkbox>
                                            {item.question}
                                        </Checkbox>
                                    </Form.Item>
                                ))}
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <div>
                            <h2>Análisis Técnico</h2>
                        </div>
                        <Row>
                            <Col span={12}>
                                {firstColumnItems_technical.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.id}
                                        valuePropName="checked"
                                        rules={[{ required: true }]}
                                    >
                                        <Checkbox>
                                            {item.question}
                                        </Checkbox>
                                    </Form.Item>
                                ))}
                            </Col>
                            <Col span={12}>
                                {secondColumnItems_technical.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.id}
                                        valuePropName="checked"
                                        rules={[{ required: true }]}
                                    >
                                        <Checkbox>
                                            {item.question}
                                        </Checkbox>
                                    </Form.Item>
                                ))}
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <div>
                            <h2>Análisis Estratégico</h2>
                        </div>
                        <Row>
                            <Col span={12}>
                                {firstColumnItems_strategic.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.id}
                                        valuePropName="checked"
                                        rules={[{ required: true }]}
                                    >
                                        <Checkbox>
                                            {item.question}
                                        </Checkbox>
                                    </Form.Item>
                                ))}
                            </Col>
                            <Col span={12}>
                                {secondColumnItems_strategic.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.id}
                                        valuePropName="checked"
                                        rules={[{ required: true }]}
                                    >
                                        <Checkbox>
                                            {item.question}
                                        </Checkbox>
                                    </Form.Item>
                                ))}
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <div>
                            <h2>Análisis Financiero</h2>
                        </div>
                        <Row>
                            <Col span={12}>
                                {firstColumnItems_financial.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.id}
                                        valuePropName="checked"
                                        rules={[{ required: true }]}
                                    >
                                        <Checkbox>
                                            {item.question}
                                        </Checkbox>
                                    </Form.Item>
                                ))}
                            </Col>
                            <Col span={12}>
                                {secondColumnItems_financial.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.id}
                                        valuePropName="checked"
                                        rules={[{ required: true }]}
                                    >
                                        <Checkbox>
                                            {item.question}
                                        </Checkbox>
                                    </Form.Item>
                                ))}
                            </Col>
                        </Row>
                    </div>
                    <Form.Item wrapperCol={{ offset: 20 }}>
                        <Button type="primary" htmlType="submit">
                            Enviar
                        </Button>
                    </Form.Item>

                </Form>

            </ConfigProvider>
        </div>
    )
}

export default LexcomAI;