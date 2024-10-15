"use client";
import { useState } from "react";
const PasswordInput = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="pass-box d-center position-relative">
      <input
        type={`${hidden ? "password" : "text"}`}
        id="loginpassword"
        placeholder="Enter your Password"
      />
      <i
        onClick={() => setHidden(!hidden)}
        className="material-symbols-outlined show-hide-pass position-absolute end-0 pe-4">
        {hidden ? "visibility" : "visibility_off"}
      </i>
    </div>
  );
};

export default PasswordInput;
