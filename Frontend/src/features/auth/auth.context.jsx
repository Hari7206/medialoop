import { useState , useEffect , createContext } from "react";
import { login , register , getMe } from "./services/auth.api";




export const AuthContext = createContext()

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)



    async function handleLogin(username , password) {

        setLoading(true)
        try {
        const response = await login(username,password)
        setUser(response.user)
        return response
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)
        }
    }


     async function handleRegister(username , email , password ){
        setLoading(true)
        try {
            const response = register(username , email , password)
            setUser(response.user)
            return response
        } catch (error) {
                console.log(error);
                
        }
        finally{
            false
        }
     }



     return(

    <AuthContext.Provider  value={{user , handleRegister , handleLogin , loading}}> 
        {children}
        </AuthContext.Provider>
     )
}