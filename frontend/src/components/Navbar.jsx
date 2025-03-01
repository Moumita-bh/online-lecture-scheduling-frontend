import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/admin">Admin Panel</Link></li>
        <li><Link to="/instructor">Instructor Panel</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
