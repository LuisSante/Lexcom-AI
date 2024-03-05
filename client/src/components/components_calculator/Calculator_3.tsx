import React, { useState } from 'react';
import {  InputNumber, Space, Typography } from 'antd';

import { ConfigProvider } from 'antd';
import './../css/TimelineDemo.css';

const Precio_del_Producto: React.FC = () => {
  const [costo, setcosto] = useState(0);
  const [precio, setprecio] = useState(0);
  const [flete, setflete] = useState(0);
  const [cpa, setcpa] = useState(0);

  return (
    <div className='tutorial'>
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              colorText: '#000',
              colorBgContainer: '#fff',
              handleBorderColor: '#fff',
              colorTextDisabled: '#00',

            },
            Select:{

            }
          },
        }}
      >
      <Space direction='vertical'>
      <Typography.Title level={3} style={{ color: '#000', alignContent:'center' }}>CÁLCULO DEL PRECIO DEL PRODUCTO</Typography.Title>
         
          <Space align="start" size={'large'}>
              <Space direction='horizontal'>
              <InputNumber addonBefore="Costo del Producto " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setcosto(value);
                }
              }} />
              <InputNumber addonBefore="Costo Envio Nacional" defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setprecio(value);
                }
              }} />
              <InputNumber addonBefore="Costo Administrativo" defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setflete(value);
                }
              }} />
              <InputNumber addonBefore="Precio de venta" defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setcpa(value);
                }
              }} />
            </Space>
          </Space>
          <Space align="start" size={'large'}>
            <Space direction="vertical" >
              <Typography.Title level={5} style={{ color: '#000' }}>RESULTADOS</Typography.Title>
              <Space.Compact direction="vertical">
                <InputNumber addonBefore="Facebook PPC Proyectado" value={cpa*0.3} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="Costo Devoluciones" value={cpa*0.1} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="Costo Total del producto" value={(cpa*0.1)+flete+precio+costo} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="ROAS Mínimo" value={cpa/(cpa-((cpa*0.1)+flete+precio+costo))} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="CPC MÁXIMO" value={cpa-((cpa*0.1)+flete+precio+costo)} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="Rentabilidad Con Costo por Compra Estimado" value={cpa-(cpa*0.3)-precio-costo-flete-(cpa*0.1)} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="ROI" value={(cpa-(cpa*0.3)-precio-costo-flete-(cpa*0.1))/((cpa*0.1)+flete+precio+costo+(cpa*0.3))*100 +'%'} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="% Rentabilidad" value={((cpa-(cpa*0.3)-precio-costo-flete-(cpa*0.1))/cpa)*100 +'%'} style={{ width: '100%' }} disabled />
                <br></br>
                <InputNumber addonBefore="Precio de Venta Sugerido 2 Unidades" value={(cpa*2)-precio-(cpa*0.3)} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="Rentabilidad 2 Unidades" value={(cpa*2)-precio-(cpa*0.3)-(costo*2)-precio-(cpa*0.3)} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="% Profit 2 Prod - Proov Colombia" value={((cpa*2)-precio-(cpa*0.3)-(costo*2)-precio-(cpa*0.3))/(costo*2)*100 +'%'} style={{ width: '100%' }} disabled />
                <br></br>
                <InputNumber addonBefore="Precio de Venta Sugerido 3 Unidades" value={((cpa*3)-precio-(cpa*0.3))*0.93} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="Rentabilidad 3 Prod Comprando en Colombia" value={(((cpa*3)-precio-(cpa*0.3))*0.93)-(costo*3)-precio-(cpa*0.3)} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="% Profit 3 Prod - Proov Colombia" value={((((cpa*3)-precio-(cpa*0.3))*0.93)-(costo*3)-precio-(cpa*0.3))/(costo*3)*100 +'%'} style={{ width: '100%' }} disabled />
                <br></br>
                <InputNumber addonBefore="Precio de Venta Sugerido 4 Unidades" value={((cpa*4)-precio-(cpa*0.3))*0.75} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="Rentabilidad 4 Prod Comprando en Colombia" value={(((cpa*4)-precio-(cpa*0.3))*0.75)-(costo*4)-precio-(cpa*0.3)} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="% Profit 4 Prod - Proov Colombia" value={((((cpa*4)-precio-(cpa*0.3))*0.75)-(costo*4)-precio-(cpa*0.3))/(costo*4)*100 +'%'} style={{ width: '100%' }} disabled />            
              </Space.Compact>

            </Space>
          </Space>
        </Space>
      </ConfigProvider>
    </div>
  );
};

export default Precio_del_Producto;
