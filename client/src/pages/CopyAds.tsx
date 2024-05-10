import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
import axiosInstance from '../components/axios';
import { Skeleton, notification } from 'antd';
import { CopyAds, TypeCopyAds } from '../interface/copyads';

// const Loading = () => {
//     return (
//         <>
//             <div className="tutorial">
//                 <Skeleton />
//             </div>
//             <div className="tutorial">
//                 <Skeleton />
//             </div>
//             <div className="tutorial">
//                 <Skeleton />
//             </div>
//             <div className="tutorial">
//                 <Skeleton />
//             </div>
//         </>
//     )
// }

const CopyAI: React.FC<TypeCopyAds> = ({ searchValue }) => {

    const [data, setData] = useState<CopyAds[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const urls = Array.from({ length: 4 }, () => `copy_ads/${searchValue}`);
                const responses = await Promise.all(urls.map(url => axiosInstance.get<CopyAds>(url)));
                const allData = responses.map(response => response.data);
                setData(allData);
                api.success({
                    message: 'Generado',
                    duration: 4
                });
            } catch (err) {
                api.error({
                    message: 'Error al generar',
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
                {isLoading &&
                    <>
                        <div className="tutorial">
                            <Skeleton active />
                        </div>
                        <div className="tutorial">
                            <Skeleton active />
                        </div>
                        <div className="tutorial">
                            <Skeleton active />
                        </div>
                        <div className="tutorial">
                            <Skeleton active />
                        </div>
                    </>
                }
                {data.map((promptData, index) => (
                    <div className='tutorial' key={index}>
                        <span className='text-[#1677ff] text-lg'> LexCopy Pro {index + 1}</span>
                        <br /><br />
                        {promptData.prompt.split('<br>').map((paragraph, pIndex) => (
                            <React.Fragment key={`paragraph-${index}-${pIndex}`}>
                                {paragraph.split('\u2705').map((line, lineIndex) => (
                                    <React.Fragment key={`line-${index}-${pIndex}-${lineIndex}`}>
                                        {lineIndex !== 0 && '\u2705'}{line}{(lineIndex < paragraph.split('\u2705').length - 1) && <br />}
                                    </React.Fragment>
                                ))}
                                {pIndex < promptData.prompt.split('<br>').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default CopyAI