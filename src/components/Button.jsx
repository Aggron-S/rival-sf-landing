import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, link }) => {
  return (
    <Link
      to={link}
      className="border-2 border-[#e2e8f0] button-text button-hover py-2 px-4"
      target="_blank">
      {name}
    </Link>
  );
};

export default Button;
