import Login from "./Login";
import { Button, Modal, ConfigProvider } from "antd";
import { NavbarProps } from "../../interface/home";
import { NavbarItems } from "../logic/component_home/NavbarItems";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import logo from '../../assets/lexcom.svg';
import React from 'react';
import '../../css/navbar.css'

const Navbar: React.FC<NavbarProps> = ({ isScrolling }) => {

    const [clicked, setClicked] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const navigate = useNavigate();

    const initialFormData = {
        email: "",
        password: "",
        remember: "",
    };


    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const handleClick = () => {
        setClicked(!clicked);
    }

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const showLoginModal = () => {
        setLoginModalVisible(true);
    };

    const handleLoginModalCancel = () => {
        setLoginModalVisible(false);
    };

    const handleRegister = () => {
        navigate('/login')
    }

    return (
        <nav className={`navbar ${isScrolling > 10 ? 'scrolling' : ''}`}>
            <div className="navbar_logo" onClick={toTheTop}>
                <img src={logo} alt="Lexcom Logo" />
            </div>
            <ul className={(clicked && isScrolling > 10) ? "nav_menu active scrolling_bars_container active" :
                (clicked && isScrolling < 10) ? "nav_menu active" : "nav_menu"}>
                {NavbarItems.map((item, index) => (

                    <li key={index}>
                        <Link to={`#${item.id_}`} onClick={() => scrollToSection(item.id_)}
                            className="nav_links">
                            {item.title}
                        </Link>
                    </li>
                ))}
                <div className={clicked ? "button-container active" : "button-container"}>
                    <Button className="login-btn" onClick={showLoginModal}>Login</Button>
                    <Button className="register-btn" onClick={handleRegister}>Regístrate</Button>
                </div>
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
                    <Modal
                        title="Bienvenido a LexCom"
                        className="login-container"
                        open={loginModalVisible}
                        onCancel={handleLoginModalCancel}
                        footer={null}
                    >
                        <Login {...initialFormData} />
                    </Modal>
                </ConfigProvider>
            </ul>
            <Bars3Icon className="menu_icon" onClick={handleClick} />
        </nav>
    );
}
export default Navbar;  