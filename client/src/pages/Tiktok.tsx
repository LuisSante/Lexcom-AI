import React, { useEffect, useState } from 'react'
import { Space, Card, ConfigProvider, notification } from 'antd';
import { Col } from 'antd';
import Skeleton from '../components/Skeleton';
import axiosInstance from '../components/axios';
interface AdData {
    id: number;
    first_shown_date: string;
    last_shown_date: string;
    reach: {
        unique_users_seen: string;
    };
    videos: {
        cover_image_url: string;
        url: string;
    }[];
}

interface TiktokData {
    ad: AdData;
}

interface TypeTikTok {
    searchValue: string;
}
interface TiktokData_ {
    ad: {
        reach: {
            unique_users_seen: string;
        };
        videos: {
            url: string;
        }[];
    };
}
const Tiktok: React.FC<TypeTikTok> = ({ searchValue }) => {
    const [data, setData] = useState<TiktokData[]>([]);
    const [dataSR, setDataSR] = useState<TiktokData_[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true);
            const url = `tiktok/${searchValue}`
            axiosInstance.get<TiktokData[]>(url)
                .then(response => {
                    api.success({
                        message: 'Videos relacionados a su producto',
                        duration: 4
                    });
                    setData(response.data);
                })
                .catch(err => {
                    api.error({
                        message: 'No hay videos relacionados a tu producto, lo lamentamos',
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


    useEffect(() => {
        interface UniqueData {
            [key: string]: string;
        }
        const uniqueData: UniqueData = {};


        // Mapeamos sobre los datos para obtener las URLs únicas de los videos y el valor unique_users_seen
        data.forEach((item) => {
            item.ad.videos.forEach(video => {
                if (video.url) {
                    uniqueData[video.url] = item.ad.reach.unique_users_seen;
                }
            });
        });

        // Convertimos el objeto de datos únicos a un array de objetos
        const uniqueDataArray: TiktokData_[] = Object.keys(uniqueData).map(url => ({
            ad: {
                reach: {
                    unique_users_seen: uniqueData[url]
                },
                videos: [{ url }]
            }
        }));
        // Asignamos el array de objetos de datos únicos a setDataSR
        setDataSR(uniqueDataArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const responsiveGrid = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 6,
        xxl: 8
    };
    return (
        <>
            {contextHolder}
            <div>
                {isLoading && <Skeleton />}
                {data && dataSR && !isLoading && (
                    <Space style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        {dataSR.map((item, index) => (
                            <Col key={index} span={100 / responsiveGrid.xl} style={{ alignItems: 'center' }}>
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorText: '#fff',
                                            colorTextDescription: 'rgba(255, 255, 255, 0.64)'/* here is your global tokens */
                                        },
                                    }}
                                >

                                    <Card style={{ width: '100%', backgroundColor: '#000', color: '#0c0c0c95' }}>
                                        {item.ad.videos.map((video, idx) => (
                                            video && (
                                                <video key={idx} controls style={{ width: '100%', height: 'auto' }}>
                                                    <source src={video.url} type="video/mp4" />
                                                </video>
                                            )
                                        ))}
                                        <Card.Meta title="Numero de vistas" description={item.ad.reach.unique_users_seen} />
                                    </Card>
                                </ConfigProvider>
                            </Col>
                        ))}
                    </Space>
                )}

            </div>
        </>
    );
}

export default Tiktok