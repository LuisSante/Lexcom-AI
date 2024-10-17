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

    return (
        <div className='mx-auto w-full md:w-11/12 lg:w-10/12'>
            <div className='w-full'>
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


