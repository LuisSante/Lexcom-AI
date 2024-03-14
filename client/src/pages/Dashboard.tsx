import Standard from '../components/components_calculator/Calculator_1';
import CPA_CVU from '../components/components_calculator/Calculator_2';
import Precio_del_Producto from '../components/components_calculator/Calculator_3';
import Tutorial from '../pages/Tutorial';
import '../css/Dashboard.css';
import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Space, Input, Button, notification, Tour, Drawer, Row, Col, Divider, Modal, Radio } from 'antd';
import { Dropdown, ConfigProvider, Layout, Menu, Progress } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UserOutlined, CalculatorOutlined, TikTokOutlined, TrophyOutlined, WarningOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import logo from '../assets/lexcom.svg';
import '../css/Dashboard.css';
import { SmileOutlined, CloseOutlined } from '@ant-design/icons';
import {
  QuestionCircleOutlined,
  BookOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import About from '../components/components_home/About';
import Product from './Product';
import OpenAI from './OpenAI';
import CopyAds from './CopyAds';
import Tiktok from './Tiktok';
import LexcomAI from './LexcomAI';
import axiosInstance from '../components/axios';
import type { TourProps } from 'antd';

interface UserType {
  id: number,
  username: string,
  email: string,
  name: string,
  surname: string,
  phone: string,
  country: string,
  city: string,
  address: string,
  gender: string,
  date_of_birth: string
}

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const Dashboard: React.FC = () => {
  const { Header, Content, Sider } = Layout;
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string | null>('Guide Lexcom');
  const [marginL, setmarginL] = useState(250);

  const [openD, setOpenD] = useState(false);

  const showDrawer = () => {
    setOpenD(true);
  };

  const onCloseD = () => {
    setOpenD(false);
  };

  const steps: TourProps['steps'] = [
    {
      title: 'GeoTrend Lex',
      description: 'Explora la pestaña de ranking de ventas en la parte izquierda de tu pantalla. Con esta pestaña podrás conocer si tu producto tiene un buen interés y en que países es el más buscado.',
      placement: 'right',
      target: () => ref1.current,
    },
    {
      title: 'Budget Control Pro',
      description: 'Te ofrecemos tres calculadoras para que de esta forma puedas saber que precio debe tener tu producto, el CPA y CPU asi como estadisticas generales.',
      placement: 'right',
      target: () => ref2.current,
    },
    {
      title: 'LexIA Determination',
      description: 'Aquí conocerás si tu producto tendrá éxito o no a la hora de vender. Completa el formulario y no olvides poner el interés que anotaste anteriormente.',
      placement: 'right',
      target: () => ref3.current,
    },
    {
      title: 'TikTok TrendFeed',
      description: 'Visualizar a la competencia es clave del éxito, ya que podrás conocer sus puntos débiles y usarlo a tu favor. Con esta ventana tendrás los tiktoks más populares de tu producto, úsalos de inspiración para elaborar tu propio video ganador.',
      placement: 'right',
      target: () => ref4.current,
    }, {
      title: 'Prompt Generators',
      description: '¿Tu producto es ganador, pero no sabes como estructurar tu video para que sea una venta segura? En esta pestaña obtendrás ideas de como hacerlo, te brindamos una estructura ganadora para que puedas estructurar tu video y generar tus copys.',
      placement: 'right',
      target: () => ref5.current,
    }, {
      title: 'Lexcom Courses',
      description: '¿No sabes como continuar vendiendo? Te ofrecemos una amplia variedad de cursos que te permitiran continuar tu camino al exito.',
      placement: 'right',
      target: () => ref6.current,
    }, {
      title: 'Guide Lexcom',
      description: 'Ver el tutorial',
      placement: 'right',
      target: () => ref7.current,
    },
  ];

  const handleLogout = () => {
    try {
      axiosInstance.post('logout/', {
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

  const handleSettings = async () => {
    navigate('/settings');
  }

  const items: MenuProps['items'] = [
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={showDrawer}>
          Perfil
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={handleSettings}>
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

  const [searchValue, setSearchValue] = useState<string>("");
  const [api, contextHolder] = notification.useNotification();
  const Context = React.createContext({ name: 'Default' });

  // To Progress
  const [progress, setProgress] = useState(0);
  const [searchCount, setSearchCount] = useState(0);
  const [maxSearches, setMaxSearches] = useState(0);

  const emptyNotification = () => {
    api.open({
      message: "ERROR!!!",
      description: <Context.Consumer>{() => "Error! Realiza una búsqueda"}</Context.Consumer>,
      icon: <CloseOutlined style={{ color: '#108ee9' }} />,
    });
  };

  const searchLimited = () => {
    let newPlan = 'standard';
    Modal.confirm({
        title: 'LEXCOM WARNING!!!',
        content: (
            <div>
                <p>Se ha excedido el límite de búsquedas permitidas. Selecciona un nuevo plan para continuar.</p>
                <Radio.Group defaultValue="standard" onChange={(e) => newPlan = e.target.value}>
                    <Radio.Button value="standard">Standard (5 búsquedas más)</Radio.Button>
                    <Radio.Button value="business">Business (10 búsquedas más)</Radio.Button>
                    <Radio.Button value="premium">Premium (20 búsquedas más)</Radio.Button>
                </Radio.Group>
            </div>
        ),
        icon: <WarningOutlined style={{ color: '#108ee9' }} />,
        onOk() {
          axiosInstance.post('update_plan/', { new_plan: newPlan })
            .then(response => {
              const { new_max_searches, new_search_count, new_progress_count } = response.data;
              setMaxSearches(new_max_searches); 
              setSearchCount(new_search_count);
              setProgress(new_progress_count);
              location.reload();
            })
            .catch(error => {
              console.error('Error updating search plan:', error);
            });
        }
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

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get('user_info/');
        const userData = response.data;
        setMaxSearches(userData.max_searches);
        setSearchCount(userData.search_count);
        setProgress(userData.progress_count);
      } catch (error) {
        console.error('Error al recuperar la información del usuario:', error);
      }
    };
  
    fetchUserInfo();
  }, []);


  const [data, setData] = useState<UserType | null>(null);

  useEffect(() => {
    const url = `update/`
    axiosInstance.get<UserType>(url)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.error(err.message);
      })
      .finally(() => {

      })
  }, []);

  const handleHome = () => {
    setSearchValue("");
    setSelectedMenu('Guide Lexcom');
  }

  // const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

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
          <img src={logo} alt="Lexcom Logo" className="navbar_logo_" onClick={handleHome} />
          <Input.Search
            size="large"
            placeholder="Search"
            style={{ width: '400px', marginLeft: 'auto', marginRight: '160px' }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={(value) => {
              if (value.trim() === '') {
                // setSelectedMenu('Guide Lexcom');
                emptyNotification();
              } else if (searchCount == maxSearches) {
                searchLimited();                
              } else {
                setSearchValue(value);
                setSelectedMenu('Guide Lexcom');
                openNotification();
                axiosInstance.post('increment_search_count/')
                  .then(response => {
                    const { new_search_count, new_progress_count} = response.data;
                    setSearchCount(new_search_count);
                    setProgress(new_progress_count);
                  })
                  .catch(error => {
                    console.error('Error al actualizar el contador de búsquedas:', error);
                });
              }
            }}
          />

          <p className="welcome">Bienvenido {data?.name}</p>
          <Avatar style={{ backgroundColor: '#87d068', minWidth: '35px', marginLeft: '20px', marginRight: '10px' }} icon={<UserOutlined />} onClick={showDrawer} />
          <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
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
          // key={selectedMenuItem}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', backgroundColor: '#000000' }}>
                <Progress 
                  type="circle" 
                  percent={progress} 
                  width={80} 
                  strokeColor='#108ee9' 
                  trailColor="#ffffff"
                  format={() => (
                    <span style={{ color: progress === 100 ? '#108ee9' : '#108ee9' }}>
                      {searchCount} / {maxSearches}
                    </span>
                  )}
                />
            </div>
            <Menu
              className="lexcom-menu"
              mode="inline"
              defaultSelectedKeys={['1']}
              selectedKeys={selectedMenu ? [selectedMenu] : []}
              theme="dark"
              onSelect={(item) => {
                if (item.key === 'Guide Lexcom') {
                  setSelectedMenu('Guide Lexcom');
                } else if (item.key === 'Lexcom Courses') {
                  setSelectedMenu('Lexcom Courses');
                } else if (searchValue.trim() === '') {
                  emptyNotification();
                  setSelectedMenu('');
                } else {
                  setSelectedMenu(item.key as string);
                }
              }}
            >
              <Menu.Item key={'GeoTrend Lex'} icon={<LineChartOutlined ref={ref1} />}> {/* Utilizamos el ref aquí */}
                {'GeoTrend Lex'}
              </Menu.Item>
              <Menu.SubMenu icon={<CalculatorOutlined ref={ref2} />} key={'BudgetControlPro'} title={'Budget Control Pro'}>
                <Menu.ItemGroup key={'BudgetControlPro'}>
                  <Menu.Item key={'Standard'}>
                    {'Standard'}
                  </Menu.Item>
                  <Menu.Item key={'CPA_CVU'}>
                    {'CPA CVU'}
                  </Menu.Item>
                  <Menu.Item key={'Precio_del_Producto'}>
                    {'Precio del Producto'}
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
              <Menu.Item key={'LexIA Determination'} icon={<TrophyOutlined ref={ref3} />}> {/* Utilizamos el ref aquí */}
                {'LexIA Determination'}
              </Menu.Item>
              <Menu.Item key={'TikTok TrendFeed'} icon={<TikTokOutlined ref={ref4} />}> {/* Utilizamos el ref aquí */}
                {'TikTok TrendFeed'}
              </Menu.Item>
              <Menu.SubMenu icon={<DesktopOutlined ref={ref5} />} key={'Prompt Generators'} title={'Prompt Generators'}>
                <Menu.ItemGroup key={'Prompt Generators'} >
                  <Menu.Item key={'Prompt Generator Video'}>
                    {'Prompt Generator Video'}
                  </Menu.Item>
                  <Menu.Item key={'Prompt Generator Copys'}>
                    {'Prompt Generator Copys'}
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
              <Menu.Item key={'Lexcom Courses'} icon={<BookOutlined ref={ref6} />}> {/* Utilizamos el ref aquí */}
                {'Lexcom Courses'}
              </Menu.Item>
              <Menu.Item key={'Guide Lexcom'} icon={<QuestionCircleOutlined ref={ref7} />} onClick={() => setOpen(true)}> {/* Utilizamos el ref aquí */}
                {'Guide Lexcom'}
              </Menu.Item>
            </Menu>

          </Sider>
          <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
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
              {selectedMenu === 'LexIA Determination' && <LexcomAI />}
              {selectedMenu === 'TikTok TrendFeed' && <Tiktok searchValue={searchValue} />}
              {selectedMenu === 'Prompt Generator Video' && <OpenAI searchValue={searchValue} />}
              {selectedMenu === 'Prompt Generator Copys' && <CopyAds searchValue={searchValue} />}
              {selectedMenu === 'Guide Lexcom' && <Tutorial />}
              {selectedMenu === '' && <Tutorial />}
            </Content>
          </Layout>
        </Layout >
        <Layout style={{ marginLeft: marginL }}>
          <About id='about' />
        </Layout>
      </Layout>
      <Drawer width={640} placement="right" closable={false} onClose={onCloseD} open={openD}>
        <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
          Perfil
        </p>
        <Divider />
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Nombres" content={data?.name} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Apellidos" content={data?.surname} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Ciudad" content={data?.city} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="País" content={data?.country} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Cumpleaños" content={data?.date_of_birth ? new Date(data.date_of_birth).toISOString().split('T')[0] : ''} />

          </Col>
          <Col span={12}>
            <DescriptionItem title="Usuario" content={data?.username} />
          </Col>
        </Row>

        <Divider />
        <p className="site-description-item-profile-p">Contacto</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content={data?.email} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Teléfono" content={data?.phone} />
          </Col>
        </Row>
      </Drawer>
    </ConfigProvider>

  );
};

export default Dashboard