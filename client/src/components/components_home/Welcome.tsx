import welcome from '../../assets/welcome.svg'
import { useState } from 'react';
import { Button, ConfigProvider, Modal } from 'antd';
import Login from './Login';
import Register from './Register';
import plane from '../../assets/plane.svg'

const Welcome = () => {
    const [clicked] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [registerModalVisible, setRegisternModalVisible] = useState(false);

    const initialFormData = {
        password: "",
        remember: "",
        email: "",
    };

    const showLoginModal = () => {
        setLoginModalVisible(true);
    };

    const handleLoginModalCancel = () => {
        setLoginModalVisible(false);
    };

    const showRegisterModal = () => {
        setRegisternModalVisible(true);
    };

    const handleRegisterModalCancel = () => {
        setRegisternModalVisible(false);
    };


    return (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        titleColor: '#fff',
                        colorBgContainer: '#f6ffed',
                        controlOutline: '#000000',
                        contentBg: '#000000',
                        titleFontSize: 25,
                        headerBg: '#000000',
                        colorIcon: '#fff',
                        colorIconHover: '#ecb6ff'
                    },
                },
            }}
        >
            <div className="flex flex-col justify-center items-center mt-[140px]">
                <div
                    className='py-2'
                    style={{
                        letterSpacing: '1.6px',
                        background: 'linear-gradient(91deg, #ff1cf7 2.26%, #00f0ff 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textAlign: 'center',
                        fontWeight: 100,
                        fontSize: '45px',
                        lineHeight: '50px',
                        fontFamily: '"Poppins", sans-serif',
                        color: 'white'
                    }}
                >
                    Determina la probabilidad
                    <br />
                    de éxito de productos ganadores
                </div>
                <img src={welcome} className='mt-[-17px] mb-[14px] w-[55%] h-[55%]' alt="welcome" />
                <div className="mt-[-39px] font-poppins text-[20px] text-center text-white leading-[33px] tracking-[0.72px]">
                    Potencia tu negocio y ahórrate miles de dólares y mucho tiempo a la hora de testear
                    <br />
                    malos productos y ten más asertividad con LexCom asi logrando tener más precisión.
                </div>


                <div className={`flex ${clicked ? 'flex-col' : 'flex-row'} gap-[50px] w-[500px] justify-center mt-[50px]`}>
                    <Button className="border-2.5 border-white bg-[#1d1d68] hover:bg-white hover:border-black rounded-full w-[150px] h-[50px] text-white hover:text-[#1d1d68]" onClick={showRegisterModal}>Conoce Más!</Button>
                    <Button className="border-2.5 border-white bg-[#1d1d68] hover:bg-white hover:border-black rounded-full w-[150px] h-[50px] text-white hover:text-[#1d1d68]" onClick={showLoginModal}>Vamos</Button>
                </div>
                <Modal
                    title="Bienvenido a LexCom"
                    open={loginModalVisible}
                    onCancel={handleLoginModalCancel}
                    footer={null}
                >
                    <Login {...initialFormData} />
                </Modal>
                <Modal
                    title="Regístrate en LexCom"
                    open={registerModalVisible}
                    onCancel={handleRegisterModalCancel}
                    footer={null}
                >
                    <Register />
                </Modal>
                <img src={plane} className='mt-[-60px] w-[90%]' alt="plane" />
            </div>
        </ConfigProvider>
    )
}

export default Welcome