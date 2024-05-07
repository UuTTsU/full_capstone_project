import React, { useState } from 'react'
import useAuthStore from '../store/authStore'
import { useNavigate } from 'react-router-dom'

function AdminLoginForm() {
    const {setIsAuthenticated} = useAuthStore()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (username.trim() !== '' && password.trim() !== '') {
            setIsAuthenticated(true)
            sessionStorage.setItem('isLoggedIn', 'true')
            navigate('/admin/bestSellers')
        } else {
            console.log("Invalid credentials")
        }
    }

  return (
    <form action="" id="admin-login-form" onSubmit={(e) => handleLogin(e)}>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
    </form>
  )
}

export default AdminLoginForm