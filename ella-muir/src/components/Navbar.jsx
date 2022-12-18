import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
        <div className="dropdown">
  <button className="dropbtn">/// Menu</button>
  <ul className="dropdown-content">
    <li><Link to="/about">About me</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/experience">Experience</Link></li>
    <li><Link to="/education">Education</Link></li>
    <li><Link to="/technicalskills">Technical Skills</Link></li>
    <li><Link to='/projects'>Projects</Link></li>
  </ul>
</div>
<Link className='home' to="/">Home</Link>
</nav>
            
    )
}