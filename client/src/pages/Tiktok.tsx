import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Space } from 'antd';
import { Col, Row } from 'antd';

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

const Tiktok: React.FC<TypeTikTok> = ({ searchValue }) => {
    const [data, setData] = useState<TiktokData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:8000/api/v1/tiktok/${searchValue}`
                const response = await axios.get<TiktokData[]>(url)
                setData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);


    return (
        <Row gutter={[16, 16]}>
            {data.map((item, index) => (
                <Col key={index} span={12} style={{ alignItems: 'center', gap: '40px' }}>
                    <Space direction='vertical'>
                        <p>Views: {item.ad.reach.unique_users_seen}</p>
                        {item.ad.videos.map((video, idx) => (
                                video &&
                                <video key={idx} controls style={{ width: '100%', maxWidth: '200px', height: '300px' }}>
                                    <source src={video.url} type="video/mp4" />
                                </video>

                        ))}
                    </Space>
                </Col>
            ))
            }
        </Row >
    );
}

export default Tiktok