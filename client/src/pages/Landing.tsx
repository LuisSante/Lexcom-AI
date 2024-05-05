import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
import Skeleton from '../components/Skeleton';
import axiosInstance from '../components/axios';
import { notification } from 'antd';
import { LandingData, TypeLanding } from '../interface/landing';

const LandingAI: React.FC<TypeLanding> = ({ searchValue }) => {

    const [data, setData] = useState<LandingData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const url = `landing/${searchValue}`;
                const response = await axiosInstance.get<LandingData>(url);
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
    
        fetchData();
    
        // Limpieza, en este caso no es necesario, pero si se agregan dependencias, deberían ir aquí
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    return (
        <>
            {contextHolder}
            <div>
                {isLoading && <Skeleton />}
                {data && !isLoading && (
                    <div className='tutorial'>
                        <div style={{ paddingLeft: '10cm', paddingRight: '10cm', justifyContent: 'center' }}>
                            <strong> [Pon aqui imagen principal/video/GIF] </strong> <br/>
                            <div>{data.prompt && data.prompt.includes('Problema:') && data.prompt.split('Problema:')[1].split('Oferta:')[0]}</div>
                            <div style={{ color: 'red' }}>{data.prompt && data.prompt.includes('Oferta:') && data.prompt.split('Oferta:')[1].split('Beneficio 1:')[0]}</div>
                            <strong> [Pon aqui boton de comprar] </strong> <br/>
                            <div>{data.prompt && data.prompt.includes('Beneficio 1:') && data.prompt.split('Beneficio 1:')[1].split('Beneficio 2:')[0]}</div>
                            <strong> [Pon aqui GIF] </strong> <br/>
                            <div>{data.prompt && data.prompt.includes('Beneficio 2:') && data.prompt.split('Beneficio 2:')[1].split('Beneficio 3:')[0]}</div>
                            <strong> [Pon aqui boton de comprar] </strong> <br/>
                            <div>{data.prompt && data.prompt.includes('Beneficio 3:') && data.prompt.split('Beneficio 3:')[1].split('Especificaciones:')[0]}</div>
                            <strong> [Pon aqui imagen] </strong> <br/>
                            <div>{data.prompt.split('Especificaciones:')[1]}</div>
                            <strong> [Pon aqui formulario de compra] </strong> <br/>
                        </div>
                    </div>
                )}
            </div>
        </>

    )
}

export default LandingAI