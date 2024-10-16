
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

import lexcom from '../assets/lexcom.svg';
import close from '../assets/close.svg'
import hamburger from '../assets/hambuger.svg'
import { ItemsProps } from '../interface/home';

export const Header = ({
    items
}: ItemsProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const handleRegister = () => {
        navigate('/auth')
    }

    return (
        <header className="top-0 left-0 z-50 fixed w-full max-w-full h-24">
            <nav
                className={`bg-black flex items-center`}
            >
                <div className="flex justify-center items-center w-full lg:w-auto">
                    <div className="pr-9 md:pl-32 h-full max-h-20 cursor-pointer" onClick={toTheTop}>
                        <img src={lexcom} alt="Lexcom lexcom" />
                    </div>

                    <div className="lg:hidden">
                        <div onClick={toggleMenu} className="flex items-center bg-white hover:bg-gray-300 p-1 rounded-md">
                            {isMenuOpen ? (
                                <img src={close} />
                            ) : (
                                <img src={hamburger} />
                            )}
                        </div>
                    </div>
                </div>

                <div className={`lg:flex items-center ${isMenuOpen ? 'block' : 'hidden'} absolute top-20 gap-x-0 w-full bg-black lg:static lg:w-full justify-center`}>
                    <ul className="flex lg:flex-row flex-col items-center gap-y-4 lg:gap-x-7 p-4 lg:p-0 text-lg list-none">
                        {items.map((item, index) => (
                            <li key={index} className="w-full lg:w-auto">
                                <Link
                                    to={`#${item.id_}`}
                                    onClick={() => scrollToSection(item.id_)}
                                    className="block hover:bg-white px-6 py-2 rounded-xl text-center text-white hover:text-black no-underline"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li className="mt-4 lg:mt-0 w-full lg:w-auto">
                            <button
                                className="border-2 border-white bg-transparent hover:bg-white px-4 border-solid rounded-3xl w-full lg:max-w-36 h-11 font-poppins text-lg text-white hover:text-black transition-colors duration-200 cursor-pointer"
                                onClick={handleRegister}
                            >
                                Unirse
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}