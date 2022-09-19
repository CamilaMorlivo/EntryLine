import { createContext, useContext, useState } from "react";

export const LoginContext = createContext()

const usuarios = [
    {
        email: 'abc@abc.com',
        password: '1234'     
    },
    {
        email: 'coder@house.com',
        password: '1234'     
    },
    {
        email: 'morlivo@gmail.com',
        password: 'gmail'     
    }
]

export const LoginProvider = ({children}) =>{

    const [user, setUser] = useState({
        user: 'morlivo@gmail.com',
        logged: true,
        error: ''
    })

    const logout = () => {
        setUser({
            user: '',
            logged:false,
            error: ''
        })
    }

    

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)
        
        if (match) {
            if (match.password === values.pass){
                setUser({
                    user: match.email,
                    logged: true,
                    error: ''
                })
            } else {
                setUser({
                    user: match.email,
                    logged: false,
                    error: "Password incorrect"
                })
            } 
        }else{
            setUser({
                user: match.email,
                logged: false,
                error: "Email incorrecto"
            })
        }
    }

    

    return(
        <LoginContext.Provider value={{
            user,
            login,
            logout
        }}>

            {children}

        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}

