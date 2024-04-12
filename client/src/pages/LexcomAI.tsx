import React, { useState } from 'react'
import { Button, Checkbox, Col, ConfigProvider, Form, Row, Skeleton, Typography, notification } from 'antd';
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
    secondColumnItems_financial,
} from '../components/logic/components_lexcomai/questions';
import axiosInstance from '../components/axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, PolarArea } from 'react-chartjs-2';
import { formItemLayout } from '../components/logic/components_form/position_form';
ChartJS.register(ArcElement, Tooltip, Legend);

import "../css/lexcomai.css"
import { FormValues, TypePrediction, attibute_bool } from '../interface/lexcomai';

const LexcomAI: React.FC = () => {
    const [initialFormValues] = useState<attibute_bool>({
        usabilidad: false,
        innovacion: false,
        diversificacion: false,
        conformidad: false,
        necesidad: false,
        pasion: false,
        calidad: false,
        portabilidad: false,
        complementariedad: false,
        reconocimiento: false,
        disponibilidad: false,
        competencia: false,
        frecuencia: false,
        perdurabilidad: false,
        innovacion_tecnica: false,
        valoraciones: false,
        realismo: false,
        internacionalizacion: false,
        estacionalidad: false,
        abastecimiento: false,
        percepcion_valor: false,
        tamano: false,
        frecuencia_estrategica: false,
        agrupamiento: false,
        rentabilidad: false,
        analisis_ventas: false,
        gastos_fijos: false,
        publicidad: false
    });

    const [chartData, setChartData] = useState<TypePrediction | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    const onFinish = async (formData: FormValues) => {
        setIsLoading(true);
    
        try {
            const response = await axiosInstance.post('lexcom/', formData);
            const data = response.data;
            const newChartData: TypePrediction = {
                labels: ['Muy Bueno', 'Bueno', 'Normal', 'Malo', 'Muy malo'],
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
    
                    borderWidth: 2.5,
                }]
            };
    
            api.success({
                message: 'Operación realizada',
                description: 'Espere por favor',
                duration: 4
            });
    
            setChartData(newChartData);
        } catch (err) {
            api.error({
                message: 'Error al realizar la operación',
                description:'Es obligatorio que llene el primer campo',
                duration: 6
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {contextHolder}
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
                        {...formItemLayout}
                        name="lexcom"
                        labelCol={{ span: 20 }}
                        style={{ maxWidth: '100%' }}
                        initialValues={{ ...initialFormValues }}
                        onFinish={onFinish}
                    >
                        <div>
                            <div>
                                <h2>Análisis Visual</h2>
                            </div>
                            <Form.Item
                                label="¿Cuál es el nivel de interés de su producto entre el público objetivo?"
                                name="relevancia"
                                tooltip={
                                    <span>
                                        Este espacio de aquí lo sacas del módulo GeoTrend Lex
                                        <a> GeoTrend Lex</a>
                                    </span>
                                }
                                rules={[
                                    { 
                                        required: false, 
                                        message: 'Por favor ingresa el interés sobre el producto!' 
                                    }
                                ]}
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
                                            rules={[{ required: false }]}
                                        >
                                            <Checkbox>{item.question}</Checkbox>
                                        </Form.Item>
                                    ))}
                                </Col>
                                <Col span={12}>
                                    {secondColumnItems_visual.map((item, index) => (
                                        <Form.Item
                                            key={index}
                                            name={item.id}
                                            valuePropName="checked"
                                            rules={[{ required: false }]}
                                        >
                                            <Checkbox>{item.question}</Checkbox>
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
                                            rules={[{ required: false }]}
                                        >
                                            <Checkbox>{item.question}</Checkbox>
                                        </Form.Item>
                                    ))}
                                </Col>
                                <Col span={12}>
                                    {secondColumnItems_technical.map((item, index) => (
                                        <Form.Item
                                            key={index}
                                            name={item.id}
                                            valuePropName="checked"
                                            rules={[{ required: false }]}
                                        >
                                            <Checkbox>{item.question}</Checkbox>
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
                                            rules={[{ required: false }]}
                                        >
                                            <Checkbox>{item.question}</Checkbox>
                                        </Form.Item>
                                    ))}
                                </Col>
                                <Col span={12}>
                                    {secondColumnItems_strategic.map((item, index) => (
                                        <Form.Item
                                            key={index}
                                            name={item.id}
                                            valuePropName="checked"
                                            rules={[{ required: false }]}
                                        >
                                            <Checkbox>{item.question}</Checkbox>
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
                                            rules={[{ required: false }]}
                                        >
                                            <Checkbox>{item.question}</Checkbox>
                                        </Form.Item>
                                    ))}
                                </Col>
                                <Col span={12}>
                                    {secondColumnItems_financial.map((item, index) => (
                                        <Form.Item
                                            key={index}
                                            name={item.id}
                                            valuePropName="checked"
                                            rules={[{ required: false }]}
                                        >
                                            <Checkbox>{item.question}</Checkbox>
                                        </Form.Item>
                                    ))}
                                </Col>
                            </Row>
                        </div>
                        <Form.Item wrapperCol={{ offset: 20 }}>
                            <Button type="primary" htmlType="submit">
                                Predecir
                            </Button>
                        </Form.Item>

                    </Form>
                    {isLoading && <Skeleton active />}
                    {chartData && !isLoading && (
                        <div>

                            <h2>Diagrama sectorial del producto buscado</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <div style={{ width: '50%', height: '300px' }}>
                                    <Pie data={chartData} />
                                </div>
                                <div style={{ width: '50%', height: '300px' }}>
                                    <PolarArea data={chartData} />
                                </div>
                            </div>
                        </div>
                    )}

                </ConfigProvider>
            </div>
        </>
    )
}

export default LexcomAI;