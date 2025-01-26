import CreateUser from './admin/CreateUser.jsx';
import EditUser from './admin/EditUser.jsx';
import UserTable from './admin/UserTable.jsx';
import './App.css'
import { useAuthContext } from './context/AuthContext.jsx';
import Home from './pages/home/Home.jsx'
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
      <Route path="/users/edit/:id" element={<EditUser />} />
      <Route path="/user/create" element={<CreateUser />} />
      <Route path="/admin" element={<UserTable />} />

      </Routes>
    </div>
  )
}

export default App
