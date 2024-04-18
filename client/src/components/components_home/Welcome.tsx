import '../../css/styles_home/welcome.css';
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
            <div className="welcome-container">
                <div className="phrase-up">
                    Encuentra fácilmente tu
                    <br />
                    Producto Ganador
                </div>
                <img src={welcome} className='welcome-logo' alt="welcome" />
                <div className="phrase-down">
                    Potencia tus ventas con nuestra IA de productos ganadores:
                    <br />
                    ¡Descubre el éxito en el comercio electrónico de manera confiable!
                </div>
                <div className={clicked ? "welcome-button-container active" : "welcome-button-container"}>
                    <Button className="welcome-register-btn" onClick={showRegisterModal}>Conoce Más!</Button>
                    <Button className="welcome-login-btn" onClick={showLoginModal}>Vamos</Button>
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
                <img src={plane} className='welcome-plane' alt="plane" />
            </div>
        </ConfigProvider>
    )
}

export default Welcome