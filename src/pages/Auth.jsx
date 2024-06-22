import React, { useEffect, useState } from "react";
import "../styles/auth.css";

import Login from "../components/auth/Login";
import SingUp from "../components/auth/SingUp";
import authvalidation from "../hooks/auth";
import { useNavigate } from "react-router-dom";


function Auth() {
  const navigate = useNavigate()
  useEffect(()=>{
    const validaion = authvalidation("useracount");
    if(validaion){
      navigate("/")
    }
  })
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
