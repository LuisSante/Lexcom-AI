import '../../css/styles_home/welcome.css';
import welcome from '../../assets/welcome.svg'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import Login from '../Login';
import Register from '../Register';
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

        <div className="welcome-container">
            {/* <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'></link> */}
            <div className="phrase-up">
                Encuentra facilmente tu
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
                title="Login"
                open={loginModalVisible}
                onCancel={handleLoginModalCancel}
                footer={null}
            >
                <Login {...initialFormData} />
            </Modal>
            <Modal
                title="Register"
                open={registerModalVisible}
                onCancel={handleRegisterModalCancel}
                footer={null}
            >
                <Register />
            </Modal>
            <img src={plane} className='welcome-plane' alt="plane"/>
        </div>
    )
}

export default Welcome