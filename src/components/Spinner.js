import React from "react";

function Spinner(props) {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center pt-60">
      <div className="continuous-4  text-center text-md">{props.title}</div>
    </div>
  );
}

export default Spinner;
