import { Button, Modal } from "antd";
import { NavbarItems } from "./logic/NavbarItems";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import '../css/navbar.css'
import { Link } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";


interface NavbarProps {
    isScrolling: number;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolling }) => {

    const [clicked, setClicked] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [registerModalVisible, setRegisternModalVisible] = useState(false);


    const initialFormData = {
        username: "",
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
        <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : ''}`}>
            <div className="navbar_logo" onClick={toTheTop}>
                Lexcom
            </div>
            <Bars3Icon className="menu_icon" onClick={handleClick} />
            <ul className={(clicked && isScrolling > 20) ? "nav_menu active scrolling_bars_container active" :
                (clicked && isScrolling < 20) ? "nav_menu active" : "nav_menu"}>
                {NavbarItems.map((item, index) => (

                    <li key={index}>
                        <Link to={`#${item.id_}`} onClick={() => scrollToSection(item.id_)}
                            className="nav_links">
                            {item.title}
                        </Link>
                    </li>
                ))}
                <div className={clicked ? "button-container active" : "button-container"}>
                    <Button type="primary" onClick={showLoginModal}>Login</Button>
                    <Button type="primary" onClick={showRegisterModal}>Register</Button>
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
        </nav>
    );
}
export default Navbar;  