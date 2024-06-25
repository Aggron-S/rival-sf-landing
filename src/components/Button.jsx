import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  // Define a constant class name based on the action
  const buttonStyle = "bg-slate-50 py-2 px-4";

  return (
    <Link
      to="/"
      className="border-2 border-[#e2e8f0] button-hover text-xl py-2 px-4">
      {name}
    </Link>
  );
  // return (
  //   <>
  //     {action === "link" ? (
  //       <Link to="/somewhere" className={buttonStyle}>
  //         {name}
  //       </Link>
  //     ) : action === "function" ? (
  //        // Some button you want to add
  //       <button onClick={() => console.log("Button clicked")} className={buttonStyle}>
  //         {name}
  //       </button>
  //     ) : (
  //       console.log("You can only use 'link' to direct to a certain link or 'function' if you want to execute a function");
  //     )}
  //   </>
  // );
};

export default Button;
