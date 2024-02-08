import Calculator_1 from './Calculator_1';
import Calculator_2 from '../pages/Calculator_2';
import Tutorial from '../pages/Tutorial';
import '../css/Dashboard.css';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Input, Button } from 'antd';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Product from './Product';
import About from '../components/components_home/About';

const { Header, Content, Sider } = Layout;

const calculatorFunctions = [Calculator_1, Calculator_2];

const items: MenuProps['items'] = [Tutorial, {
  key: 'Calculators',
  label: 'Calculators',
  children: calculatorFunctions.map((calculatorFunc, j) => ({
    key: `${calculatorFunc.name}`,
    label: `${calculatorFunc.name}`,
  })),
}, Product as any].map((page, index) => {
  const key = page.key || page.label || page.name; // Usar key si está presente, de lo contrario, usar label
  console.log(page.name)
  const generateChildren = page.children && page.children.length > 0; // Páginas que tienen subnavegación

  return {
    key: key,
    label: key,

    children: generateChildren ? page.children : undefined,
  };
});

const Dashboard: React.FC = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="body-layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Input.Search
          placeholder="Search"
          style={{ width: '200px', marginLeft: 'auto', marginRight: '160px' }}
          onSearch={(value) => {
            console.log('Search:', value);
          }}
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

              items={items}
              onSelect={(item) => setSelectedMenu(item.key as string)}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 700 }}>
            {selectedMenu === 'Tutorial' && <Tutorial />}
            {selectedMenu === 'Calculator_1' && <Calculator_1 />}
            {selectedMenu === 'Calculator_2' && <Calculator_2 />}
            {selectedMenu === 'Product' && <Product />}
          </Content>
        </Layout>
      </Content>
        <About/>
    </Layout>
  );
};

export default Dashboard