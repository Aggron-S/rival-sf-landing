import { Link } from "react-router-dom";
import {
  companyLogo,
  fbLogo,
  discordLogo,
  ytLogo,
  tiktokLogo,

  // Links
  fbUrl,
  discordUrl,
  ytUrl,
  tiktokUrl,
} from "../imports";

const SocialsWrapper = ({ url, children }) => {
  return (
    <Link to={url} className="relative flex justify-center items-center" target="_blank">
      {children}
      <div className="absolute bg-white opacity-10 p-[18px] hover:opacity-40 duration-200 ease-in-out rounded-2xl"></div>
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 pt-5 sm:pt-14 pb-7 bg-[#020202]">
      <div className="flex justify-center items-center gap-x-8 pb-7 sm:pb-10">
        {/* Facebook */}
        <SocialsWrapper url={fbUrl}>
          <img className="w-5" src={fbLogo} alt="Facebook" />
        </SocialsWrapper>

        {/* Discord */}
        <SocialsWrapper url={discordUrl}>
          <img className="w-5" src={discordLogo} alt="Discord" />
        </SocialsWrapper>

        {/* Youtube */}
        <SocialsWrapper url={ytUrl}>
          <img className="w-5" src={ytLogo} alt="Youtube" />
        </SocialsWrapper>

        {/* Tiktok */}
        <SocialsWrapper url={tiktokUrl}>
          <img className="w-5" src={tiktokLogo} alt="Tiktok" />
        </SocialsWrapper>
      </div>

      <Link to={"/"}>
        <img className="w-[100px] sm:w-[130px]" src={companyLogo} alt="Company Logo" />
      </Link>
      <p className="text-[10px] sm:text-xs text-[#ababab]">
        &copy; 2024 REBORN GAMES. ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
