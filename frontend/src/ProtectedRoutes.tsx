import { Navigate, Outlet } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import useAuthStore from './store/authStore';
import AdminSidebar from './components/AdminSidebar';

const ProtectedRoutes = () => {
    const { isAuthenticated } = useAuthStore()
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'

    if (!isAuthenticated && !isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    return (
        <div>
            <AdminHeader />
            <div className="admin-content">
                <AdminSidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default ProtectedRoutes;
