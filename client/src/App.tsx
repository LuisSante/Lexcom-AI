import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import RecoverPassword from './pages/RecoverPassword';
import ResetPassword from './pages/ResetPassword';
import Settings from './pages/Settings';
import Healtz from './pages/Healtz';
import PayWrapper from './pages/PayWrapper';
import Login from './components/components_login/Login';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/reset-password-form/:token" element={<ResetPassword />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pricing" element={<PayWrapper />} />
        <Route path="/test" element={<Healtz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
