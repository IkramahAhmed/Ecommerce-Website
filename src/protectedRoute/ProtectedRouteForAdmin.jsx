//krna yeah he kay agar user ka role user he toh sirf usko user kay component dikhao jo hum nay app.jsx men proteced route say wrap karay hen user kay liay component or agr user ka role user nai hoga to navigate krdo login page pr         
/* eslint-disable react/prop-types */


import { Navigate } from "react-router"

export const ProtectedRouteForAdmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "admin") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}
