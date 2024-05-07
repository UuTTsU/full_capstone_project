import React from 'react' 
import Header from '../components/Header' 
import AdminLoginForm from '../components/AdminLoginForm'
import '../assets/styles/AdminDashboard.css'
import BackImg from '../assets/img/hero-banner.png'

function AdminLogin() {

  return (
    <div>
      <Header />
      <div className="login-back">
        <AdminLoginForm />
      </div>
    </div>
  ) 
}

export default AdminLogin
