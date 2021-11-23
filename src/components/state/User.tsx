import { useState } from "react"

type AuthUser = {
    name:string,
    email:string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)

     const handleLogin = () => {
         setUser({
             name: 'richard',
             email:'ric@gmail.com'
         })
    }
  

    return (
        <div>
           <button onClick={handleLogin}>Login</button>
           <div>User is name {user.name}</div>
           <div>User is email{user.email}</div>
        </div>
    )
}
