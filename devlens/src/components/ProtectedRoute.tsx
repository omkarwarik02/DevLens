import type React from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

function ProtectedRoute({children}: {children:React.ReactNode}) {
    const [searchParams] = useSearchParams()
   const {token , login} = useAuth();

   const urlToken = searchParams.get('token');
   const urlName = searchParams.get('name');

   useEffect(()=> {
    if(urlToken && urlName){
        login(urlToken,urlName);
    }
   },[urlToken,urlToken])

   const isAuthed = token || urlToken;
   if(!isAuthed){
    return <Navigate to="/login" />
   }
    return children
}

export default ProtectedRoute
