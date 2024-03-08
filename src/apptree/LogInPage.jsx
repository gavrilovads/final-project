import React, { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";

const LoginPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const setAdmin = (value) => {
    setIsAdmin(value);
  };
  return (
    <div className="login-page single-page">
      <Header />
      <LoginForm setAdmin={setAdmin} />
      <Footer />
    </div>
  );
};

export default LoginPage;
