import { Button } from "antd";
import { NavbarItems } from "./logic/NavbarItems";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import '../css/navbar.css'
import { Link } from 'react-router-dom';

interface NavbarProps {
    isScrolling: number;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolling }) => {

    const [clicked, setClicked] = useState(false);

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
                        <Link to={item.url} onClick={() => scrollToSection(item.id_)}
                            className="nav_links">
                            {item.title}
                        </Link>
                    </li>
                ))}
                <div className={clicked ? "button-container active" : "button-container"}>
                    <Button type="primary">Login</Button>
                    <Button type="primary">Registrer</Button>
                </div>
            </ul>
        </nav>
    );
}
export default Navbar;  