import type React from "react";
import { Navigate, useSearchParams } from "react-router-dom";

function ProtectedRoute({children}: {children:React.ReactNode}) {
    const [searchParams] = useSearchParams()
    const urlToken = searchParams.get('token')

    if(urlToken){
        localStorage.setItem('token', urlToken)
    }

    const token = urlToken || localStorage.getItem('token')

    if(!token){
        return <Navigate to="/login"/>
    }
    return children
}

export default ProtectedRoute
