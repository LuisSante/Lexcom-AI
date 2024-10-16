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
import { TransitionX, TransitionY } from '../components/Section';

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
        <div className=''>
            <div className='position-pages'>
                <Navbar />
                <div>
                    <TransitionY>
                        <Welcome />
                    </TransitionY>
                    <TransitionX>
                        <How_work id="howork" />
                    </TransitionX>
                    <TransitionY>
                        <Services id="services" />
                    </TransitionY>
                    <TransitionX>
                        <ForYou />
                    </TransitionX>
                    <TransitionY>
                        <Faq id="faq"></Faq>
                    </TransitionY>
                    <TransitionX>
                        <Amazing />
                    </TransitionX>
                    <TransitionY>
                        <About id='about' />
                    </TransitionY>
                </div>
            </div>
        </div>
    )
}

export default Home;


