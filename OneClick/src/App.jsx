import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Signin from './sl/Signin'
import Applied from './components/Applied'
import Signup from './sl/Signup'
import Adhome from './admin/Adhome'
import Lpage from './sl/Lpage'
import Adnav from './admin/Adnav'
import Manage from './admin/Manage'
import Add from './admin/Add'
import Update from './admin/Update'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import JobApplicationForm from './components/JobApplicationForm'
import Home from './components/Home'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './AuthProvider'
import Adsignin from './sl/Adsignin.jsx'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: '250px'
        }
      }
    }
  }
})

function App() {
  const location = useLocation();

  // Define routes where no navbar should appear
  const noNavbarRoutes = ['/', '/signin', '/signup', '/adsignin'];

  // Check if the current path is an admin route (to conditionally render Adnav)
  const isAdminRoute = '/adhome';

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        {/* Conditionally render Navbar or Adnav based on the current route */}
        {!noNavbarRoutes.includes(location.pathname) && (
          isAdminRoute ? <Navbar /> : <Adnav />
        )}

        <Routes>
          <Route path='/update' element={<Update />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='/add' element={<Add />} />
          <Route path='/' element={<Lpage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/adsignin' element={<Adsignin />} />
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/appld' element={<Applied />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/adhome' element={<Adhome />} />
          <Route path='/apply' element={<JobApplicationForm/>}/>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App;
