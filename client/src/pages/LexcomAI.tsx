import React, { useState } from 'react'
import axiosInstance from '../components/axios';
import { Button, Checkbox, Col, ConfigProvider, Form, Row, Skeleton, Typography, notification } from 'antd';
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
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    registerables
} from 'chart.js';
import { Bar, Pie, PolarArea } from 'react-chartjs-2';
import { formItemLayout } from '../components/logic/components_form/position_form';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ...registerables
);

import "../css/lexcomai.css"
import { FormValues, TypePrediction, attibute_bool } from '../interface/lexcomai';
import UploadProduct from '../components/components_lexcomai/UploadProduct';
import { Grid } from '../components/components_lexcomai/Grid';
import { CircleLoader } from '../components/components_lexcomai/CircleLoader';
import CupIcon from '../assets/cup.svg'

const LexcomAI: React.FC = () => {
    const [initialFormValues] = useState<attibute_bool>({
        persepcion_visual: false,
        persepcion_unisex: false,
        relevancia: false,
        usabilidad: false,
        innovacion: false,
        diversificacion: false,
        conformidad: false,
        necesidad: false,
        pasion: false,
        calidad: false,
        portabilidad: false,
        complementariedad: false,
        ads_library: false,
        disponibilidad: false,
        competencia: false,
        frecuencia: false,
        perdurabilidad: false,
        innovacion_tecnica: false,
        valoraciones: false,
        realismo: false,
        internacionalizacion: false,
        estacionalidad: false,
        variantes: false,
        unisex: false,
        emociones: false,
        tamano: false,
        frecuencia_estrategica: false,
        agrupamiento: false,
        utilidad: false,
        rentabilidad: false,
        analisis_ventas: false,
        gastos_fijos: false,
        publicidad: false,
    });

    const [chartData, setChartData] = useState<TypePrediction | null>(null);
    const [secondChartData, setSecondChartData] = useState<TypePrediction | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    const secondOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltips: {
                enabled: false,
            }
        },
        scales: {
            x: {
                display: false, // Oculta el eje x
            },
            y: {
                display: false, // Oculta el eje y
            },
        },
    };

    const onFinish = async (formData: FormValues) => {
        console.log(formData);
        setIsLoading(true);

        try {
            const response = await axiosInstance.post('lexcom_five_class/', formData);
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
            setChartData(newChartData);

            const secondResponse = await axiosInstance.post('lexcom_binary_class/', formData);
            const secondData = secondResponse.data;
            // const secondValue = (secondData['Éxito'] * 100).toString + '%';
            const newSecondChartData: TypePrediction = {
                labels: ['Éxito'],
                datasets: [{
                    data: Object.values(secondData),
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 2.5,
                }]

            };

            setSecondChartData(newSecondChartData);

            api.success({
                message: 'Operación realizada',
                description: 'Espere por favor',
                duration: 4
            });

        } catch (err) {
            api.error({
                message: 'Error al realizar la operación',
                description: 'Contáctate con nosotros para solucionar el error',
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
                <Typography.Title level={4} className="text-black">¡Vamos a calcular si tu producto es ganador!</Typography.Title>
                <div className="upload-product-container">
                    <div className="flex align-center">
                        <UploadProduct />
                        {isLoading && (
                            <Grid>
                                <CircleLoader />
                            </Grid>
                        )}
                    </div>
                </div>
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
                    {chartData && secondChartData && !isLoading && (
                        <div>
                            <h2 className="text-center">Diagrama sectorial del producto buscado</h2>
                            <div className="flex justify-around">
                                <div className="w-1/3">
                                    <Pie data={chartData} />
                                </div>
                                <div className="w-1/3">
                                    <PolarArea data={chartData} />
                                </div>
                            </div>
                            <h2 className="text-center">Probabilidad de éxito</h2>
                            <div className="flex justify-around">
                                <div className="flex flex-col items-center w-1/3">
                                    <img className="w-16" src={CupIcon} alt="CupIcon" />
                                    <Bar data={secondChartData} options={secondOptions} />
                                    <span className="mt-2">{secondChartData.datasets[0].data[0].toFixed(2)} % de Éxito</span>
                                </div>
                            </div>
                        </div>
                    )}
                </ConfigProvider>
            </div >
        </>
    )
}

export default LexcomAI;