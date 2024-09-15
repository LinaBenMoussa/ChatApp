import './App.css'
import { useAuthContext } from './context/AuthContext.jsx';
import Home from './pages/home/home.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const {authUser}=useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Toaster/>
      <Routes>
      <Route path='/'  element={!authUser? <Navigate to='login' />:<Home />} />
      <Route path='login' element={authUser? <Navigate to='/' />:<Login />} />
      <Route path='signup' element={authUser? <Navigate to='/' />:<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
