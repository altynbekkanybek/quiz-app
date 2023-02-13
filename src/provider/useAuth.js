import { AuthContext } from "../context/AuthContext";
import React from "react";


export  const useAuth = () => React.useContext(AuthContext)