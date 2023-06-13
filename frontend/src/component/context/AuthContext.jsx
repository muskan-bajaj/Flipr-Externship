import React, { useState, useMemo } from "react";

export const AuthContext = React.createContext({
  designation: "",
  // isLoggedIn: "",
  email: "",
  userID: "",
});

export const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [designation, setDesignation] = useState("");
  //   const [onLogin, setOnLogin] = useState(false);
  //   const [userID, setUserID] = useState("");
  //   const [fields, setFields] = useState([{}]);
  //   const [notices, setNotices] = useState([]);

  const login = (designation, email, userID) => {
    localStorage.setItem("access", designation);
    // localStorage.setItem("isLoggedIn", isloggedIn);
    localStorage.setItem("email", email);
    localStorage.setItem("id", userID);
  };

  const contextValue = useMemo(
    () => ({
      login: login,
      loggedIn: loggedIn,
      setLoggedIn: setLoggedIn,
      designation: designation,
      setDesignation: setDesignation,
      //   userID: userID,
      //   setUserID: setUserID,
      //   onLogin: onLogin,
      //   setOnLogin: setOnLogin,
      //   fields: fields,
      //   setFields: setFields,
      //   notices: notices,
      //   setNotices: setNotices,
    }),
    [loggedIn, setLoggedIn, designation, setDesignation]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
