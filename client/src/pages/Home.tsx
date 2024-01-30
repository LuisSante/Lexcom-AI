import '../css/styles_home/home.css'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import How_work from '../components/components_home/How_work';
import Services from '../components/components_home/Services';
import Faq from '../components/components_home/FAQ';
import About from '../components/components_home/About';


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
