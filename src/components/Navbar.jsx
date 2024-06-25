import { Link } from "react-router-dom";
import { navLogo } from "../constants";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-8">
      <Link to={"/"}>
        <img
          className="w-auto"
          src={navLogo}
          alt="Site Logo"
        />
      </Link>

      {/* Fix this tom, make it a link */}
      <div className="flex justify-center items-center gap-x-2 pr-4">
        <Link to={""} className="px-3 py-2">Login</Link>
        <Link to={""} className="px-3 py-2">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
