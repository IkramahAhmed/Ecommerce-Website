//krna yeah he kay agar user ka role user he toh sirf usko user kay component dikhao jo hum nay app.jsx men proteced route say wrap karay hen user kay liay component or agr user ka role user nai hoga to navigate krdo login page pr

/* eslint-disable react/prop-types */
//agar koi bhe url men localhos/user-admin likhay ga toh woh direct navigate krdayga login pr kuon user login he nai he
//toh yhan localstorage say data lay kr check kr raha he agar user ka role user he toh tabhe dikhao user admin
import { Navigate } from "react-router"

export const ProtectedRouteForUser = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "user") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}