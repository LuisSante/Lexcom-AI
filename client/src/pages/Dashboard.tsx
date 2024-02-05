import SideBar from "../components/Sidebar"
import Calculator_1 from './Calculator_1';
import Calculator_2 from '../pages/Calculator_2';
import Tutorial from '../pages/Tutorial';
import '../css/Dashboard.css';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Input, Button } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const calculatorFunctions = [Calculator_1, Calculator_2];

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
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout  className="body-layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Input.Search
          placeholder="Search"
          style={{ width: '200px', marginLeft: 'auto', marginRight: '160px' }}
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
      <Content style={{ padding: '0 0px' }}>
        <Layout
           className="lexcom-layout"
        >
          <Sider className="lexcom-sider" 
          width={200}
          collapsible
          collapsed={collapsed}
          onCollapse={(collapsed) => setCollapsed(collapsed)}
          trigger={
            <div className="sider-trigger-container">
              <Button
                type="text"
                className="menu-button"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                
              />
            </div>
          }
          >
            <Menu
              className="lexcom-menu"
              mode="inline"
              defaultSelectedKeys={['1']}

              items={items2}
              onSelect={(item) => setSelectedMenu(item.key as string)}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 700 }}>
            {/* Renderizar el componente según la selección actual */}
            {selectedMenu === 'Tutorial' && <Tutorial />}
            {selectedMenu === 'Calculator_1' && <Calculator_1 />}
            {selectedMenu === 'Calculator_2' && <Calculator_2 />}               
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Dashboard