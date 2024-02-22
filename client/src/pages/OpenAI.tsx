import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import './../css/TimelineDemo.css';
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
        </div>
    )}
</div>

    )
}

export default OpenAI