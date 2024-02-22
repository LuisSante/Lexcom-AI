import Standard from './Calculator_1';
import CPA_CVU from '../pages/Calculator_2';
import Tutorial from '../pages/Tutorial';
import '../css/Dashboard.css';
import React, { useEffect, useState } from 'react';
import { Avatar, Space, Input, Button } from 'antd';
import { Dropdown, ConfigProvider, Layout, Menu, theme } from 'antd';
import { DownOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { UserOutlined, CalculatorOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import About from '../components/components_home/About';
import logo from '../assets/lexcom.svg';
import Product from './Product';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/axios';
import OpenAI from './OpenAI';

const { Header, Content, Sider } = Layout;
//<Avatar src={<img src={url} alt="avatar" />} />
const calculatorFunctions = [Standard, CPA_CVU];

const items2: MenuProps['items'] = [
  {
    key: 'GeoTrend Lex',
    label: 'GeoTrend Lex',
    icon: UserOutlined,
  },
  {
    key: 'BudgetControlPro',
    label: 'BudgetControlPro',
    icon: CalculatorOutlined,
    children: calculatorFunctions.map((calculatorFunc, j) => ({
      key: `${calculatorFunc.name}`,
      label: `${calculatorFunc.name}`,
    })),
  } as any,
  {
    key: 'Lex ProfitAI',
    label: 'Lex ProfitAI',
    icon: UserOutlined,
  },
  {
    key: 'TikTok TrendFeed',
    label: 'TikTok TrendFeed',
    icon: UserOutlined,
  },
  {
    key: 'Prompt Generator',
    label: 'Prompt Generator',
    icon: UserOutlined,
  },
  {
    key: 'Lexcom Courses',
    label: 'Lexcom Courses',
    icon: UserOutlined,
  },
  {
    key: 'Guide Lexcom',
    label: 'Guide Lexcom',
    icon: UserOutlined,
  }
].map((page, index) => {
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
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  //const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [marginL, setmarginL] = useState(250);


  // const handleLogout = async () => {
  //   try {
  //     await axiosInstance.post('logout/blacklist/', {
  //       refresh_token: localStorage.getItem('refresh_token'),
  //     });
      
  //     localStorage.removeItem('access_token');
  //     localStorage.removeItem('refresh_token');
  //     axiosInstance.defaults.headers['Authorization'] = null;
      
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Error al cerrar sesión:', error);
  //   }
  // };

  // useEffect(() => {
  //   handleLogout();
  // });

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Perfil
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Mi Plan
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Configuraciones
        </a>
      ),
    },
    {
      key: '4',
      danger: true,
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Logout
        </a>
      ),
    },
  ];

  const [searchValue, setSearchValue] = useState<string>("");


  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#000',
            bodyBg: '#000',
          },
        },
      }}
    >
      <Layout className="body-layout" style={{ minHeight: '100vh' }}>
        <Header style={{
          display: 'flex', alignItems: 'center', justifyItems: 'space-between', position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%'
        }}>
          <img src={logo} alt="Lexcom Logo" className="navbar_logo_" />
          <Input.Search
            size="large"
            placeholder="Search"
            style={{ width: '400px', marginLeft: 'auto', marginRight: '160px' }}
            onSearch={(value) => {
              setSearchValue(value);
            }}
          />

          <Space size={16} wrap>
            <p className="welcome">Bienvenido</p>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Space>
        </Header>
        <Layout >
          <Sider className="lexcom-sider"
            width={250}
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed) => {
              setCollapsed(collapsed);
              if (collapsed) {
                setmarginL(50);
              } else {
                setmarginL(250);
              }
            }}
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
            style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 60, bottom: 0 }}
          >
            <Menu
              className="lexcom-menu"
              mode="inline"
              defaultSelectedKeys={['1']}

              items={items2}
              onSelect={(item) => setSelectedMenu(item.key as string)}
            />
          </Sider>
          <Layout style={{
            padding: 24,
            minHeight: 360,
            marginLeft: marginL
          }} className="lexcom-layout">

            <Content style={{ margin: '0 16px', padding: '0 24px', minHeight: 700 }} >
              {selectedMenu === 'Guide Lexcom' && <Tutorial />}
              {selectedMenu === 'GeoTrend Lex' && <Product searchValue={searchValue} />}
              {selectedMenu === 'Standard' && <Standard />}
              {selectedMenu === 'CPA_CVU' && <CPA_CVU />}
              {selectedMenu === 'Prompt Generator' && <OpenAI searchValue={searchValue}/>}
              
            </Content>
          </Layout>
        </Layout >
        <Layout style={{ marginLeft: marginL }}>

          <About id='about' />
        </Layout>
      </Layout>
    </ConfigProvider>

  );
};

export default Dashboard