import { Button, Modal } from "antd";
import { NavbarItems } from "./logic/NavbarItems";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import '../css/navbar.css'
import { Link } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import logo from '../assets/lexcom.svg';
import React from 'react';


interface NavbarProps {
    isScrolling: number;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolling }) => {

    const [clicked, setClicked] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [registerModalVisible, setRegisternModalVisible] = useState(false);


    const initialFormData = {
        user: "",
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
        console.log(section);
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

    const showRegisterModal = () => {
        setRegisternModalVisible(true);
    };

    const handleRegisterModalCancel = () => {
        setRegisternModalVisible(false);
    };

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
                    <Button className="register-btn" onClick={showRegisterModal}>Register</Button>
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
            </ul>
            <Bars3Icon className="menu_icon" onClick={handleClick} />
        </nav>
    );
}
export default Navbar;  