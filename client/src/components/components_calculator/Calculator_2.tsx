import React, { useState } from 'react';
import {  InputNumber, Space, Typography } from 'antd';

import { ConfigProvider } from 'antd';
import '../../css/TimelineDemo.css';

const CPA_CVU: React.FC = () => {
  const [costo, setcosto] = useState(0);
  const [precio, setprecio] = useState(0);
  const [flete, setflete] = useState(0);
  const [full, setfull] = useState(0);
  const [cpa, setcpa] = useState(0);
  const [units, setunits] = useState(0);
  const [delivery, setdelivery] = useState(0);
  const [personal, setpersonal] = useState(0);
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
            Select: {

            }
          },
        }}
      >
        <Space direction='vertical'>
          <Space align="start" size={'large'}>
            <Space direction='vertical' style={{ width: '80%' }} >
              <Typography.Title level={4} style={{ color: '#000' }}>CPA</Typography.Title>


              <InputNumber addonBefore="INVERSION " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setcosto(value);
                }
              }} />
              <InputNumber addonBefore="CPM" defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setprecio(value);
                }
              }} />
              <InputNumber addonBefore="CTR" defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setflete(value);
                }
              }} />
            </Space>
            <Space direction='vertical' >
              <Typography.Title level={5} style={{ color: '#000' }}>RESULTADOS:</Typography.Title>
              <Space.Compact direction="vertical">
                <InputNumber addonBefore="IMPRESIONES" value={costo / precio} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="CICKS EN EL ENLACE" value={(costo / precio) * (flete / 100.0)} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="COSTO POR CLICK" value={costo / flete / 100.0} style={{ width: '100%' }} disabled />
              </Space.Compact>
            </Space>
          </Space>
          <Space align="start" size={'large'}>
            <Space direction="vertical" >
              <Typography.Title level={4} style={{ color: '#000' }}>CVU</Typography.Title>
              <InputNumber addonBefore="AOV" defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setfull(value);
                }
              }} />
              <InputNumber addonBefore="COSTO UNITARIO DE INTERMEDIACIÒN " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setcpa(value);
                }
              }} />
              <InputNumber addonBefore="COSTO POR COMPRA " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setunits(value);
                }
              }} />
              <InputNumber addonBefore="COSTO ADMINISTRATIVO UNITARIO " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setdelivery(value);
                }
              }} />
              <InputNumber addonBefore="COSTO IMPOSITIVO " defaultValue={0} min={0} style={{ width: '100%' }} onChange={(value) => {
                if (value !== null) {
                  setpersonal(value);
                }
              }} />
            </Space>
            <Space direction="vertical" >
              <Typography.Title level={5} style={{ color: '#000' }}>RESULTADOS</Typography.Title>
              <Space.Compact direction="vertical">
                <InputNumber addonBefore="COSTO UNITARIO" value={cpa + units + delivery + personal} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="GANANCIA " value={full - (cpa + units + delivery + personal)} style={{ width: '100%' }} disabled />
                <InputNumber addonBefore="MARGEN NETO OBTENIDO" value={(full - (cpa + units + delivery + personal)) / full} style={{ width: '100%' }} disabled />
              </Space.Compact>

            </Space>
          </Space>
        </Space>
      </ConfigProvider>
    </div>
  );
};

export default CPA_CVU;
