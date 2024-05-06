import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
import Skeleton from '../components/Skeleton';
import axiosInstance from '../components/axios';
import { notification } from 'antd';
import { LandingData, TypeLanding } from '../interface/landing';
import GifIcon from '../assets/gif.svg'
import ImageIcon from '../assets/imageicon.svg'
import ImageIcon2 from '../assets/imageicon2.svg'
import VideoIcon from '../assets/videoicon.svg'
import { TransitionDiagonal, TransitionX, TransitionY } from '../components/Section';

const LandingAI: React.FC<TypeLanding> = ({ searchValue }) => {

    const [data, setData] = useState<LandingData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

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
    useEffect(() => {
        fetchData();
        // Limpieza, en este caso no es necesario, pero si se agregan dependencias, deberían ir aquí
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const problema = data?.prompt && data.prompt.includes('Problema:') && data.prompt.split('Problema:')[1].split('Oferta:')[0];
    const oferta = data?.prompt && data.prompt.includes('Oferta:') && data.prompt.split('Oferta:')[1].split('Beneficio 1:')[0];
    const beneficio1 = data?.prompt && data.prompt.includes('Beneficio 1:') && data.prompt.split('Beneficio 1:')[1].split('Beneficio 2:')[0];
    const beneficio2 = data?.prompt && data.prompt.includes('Beneficio 2:') && data.prompt.split('Beneficio 2:')[1].split('Beneficio 3:')[0];
    const beneficio3 = data?.prompt && data.prompt.includes('Beneficio 3:') && data.prompt.split('Beneficio 3:')[1].split('Especificaciones:')[0];
    const especificacion = data?.prompt.split('Especificaciones:')[1];

    useEffect(() => {
        if (problema === '' || oferta === '' || beneficio1 === '' || beneficio2 === '' || beneficio3 === '' || especificacion === '') {
            fetchData();
        }
        // Limpieza, en este caso no es necesario, pero si se agregan dependencias, deberían ir aquí
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [problema, oferta, beneficio1, beneficio2, beneficio3, especificacion]);

    return (
        <>
            {contextHolder}
            <div className="justify-center items-center">
                {isLoading && <Skeleton />}
                {data && !isLoading && (
                    <div className='tutorial2'>
                        <div className='px-4 max-w-prose text-center'>
                            <TransitionY>
                                <span className='text-[#000000] text-4xl'>Landing </span>
                                <span className='mb-4 text-[#ab2d2d] text-4xl'>Page </span>
                                <br />
                            </TransitionY>
                            <TransitionY>
                                <span className='text-[#1677ff] text-lg'> [Imagen principal/video/GIF que más sea conveniente] </span>
                                <br />
                                <div className='flex justify-center items-center gap-4'>
                                    <img className='w-36' src={ImageIcon}></img>
                                    <img className='w-36' src={VideoIcon}></img>
                                    <img className='w-36' src={GifIcon}></img>
                                </div>
                            </TransitionY>
                            <TransitionY>
                                <div>
                                    {problema}
                                </div>
                            </TransitionY>
                            <TransitionY>
                                <div className='text-red-800'>
                                    {oferta}
                                </div>
                            </TransitionY>

                            <TransitionX>
                                <span className='text-[#1677ff] text-lg'> [Botón de comprar] </span >
                                <br />
                                <div className='flex justify-center items-center'>
                                    <p className="bg-green-600 rounded-md w-36 h-8 text-center text-lg text-white">
                                        Buy
                                    </p>
                                </div>
                            </TransitionX>
                            <TransitionY>
                                <div>
                                    {beneficio1}
                                </div>
                                <span className='text-[#1677ff] text-lg'> [GIF que sea más conveniente] </span >
                                <br />
                                <img className='w-36' src={GifIcon}></img>
                                <br />
                                <div>
                                    {beneficio2}
                                </div>
                            </TransitionY>
                            <TransitionY>
                                <span className='text-[#1677ff] text-lg'> [Botón de comprar] </span >
                                <br />
                                <div className='flex justify-center items-center'>
                                    <p className="bg-green-600 rounded-md w-36 h-8 text-center text-lg text-white">
                                        Buy
                                    </p>
                                </div>
                            </TransitionY>
                            <TransitionY>
                                <div>
                                    {beneficio3}
                                </div>
                                <span className='text-[#1677ff] text-lg'> [Pon aqui imagen] </span >
                                <br />
                                <img className='w-36' src={ImageIcon2}></img>
                                <br />
                                <div>
                                    {especificacion}
                                </div>
                            </TransitionY>
                            <TransitionDiagonal>
                                <span className='mt-8 text-[#1677ff] text-lg'> [Pon aqui formulario de compra] </ span>
                                <br />
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='border-5 p-4 border-black border-solid rounded-md w-80 h-80 text-center'>
                                        <span className='text-[#000000] text-4xl'>Formulario </span>
                                        <br />
                                        <span className='text-[#ab2d2d] text-4xl'>Compra </span>
                                        <br />
                                        <div className='flex flex-col gap-2 mt-14 text-center'>
                                            <p className="justify-center items-center bg-sky-600 rounded-md h-8">
                                                <div className="text-center text-lg text-white">Upsells 1-click</div>
                                            </p>
                                            <p className="justify-center items-center bg-yellow-600 rounded-md h-8">
                                                <div className="text-center text-lg text-white">Upsells 1-click</div>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </TransitionDiagonal>
                        </div>
                    </div>
                )}
            </div >
        </>

    )
}

export default LandingAI