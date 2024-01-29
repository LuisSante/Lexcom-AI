import '../css/home.css'
// import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import How_work from './How_work';
import Services from './Services';
import Faq from './FAQ';
import About from './About';


const Home: React.FC = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollHeight]);


    return (
        <div className='position-pages'>
            <Navbar isScrolling={scrollHeight} />
            <How_work id="howork" />
            <Services id="services" />
            <Faq id="faq"></Faq>
            <About id='about' />
        </div>
    )
}

export default Home;
