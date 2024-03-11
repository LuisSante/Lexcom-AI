import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
import Skeleton from '../components/Skeleton';
import axiosInstance from '../components/axios';
import { notification } from 'antd';

interface OpenAIData {
    prompt: string;
}

interface TypeOpenAI {
    searchValue: string;
}

const OpenAI: React.FC<TypeOpenAI> = ({ searchValue }) => {

    const [data, setData] = useState<OpenAIData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = () => {
            const url = `openai/${searchValue}`
            axiosInstance.get<OpenAIData>(url)
                .then(response => {
                    api.success({
                        message: 'Prompt generado',
                        duration: 4
                    });
                    setData(response.data);
                })
                .catch(err => {
                    api.error({
                        message: 'Error al generar prompt',
                        description: `${err.message}`,
                        duration: 4
                    });
                })
                .finally(() => {
                    setIsLoading(false);
                })
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    return (
        <>
            {contextHolder}
            <div>
                {isLoading && <Skeleton />}
                {data && !isLoading && (
                    <div className='tutorial'>
                        <h2>Introducción:</h2>

                        <div>{data.prompt.split('Click Bait:')[1].split('Problema:')[0]}</div>
                        <h2>Problema:</h2>
                        <div>{data.prompt.split('Problema:')[1].split('Solución:')[0]}</div>
                        <h2>Solución:</h2>
                        <div>{data.prompt.split('Solución:')[1].split('Características:')[0]}</div>
                        <h2>Características:</h2>
                        <div>{data.prompt.split('Características:')[1].split('Beneficios:')[0]}</div>
                        <h2>Beneficios:</h2>
                        <div>{data.prompt.split('Beneficios:')[1].split('Testimonios:')[0]}</div>
                        <h2>Testimonios:</h2>
                        <div>{data.prompt.split('Testimonios:')[1].split('Final:')[0]}</div>
                        <br></br>
                        <div>{data.prompt.split('Final:')[1]}</div>
                        <h2>Recuerda que tu video no debe durar mas de 30 a 40 segundos dependiendo de tu producto.</h2>
                    </div>
                )}
            </div>
        </>

    )
}

export default OpenAI