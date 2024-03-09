import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
import Skeleton from '../components/Skeleton';
import axiosInstance from '../components/axios';

interface CopyAds {
    prompt: string;
}

interface TypeCopyAds {
    searchValue: string;
}

const CopyAI: React.FC<TypeCopyAds> = ({ searchValue }) => {

    const [data, setData] = useState<CopyAds | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [previousSearchValue, setPreviousSearchValue] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const url = `http://localhost:8000/api/v1/copy_ads/${searchValue}`
                const response: AxiosResponse<CopyAds> = await axiosInstance.get(url)
                axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
                setData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        if (searchValue !== previousSearchValue) {
            fetchData();
            setPreviousSearchValue(searchValue);
        }
    }, [searchValue, previousSearchValue]);

    return (
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
    );
}

export default CopyAI