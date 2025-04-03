import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { set } from "react-hook-form";

const AuthContext = createContext();

const AuthProvider = ({Children})=> {
    const [isAuth, setIsAuth] = useState(false);  //Para saber si el usuario esta autenticado
    const [userpayload, setUserPayload] = useState(null); //Datos decodificados del JWT

    const login = (token) => {
        sessionStorage.setItem ('token', token); //Almacena el token en el sessionStorage
        const decode = jwtDecode(token); //Decodifica el token
        setUserPayload (decode); //Almacena el payload decodificado
        setIsAuth(true); //Actualiza el estado de autenticacion
    }

    const logout = () => {
        sessionStorage.removeItem ('token'); //Elimina el token del sessionStorage
        setuserPayload (null); //Borra el payload
        setIsAuth(false); //Actualiza el estado de autenticacion a falso
    }

    useEffect(()=> {
        const token = sessionStorage.getItem ('token')// //Obtiene el token del sessionStorage
        if (token) {
            const decode = jwtDecode(token); //Decodifica el token
            setUserPayload(decode); //Almacena el payload decodificado
            setIsAuth(true); //Actualiza el estado de autenticacion a verdadero
        }
    }, []); //Se ejecuta una vez al cargar el componente

    const data = {
        isAuth,
        userpayload,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {Children}
        </AuthContext.Provider>
    ) 
}

export {AuthContext, AuthProvider}; //Exporta el contexto y el proveedor