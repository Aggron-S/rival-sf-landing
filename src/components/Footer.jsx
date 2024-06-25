import { Link } from "react-router-dom";
import { companyLogo } from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-8 bg-[#020202]">
      <div className="flex justify-center items-center">
        {/* Facebook */}
        <Link to={"/"}>
          <img
            className="w-auto"
            src={companyLogo}
            alt="Facebook"
          />
        </Link>

        {/* Discord */}
        <Link to={"/"}>
          <img
            className="w-auto"
            src={companyLogo}
            alt="Discord"
          />
        </Link>

        {/* Youtube */}
        <Link to={"/"}>
          <img
            className="w-auto"
            src={companyLogo}
            alt="Youtube"
          />
        </Link>

        {/* Tiktok */}
        <Link to={"/"}>
          <img
            className="w-auto"
            src={companyLogo}
            alt="Tiktok"
          />
        </Link>
      </div>

      <Link to={"/"}>
        <img
          className="w-auto"
          src={companyLogo}
          alt="Company Logo"
        />
      </Link>
      <p className="text-xs text-[#ababab]">&copy; 2024 REBORN GAMES. ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer;
