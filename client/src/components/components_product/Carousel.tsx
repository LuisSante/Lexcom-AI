import React from 'react';
import { Carousel } from 'antd';
import { GlobalOutlined, LineChartOutlined, RiseOutlined } from '@ant-design/icons'; // Importar los iconos necesarios

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'gray',
    borderRadius: '20px',
};

const iconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '200px',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    color: 'black',
};


export const Carousel_Product: React.FC = () => (
    <Carousel 
        effect="fade"
        autoplay
    >
        <div>
            <GlobalOutlined style={iconStyle} />
            <div style={contentStyle}>GeoTrend Lex Map muestra los países interesados en tu producto</div>
        </div>
        <div>
            <LineChartOutlined style={iconStyle} />
            <div style={contentStyle}>GeoTrend Lex Trend muestra la tendencia de tu producto a lo largo del tiempo</div>
        </div>
        <div>
            <RiseOutlined style={iconStyle} />
            <div style={contentStyle}>GeoTrend Lex Topics muestra temas relacionados con tu producto y los que están en alza</div>
        </div>
    </Carousel>
);
