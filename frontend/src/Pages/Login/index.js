import React, { useState } from "react";

import api from "../../services/api";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    let session = await api.post("sessions", {
      email
    });

    const { _id } = session.data;

    localStorage.setItem("user", _id);
  };

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para progamadores e encontre{" "}
        <strong>talentos</strong> para sua empresa.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
};

export default Login;
