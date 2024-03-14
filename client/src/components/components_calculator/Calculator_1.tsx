import React, { useState } from 'react';
import { InputNumber, Space, Typography } from 'antd';
import { ConfigProvider, Button } from 'antd';
import '../../css/TimelineDemo.css';


const Standard: React.FC = () => {
  const [inversion, setInversion] = useState(0);
  const [gananciaN, setGananciaN] = useState(0);
  const [gananciaB, setGananciaB] = useState(0);
  const [gananciaF, setGananciaF] = useState(0);
  const [facturacion, setFacturacion] = useState(0);
  const [dev25, setDev25] = useState(0);
  const [dev25Ext, setDev25Ext] = useState(0);
  const [dev30, setDev30] = useState(0);
  const [dev30Ext, setDev30Ext] = useState(0);
  const [dev40, setDev40] = useState(0);
  const [dev40Ext, setDev40Ext] = useState(0);
  const [dev50, setDev50] = useState(0);
  const [dev50Ext, setDev50Ext] = useState(0);
  const [costo, setcosto] = useState(0);
  const [precio, setprecio] = useState(0);
  const [flete, setflete] = useState(0);
  const [full, setfull] = useState(0);
  const [dev, setdev] = useState(0);
  const [cpa, setcpa] = useState(0);
  const [units, setunits] = useState(0);
  const [personal,setpersonal] =useState(0);

  const handleCalculate = () => {
      const totalinv = costo*units;
      const ganB= precio*units;
      const ganN=precio-costo-flete-cpa-dev-full;
      const ganF=ganN*units;
      const fact=units*precio;

      const devo25=ganF*0.25 ;
      const devo30=ganF*0.30 ;
      const devo40=ganF*0.40 ;
      const devo50=ganF*0.5 ;
      setInversion(totalinv);
      setGananciaB(ganB);
      setGananciaN(ganN);
      setGananciaF(ganF);
      setFacturacion(fact);
      setDev25(devo25);
      setDev30(devo30);
      setDev40(devo40);
      setDev50(devo50);
      
      setDev25Ext(devo25/1000);
      setDev30Ext(devo30/1000);
      setDev40Ext(devo40/1000);
      setDev50Ext(devo50/1000);

  };

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
        <Space  size={'large'}>
          <Space.Compact direction="vertical">
            <InputNumber addonBefore="COSTO + IMPUESTOS " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
              if (value !== null) {
                setcosto(value);
              }
            }} />
            <InputNumber addonBefore="PRECIO DE VENTA " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
              if (value !== null) {
                setprecio(value);
              }
            }} />
            <InputNumber addonBefore="FLETE DE PRODUCTO" defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
              if (value !== null) {
                setflete(value);
              }
            }} />
            <InputNumber addonBefore="FULLFILMENT" defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
              if (value !== null) {
                setfull(value);
              }
            }} />
            <InputNumber addonBefore="DEVOLUCION  " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
              if (value !== null) {
                setdev(value);
              }
            }} />
            <InputNumber addonBefore="CPA FB ADS " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
              if (value !== null) {
                setcpa(value);
              }
            }} />
            <InputNumber addonBefore="UNIDADES " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
              if (value !== null) {
                setunits(value);
              }
            }} />
            <InputNumber addonBefore="PERSONAL " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
              if (value !== null) {
                setpersonal(value);
              }
            }} />
            <Button type="dashed" style={{ marginTop: '2%' }} onClick={handleCalculate}> Calcular </Button>
          </Space.Compact>

          <Space direction="vertical" >
            <Space.Compact direction="horizontal">
              <InputNumber addonBefore="Inversión " value={inversion} style={{ width: '50%' }} disabled />
              <InputNumber addonBefore="Ganancia Bruta" value={gananciaB} style={{ width: '60%' }} disabled />
            </Space.Compact>
            <InputNumber addonBefore="Ganancia Neta x Unidad" value={gananciaN} style={{ width: '100%' }} disabled />
            <Space.Compact direction="horizontal">
              <InputNumber addonBefore="Ganancia Final  " value={gananciaF} style={{ width: '70%' }} disabled />
              <InputNumber addonBefore="Facturación" value={facturacion} style={{ width: '70%' }} disabled />
            </Space.Compact>

            <Typography.Title level={5} style={{ color: '#000' }}>DEVOLUCIONES</Typography.Title>

            <Space.Compact direction="horizontal">
              <InputNumber addonBefore="25% " value={dev25} style={{ width: '55%' }} disabled />
              <InputNumber addonBefore="Extra x Devolucion (25%/1000) " value={dev25Ext} style={{ width: '100%' }} disabled />
            </Space.Compact>
            <Space.Compact direction="horizontal">
              <InputNumber addonBefore="30% " value={dev30} style={{ width: '55%' }} disabled />
              <InputNumber addonBefore="Extra x Devolucion (30%/1000) " value={dev30Ext} style={{ width: '100%' }} disabled />
            </Space.Compact>
            <Space.Compact direction="horizontal">
              <InputNumber addonBefore="40% " value={dev40} style={{ width: '55%' }} disabled />
              <InputNumber addonBefore="Extra x Devolucion (40%/1000) " value={dev40Ext} style={{ width: '100%' }} disabled />
            </Space.Compact>
            <Space.Compact direction="horizontal">
              <InputNumber addonBefore="50% " value={dev50} style={{ width: '55%' }} disabled />
              <InputNumber addonBefore="Extra x Devolucion (50%/1000) " value={dev50Ext} style={{ width: '100%' }} disabled />
            </Space.Compact>

            <Typography.Title level={5} style={{ color: '#000' }}>COSTOS OPERATIVOS</Typography.Title>
            <Space.Compact direction="vertical">
              
              <InputNumber addonBefore="DELIVERY/PRODUCTO" value={flete*units} style={{ width: '100%' }} disabled />
              <InputNumber addonBefore="CPA (C*COMPRA) " value={cpa*units} style={{ width: '100%' }} disabled />
              <InputNumber addonBefore="DEVOLUCIONES 25%" value={dev25} style={{ width: '100%' }} disabled />
              <InputNumber addonBefore="PERSONAL" value={personal} style={{ width: '100%' }} disabled />
              <InputNumber addonBefore="TOTAL " value={(flete*units)+(cpa*units)+dev25+personal} style={{ width: '100%' }} disabled />
            </Space.Compact>

          </Space>
        </Space>
      </ConfigProvider>
    </div>
  );
};

export default Standard;
