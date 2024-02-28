import logo from '../assets/lexcom.svg';
import '../css/Dashboard.css';

import { Avatar, Space, Input, Button, notification } from 'antd';
import { Dropdown, ConfigProvider, Layout, Menu } from 'antd';
import { UserOutlined, CalculatorOutlined , DownOutlined , MenuUnfoldOutlined , MenuFoldOutlined , SmileOutlined, CloseOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Standard from './Calculator_1';
import CPA_CVU from '../pages/Calculator_2';
import Precio_del_Producto from './Calculator_3';
import Tutorial from '../pages/Tutorial';
import About from '../components/components_home/About';
import Product from './Product';
import OpenAI from './OpenAI';
import Tiktok from './Tiktok';
import LexcomAI from './LexcomAI';
import axiosInstance from '../components/axios';


const { Header, Content, Sider } = Layout;
//<Avatar src={<img src={url} alt="avatar" />} />
const calculatorFunctions = [Standard, CPA_CVU, Precio_del_Producto];

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
    children: calculatorFunctions.map((calculatorFunc) => ({
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
].map((page) => {
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
  // const {
  //   token: { borderRadiusLG },
  // } = theme.useToken();
  //const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

  const [selectedMenu, setSelectedMenu] = useState<string | null>('Guide Lexcom');
  const [marginL, setmarginL] = useState(250);

  const handleLogout = async () => {
    try {
      await axiosInstance.post('logout/', {
        refresh_token: localStorage.getItem('refresh_token'),
      });

      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;

      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

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
        <a target="_blank" rel="noopener noreferrer" onClick={handleLogout}>
          Logout
        </a>
      ),
    },
  ];

  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);

  // const [open, setOpen] = useState<boolean>(false);


  // const steps: TourProps['steps'] = [
  //   {
  //     title: 'Upload File',
  //     description: 'Put your files here.',
  //     cover: (
  //       <img
  //         alt="tour.png"
  //         src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
  //       />
  //     ),
  //     target: () => ref1.current,
  //   },
  //   {
  //     title: 'Save',
  //     description: 'Save your changes.',
  //     target: () => ref2.current,
  //   },
  //   {
  //     title: 'Other Actions',
  //     description: 'Click to see other actions.',
  //     target: () => ref3.current,
  //   },
  // ];

  const [searchValue, setSearchValue] = useState<string>("");
  const [api, contextHolder] = notification.useNotification();
  const Context = React.createContext({ name: 'Default' });

  const emptyNotification = () => {
    api.open({
      message: "ERROR!!!",
      description: <Context.Consumer>{() => "Error! Realiza una búsqueda"}</Context.Consumer>,
      icon: <CloseOutlined style={{ color: '#108ee9' }} />,
    });
  };

  const openNotification = () => {
    api.open({
      message: "LEXCOM CHECK!!!",
      description: <Context.Consumer>{() => "Búsqueda realizada existósamente"}</Context.Consumer>,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  useEffect(() => {
    if (selectedMenu === 'Lexcom Courses') {
      window.location.href = 'https://home.upcommercelatam.com/login/?wppb_referer_url=https%3A%2F%2Fhome.upcommercelatam.com%2F';
    }
  }, [selectedMenu]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#000',
            bodyBg: '#000',
          },
        },
        token: {
          fontFamily: "Poppins, sans-serif",
        }
      }}
    >
      {contextHolder}
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
              if (value.trim() === '') {
                emptyNotification();
              } else {
                setSearchValue(value);
                openNotification();
              }
            }}
          />
          <p className="welcome">Bienvenido</p>
          <Avatar style={{ backgroundColor: '#87d068', minWidth: '35px' }} icon={<UserOutlined />} />
          <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          {/* <Button type="primary" onClick={() => setOpen(true)}>
            Begin Tour
          </Button> */}
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
              onSelect={(item) => {
                if (item.key === 'Guide Lexcom') {
                  setSelectedMenu('Guide Lexcom');
                } else if (item.key === 'Lexcom Courses') {
                  setSelectedMenu('Lexcom Courses');
                } else if (searchValue.trim() === '') {
                  emptyNotification();
                } else {
                  setSelectedMenu(item.key as string);
                }
              }}
            />

          </Sider>
          <Layout style={{
            padding: 24,
            minHeight: 360,
            marginLeft: marginL
          }} className="lexcom-layout">

            <Content style={{ margin: '0 16px', padding: '0 24px', minHeight: 700 }} >
              {selectedMenu === 'GeoTrend Lex' && <Product searchValue={searchValue} />}
              {selectedMenu === 'Standard' && <Standard />}
              {selectedMenu === 'Precio_del_Producto' && <Precio_del_Producto />}
              {selectedMenu === 'CPA_CVU' && <CPA_CVU />}
              {selectedMenu === 'Lex ProfitAI' && <LexcomAI />}
              {selectedMenu === 'TikTok TrendFeed' && <Tiktok searchValue={searchValue} />}
              {selectedMenu === 'Prompt Generator' && <OpenAI searchValue={searchValue} />}
              {selectedMenu === 'Guide Lexcom' && <Tutorial />}
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