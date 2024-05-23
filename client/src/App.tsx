import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import RecoverPassword from './pages/RecoverPassword';
import ResetPassword from './pages/ResetPassword';
import Settings from './pages/Settings';
import Healtz from './pages/Healtz';
import Pay from './components/components_dashboard/Pay';
import Success from './pages/Success';
import Failure from './pages/Failure';
import Pendings from './pages/Pending';

const App: React.FC = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/reset-password-form/:token" element={<ResetPassword />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pricing" element={<Pay />} />
        <Route path="/test" element={<Healtz />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/pending" element={<Pendings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
