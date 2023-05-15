import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";


// function Navbar() {
//   const [expandNavbar, setExpandNavbar] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     setExpandNavbar(false);
//   }, [location]);

//   return (
//     <div className="navbar" id={expandNavbar ? "open" : "close"}>
//       <div className="toggleButton">
//         <button
//           onClick={() => {
//             setExpandNavbar((prev) => !prev);
//           }}
//         >
//           {/* <ReorderIcon /> */}
//         </button>
//       </div>
//       <div className="links">
//         <Link to="/"> Home </Link>
//         <Link to="/projects"> Projects </Link>
//         <Link to="/experience"> Experience </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



const Navbar = () => {

  return (
<nav class="navbar navbar-expand-md  position-fixed top-0 start-0 end-0 ">
  <div class="container-fluid">
  <a class="navbar-brand text-warning  " style={{marginLeft:'2rem'}} href="">devJayita.</a>

    <button class="navbar-toggler text-white dropdown-nav-menuBarBtn ms-auto  " type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false">
      <i class="bi bi-list"></i>
    </button>
    <div class="collapse navbar-collapse  " id="navbarNavAltMarkup">
        <ul class="navbar-nav ms-auto ">
        <li ><NavLink exact activeClassName="active" to="/" ><span className=" d-md-none"  data-bs-target="#navbarNavAltMarkup" data-bs-toggle="collapse">Home</span></NavLink>
            <NavLink exact activeClassName="active" to="/" ><span className="d-none d-md-block">Home</span></NavLink></li>
        <li ><NavLink  activeClassName="active" to="/projects" ><span className=" d-md-none"  data-bs-target="#navbarNavAltMarkup" data-bs-toggle="collapse">Projects</span></NavLink>
            <NavLink  activeClassName="active" to="/projects" ><span className="d-none d-md-block">Projects</span></NavLink></li>
        <li ><NavLink  activeClassName="active" to="/experience"><span className=" d-md-none"  data-bs-target="#navbarNavAltMarkup" data-bs-toggle="collapse">Experiences</span></NavLink>
            <NavLink  activeClassName="active" to="/experience" ><span className="d-none d-md-block">Experiences</span></NavLink></li>
        </ul>
      <button className='navbar-toggler text-white dropdown-nav-closeNavBtn' type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" >
            <i class="bi bi-x-lg"></i>
            </button>
    </div>
  </div>
</nav>

  )
}

export default Navbar
