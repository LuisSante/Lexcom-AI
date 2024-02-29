import React from 'react'
// import LexcomAI_Items from '../components/logic/LexcomAI_Items';
import { Checkbox, Col, ConfigProvider, Form, Row, Typography } from 'antd';
import { Input } from 'antd';
import './../css/TimelineDemo.css';
import { visual_analysis } from '../components/logic/components_lexcomai/visual_analysis';
import { technical_analysis } from '../components/logic/components_lexcomai/technical_analysis';
import { strategic_analysis } from '../components/logic/components_lexcomai/strategic_analysis';
import { financial_analysis } from '../components/logic/components_lexcomai/financial_analysis';

const onFinish = () => {
    console.log('asdf')
}

const LexcomAI: React.FC = () => {
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
                    <Form.Item
                        label="Cuánto es el interés que hay sobre el producto"
                        name="interest"
                        tooltip={
                            <span>
                                Este espacio de aquí lo sacas del módulo GeoTrend Lex
                                <a> GeoTrend Lex</a>
                            </span>
                        }
                        rules={[{ required: true , message: 'Por favor ingresa el interés sobre el producto!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <div>
                        <div>
                            <h2>Análisis Visual</h2>
                        </div>
                        <Row>
                            {visual_analysis.map((item, index) => (
                                <Form.Item
                                    name={item.id}
                                    valuePropName="checked"
                                    wrapperCol={{ offset: 5, span: 25 }}
                                    rules={[{ required: true }]}
                                >
                                    <Col span={15}>
                                        <Checkbox key={index}>
                                            {item.question}
                                        </Checkbox>
                                    </Col>
                                </Form.Item>
                            ))}
                        </Row>
                    </div>
                    <div>
                        <div>
                            <h2>Análisis Técnico</h2>
                        </div>
                        <Row>
                            {technical_analysis.map((item, index) => (
                                <Form.Item
                                    name={item.id}
                                    valuePropName="checked"
                                    wrapperCol={{ offset: 5, span: 25 }}
                                    rules={[{ required: true }]}
                                >
                                    <Col span={15}>
                                        <Checkbox key={index}>
                                            {item.question}
                                        </Checkbox>
                                    </Col>
                                </Form.Item>
                            ))}
                        </Row>
                    </div>
                    <div>
                        <div>
                            <h2>Análisis Estratégico</h2>
                        </div>
                        <Row>
                            {strategic_analysis.map((item, index) => (
                                <Form.Item
                                    name={item.id}
                                    valuePropName="checked"
                                    wrapperCol={{ offset: 5, span: 25 }}
                                    rules={[{ required: true }]}
                                >
                                    <Col span={15}>
                                        <Checkbox key={index}>
                                            {item.question}
                                        </Checkbox>
                                    </Col>
                                </Form.Item>
                            ))}
                        </Row>
                    </div>
                    <div>
                        <div>
                            <h2>Análisis Financiero</h2>
                        </div>
                        <Row>
                            {financial_analysis.map((item, index) => (
                                <Form.Item
                                    name={item.id}
                                    valuePropName="checked"
                                    wrapperCol={{ offset: 5, span: 25 }}
                                    rules={[{ required: true }]}
                                >
                                    <Col span={15}>
                                        <Checkbox key={index}>
                                            {item.question}
                                        </Checkbox>
                                    </Col>
                                </Form.Item>
                            ))}
                        </Row>
                    </div>


                </Form>

            </ConfigProvider>
        </div>
    )
}

export default LexcomAI;