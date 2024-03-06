import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import RecoverPassword from './pages/RecoverPassword';
// import Product from './pages/Product';


const App: React.FC = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
