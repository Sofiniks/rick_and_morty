import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export function PrivateRoute({children}) {
    const location = useLocation();

    const auth = useAuth();
    if(auth.user === null) {
        return <Navigate to="/login" state={{from: location.pathname}} replace/>
    }
    return children
}