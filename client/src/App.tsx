import './App.css'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import How_work from './pages/How_work';
import Services from './pages/Services';
import Faq from './pages/FAQ';
import About from './pages/About';
import { BrowserRouter } from 'react-router-dom';


function App() {
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
    <>
      <div className='position-pages'>
        <BrowserRouter>
          <Navbar isScrolling={scrollHeight} />
          <How_work id="howork" />
          <Services id="services" />
          <Faq id="faq"></Faq>
          <About id='about' />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
