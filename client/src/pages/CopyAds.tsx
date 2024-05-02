import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
import Skeleton from '../components/Skeleton';
import axiosInstance from '../components/axios';
import { notification } from 'antd';
import { CopyAds, TypeCopyAds } from '../interface/copyads';

const CopyAI: React.FC<TypeCopyAds> = ({ searchValue }) => {

    const [data, setData] = useState<CopyAds | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const url = `copy_ads/${searchValue}`;
                const response = await axiosInstance.get<CopyAds>(url);
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
    }, []);

    return (
        <>
            {contextHolder}
            <div>
                {isLoading && <Skeleton />}
                {data && !isLoading && (
                    <div className='tutorial'>
                        {data.prompt.split('<br>').map((paragraph, pIndex) => (
                            <React.Fragment key={`paragraph-${pIndex}`}>
                                {paragraph.split('\u2705').map((line, lineIndex) => (
                                    <React.Fragment key={`line-${pIndex}-${lineIndex}`}>
                                        {lineIndex !== 0 && '\u2705'}{line}{(lineIndex < paragraph.split('\u2705').length - 1) && <br />}
                                    </React.Fragment>
                                ))}
                                {pIndex < data.prompt.split('<br>').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default CopyAI