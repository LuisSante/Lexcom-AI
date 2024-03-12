import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
import Skeleton from '../components/Skeleton';
import axiosInstance from '../components/axios';
import { notification } from 'antd';

interface CopyAds {
    prompt: string;
}

interface TypeCopyAds {
    searchValue: string;
}

const CopyAI: React.FC<TypeCopyAds> = ({ searchValue }) => {

    const [data, setData] = useState<CopyAds | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async() => {
            const url = `copy_ads/${searchValue}`
            axiosInstance.get<CopyAds>(url)
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
                                {paragraph.split('-').map((line, lineIndex) => (
                                    <React.Fragment key={`line-${pIndex}-${lineIndex}`}>
                                        {lineIndex !== 0 && '-'}{line}{(lineIndex < paragraph.split('-').length - 1) && <br />}
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