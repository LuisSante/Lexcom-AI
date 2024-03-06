import React, { useState } from 'react'
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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

interface attibute_bool {
    usabilidad: boolean;
    innovacion: boolean;
    diversificacion: boolean;
    conformidad: boolean;
    necesidad: boolean;
    pasion: boolean;
    calidad: boolean;
    portabilidad: boolean;
    complementariedad: boolean;
    reconocimiento: boolean;
    disponibilidad: boolean;
    competencia: boolean;
    frecuencia: boolean;
    perdurabilidad: boolean;
    innovacion_tecnica: boolean;
    valoraciones: boolean;
    realismo: boolean;
    internacionalizacion: boolean;
    estacionalidad: boolean;
    abastecimiento: boolean;
    percepcion_valor: boolean;
    tamano: boolean;
    frecuencia_estrategica: boolean;
    agrupamiento: boolean;
    rentabilidad: boolean;
    analisis_ventas: boolean; 
    gastos_fijos: boolean;
    publicidad: boolean;
}

interface FormValues {
    relevancia: number;
    check: attibute_bool;
}

interface TypePrediction {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}

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
    
    const onFinish = (formData: FormValues) => {
        axiosInstance.post('lexcom/', formData)
        .then(response => {
            const data = response.data;
            const newChartData: TypePrediction  = {
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
                    borderWidth: 1,
                }]
            };
            setChartData(newChartData);
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
                    initialValues={{ ...initialFormValues }}
                    onFinish={onFinish}
                    autoComplete="off"
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
                            Enviar
                        </Button>
                    </Form.Item>

                </Form>
                {chartData && (
                    <div>
                        <h2>Gráfico de Pastel</h2>
                        <Pie data={chartData} />
                    </div>
                )}

            </ConfigProvider>
        </div>
    )
}

export default LexcomAI;