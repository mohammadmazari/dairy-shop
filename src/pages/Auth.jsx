import React, { useState } from "react";
import "../styles/auth.css";

import Login from "../components/auth/Login";
import SingUp from "../components/auth/SingUp";

function Auth() {
  const [showform, setshowform] = useState(1);
  return (
    <div className="auth">
      {showform === 1 ? (
        <SingUp setshowform={setshowform} />
      ) : (
        <Login setshowform={setshowform} />
      )}
    </div>
  );
}

export default Auth;
