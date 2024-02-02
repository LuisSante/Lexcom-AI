import SideBar from "../components/Sidebar"
import Calculator from '../pages/Calculator';
import Calculator_2 from '../pages/Calculator_2';
import Tutorial from '../pages/Tutorial';

import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Input } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


const calculatorFunctions = [Calculator, Calculator_2];

const items2: MenuProps['items'] = [Tutorial, {
  key: 'Calculators',
  label: 'Calculators',
  children: calculatorFunctions.map((calculatorFunc, j) => ({
    key: `${calculatorFunc.name}`,
    label: `${calculatorFunc.name}`,
  })),
} as any].map((page, index) => {
  const key = page.key || page.label || page.name; // Usar key si está presente, de lo contrario, usar label

  const generateChildren = page.children && page.children.length > 0; // Páginas que tienen subnavegación

  return {
    key: key,
    label: key,

    children: generateChildren ? page.children : undefined,
  };
});

const Dashboard: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Input.Search
          placeholder="Search"
          style={{ width: '200px', marginLeft: 'auto', marginRight: '16px' }}
          onSearch={(value) => {
            // Aquí puedes manejar la lógica de búsqueda
            console.log('Search:', value);
          }}
        />
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%' }}
              items={items2}
              onSelect={(item) => setSelectedMenu(item.key as string)}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 800 }}>
            {/* Renderizar el componente según la selección actual */}
            {selectedMenu === 'Tutorial' && <Tutorial />}
            {selectedMenu === 'Calculator' && <Calculator />}
            {selectedMenu === 'Calculator_2' && <Calculator_2 />}               
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Dashboard