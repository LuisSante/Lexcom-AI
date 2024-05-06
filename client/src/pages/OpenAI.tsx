import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
import Skeleton from '../components/Skeleton';
import axiosInstance from '../components/axios';
import { notification } from 'antd';
import { OpenAIData, TypeOpenAI } from '../interface/openai';
import { Typewriter } from '../components/components_animations/TypeWritter';

const OpenAI: React.FC<TypeOpenAI> = ({ searchValue }) => {

    const [data, setData] = useState<OpenAIData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const url = `openai/${searchValue}`;
            const response = await axiosInstance.get<OpenAIData>(url);
            setData(response.data);
            api.success({
                message: 'Prompt generado',
                duration: 4
            });
        } catch (err) {
            api.error({
                message: 'Error al generar prompt',
                duration: 4
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // Limpieza, en este caso no es necesario, pero si se agregan dependencias, deberían ir aquí
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const introduction = data?.prompt && data.prompt.includes('Click Bait:') && data.prompt.split('Click Bait:')[1].split('Problema:')[0];
    const problema = data?.prompt && data.prompt.includes('Problema:') && data.prompt.split('Problema:')[1].split('Solución:')[0];
    const solucion = data?.prompt && data.prompt.includes('Solución:') && data.prompt.split('Solución:')[1].split('Características:')[0];
    const caracter = data?.prompt && data.prompt.includes('Características:') && data.prompt.split('Características:')[1].split('Beneficios:')[0];
    const beneficio = data?.prompt && data.prompt.includes('Beneficios:') && data.prompt.split('Beneficios:')[1].split('Testimonios:')[0];
    const testimonio = data?.prompt && data.prompt.includes('Testimonios:') && data.prompt.split('Testimonios:')[1].split('Final:')[0];

    useEffect(() => {
        if (introduction === '' || problema === '' || solucion === '' || caracter === '' || beneficio === '' || testimonio === '') {
            fetchData();
        }
        // Limpieza, en este caso no es necesario, pero si se agregan dependencias, deberían ir aquí
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [introduction, problema, solucion, caracter, beneficio, testimonio]);

    return (
        <>
            {contextHolder}
            <div>
                {isLoading && <Skeleton />}
                {data && !isLoading && (
                    <div className='tutorial'>
                        <h2>
                            <Typewriter
                                text="✅ Introducción:"
                            />
                        </h2>
                        <div>
                            <Typewriter
                                text={introduction || ''}
                            />

                        </div>
                        <h2>
                            <Typewriter
                                text="❗️Problema:"
                            />
                        </h2>
                        <div>
                            <Typewriter
                                text={problema || ''}
                            />
                        </div>
                        <h2>
                            <Typewriter
                                text='🚀 Solución:'
                            />
                        </h2>
                        <div>
                            <Typewriter
                                text={solucion || ''}
                            />
                        </div>
                        <h2>
                            <Typewriter
                                text="💡 Características:"
                            />
                        </h2>
                        <div>
                            <Typewriter
                                text={caracter || ''}
                            />
                        </div>
                        <h2>
                            <Typewriter
                                text="🌟 Beneficios:"
                            />
                        </h2>
                        <div>
                            <Typewriter
                                text={beneficio || ''}
                            />
                        </div>
                        <h2>
                            <Typewriter
                                text="👥 Testimonios:"
                            />
                        </h2>
                        <div>
                            <Typewriter
                                text={testimonio || ''}
                            />
                        </div>
                        <br></br>
                        {/* <div>
                            <Typewriter
                                text={data.prompt && data.prompt.includes('Final:') && data.prompt.split('Final:')[1]}
                                />
                            </div> */}
                        <h2>
                            <Typewriter
                                text="Recuerda que tu video no debe durar más de 30 a 40 segundos dependiendo de tu producto."
                            />
                        </h2>
                    </div>
                )}
            </div>
        </>

    )
}

export default OpenAI