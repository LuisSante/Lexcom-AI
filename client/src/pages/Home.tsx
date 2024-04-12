import '../css/styles_home/home.css'
import { useEffect, useState } from 'react';
import Navbar from '../components/components_home/Navbar';
import How_work from '../components/components_home/How_work';
import Services from '../components/components_home/Services';
import Faq from '../components/components_home/FAQ';
import About from '../components/components_home/About';
import Welcome from '../components/components_home/Welcome';
import ForYou from '../components/components_home/ForYou';
import Amazing from '../components/components_home/Amazing';


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
            <div>
                <Welcome></Welcome>
                <How_work id="howork" />
                <Services id="services" />
                <ForYou/>
                <Faq id="faq"></Faq>
                <Amazing/>
                <About id='about' />
            </div>
        </div>
    )
}

export default Home;


