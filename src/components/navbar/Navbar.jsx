import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  console.log(user);


  //cartItem
  const cartItems =useSelector((state)=> state.cart)
  //navigate logout and clear the localstorage when user clik the logout button
  const navigate = useNavigate();

  const logout =()=>{
    localStorage.clear('users');
    navigate('/login')
  }
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>

      {/* Signup */}

      {/* If there's no user logged in, show a link to sign up. Otherwise, don't show anything."

 */}
      {!user ? <li>
        <Link to={"/signup"}>Signup</Link>
      </li> : ""}
      
 {/* login */}
 {!user ? <li>
        <Link to={"/login"}>login</Link>
      </li> : ""}

      {/* User */}
      {/* agar user ka role user hoto yeah chl jae */}

      {user?.role === 'user' &&
      <li>
        <Link to={"/user-dashboard"}>{user?.name}</Link>
      </li>
      }
      
{/* agar user ka role admin hoto yeah chl jae */}
      {/* Admin */}
      {user?.role === 'admin' &&
      <li>
        <Link to={"/admin-dashboard"}>{user?.name}</Link>
      </li>
      }

      {/* logout */}
      {user &&   <li className="cursor-pointer" onClick={logout}>
                logout
            </li>}
    

      {/* Cart */}
      <li>
        <Link to={"/cart"}>Cart({cartItems.length})</Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-pink-200 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              E-Commerce
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
