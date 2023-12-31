import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const{user,logOut}=useContext(AuthContext);
    const handelLogout =()=>{
        logOut()
        .then(()=>{

        })
        .catch(err=>{
            console.log(err);
            
        })
    }
    const links =<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About US</NavLink></li>
        <li><NavLink to="/category">Category</NavLink></li>
        {user&&
            <>
            <li><NavLink to="/Details">Details</NavLink></li>
              <li><NavLink to="/Blog">Blog</NavLink></li>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Event</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
               <div>
                    <button className="btn btn-primary">
                    <NavLink to="/SignUp">
                        Register
                    </NavLink>
                    </button>
                </div>
               <div>
                {
                    user? <>
                    <span className="">{user.email}</span>
                    <button onClick={handelLogout} className="btn btn-primary">
                    <NavLink to="/login">
                       Log Out
                    </NavLink>
                    </button>
                    
                    </>
                    :
                    <button  className="btn btn-primary">
                    <NavLink to="/login">
                        Login
                    </NavLink>
                    </button>
                    

                }
                   
                </div>
            </div>
            
            </div>
            
                    </div>
                );
};

export default Navbar;