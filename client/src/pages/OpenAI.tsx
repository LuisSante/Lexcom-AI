import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'

interface OpenAIData {
    prompt: string;
}

interface TypeOpenAI {
    searchValue: string;
}

const OpenAI: React.FC<TypeOpenAI> = ({ searchValue }) => {

    const [data, setData] = useState<OpenAIData | null>(null);
    const [previousSearchValue, setPreviousSearchValue] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:8000/api/v1/openai/${searchValue}`
                const response: AxiosResponse<OpenAIData> = await axios.get(url)
                setData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (searchValue !== previousSearchValue) {
            fetchData();
            setPreviousSearchValue(searchValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, previousSearchValue]);

    return (
        <div>
            {data && (
                <div>
                    {data.prompt}
                </div>
            )}
        </div>
    )
}

export default OpenAI