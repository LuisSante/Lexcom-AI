import './App.css'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import How_work from './pages/How_work';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight]);


  return (
    <>
      <Navbar isScrolling={scrollHeight} />
      <How_work/>
    </>
  )
}

export default App
