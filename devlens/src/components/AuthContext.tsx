import { createContext, useContext, useState } from 'react';


interface AuthContextType {
    token:string | null;
    name:string | null;
    login:(newToken:string, newName:string)=>void;
    logout:()=>void;
}

const AuthContext = createContext<AuthContextType| null>(null);

export function AuthProvider({ children }){
    const [token,setToken] = useState(()=>localStorage.getItem('token'));
    const [name,setName] = useState(()=>localStorage.getItem('name'));

    const login = (newToken,newName) =>{
        localStorage.setItem('token', newToken);
          localStorage.setItem('name', newName);
          setToken(newToken)
          setName(newName);
    }
     const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setToken(null);
    setName(null);
  };
  return (
  <AuthContext.Provider value={{ token, name, login, logout }}>
    {children}
  </AuthContext.Provider>
);
}
export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useauth must be used within an authProvider');
    }
    return context;
}