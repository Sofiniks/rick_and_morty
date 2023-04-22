import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', {
                state: location.pathname
            })
        }, 1000)
    }, [location.pathname, navigate])
    return (
        <h1>Not found</h1>
    )
}