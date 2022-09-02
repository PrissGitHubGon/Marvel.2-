import React from "react";

import Input from "../components/Input";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="mb-6 px-10 md:px-20 lg:px-80  pt-10 ">
        <h2 className="text-5xl text-center fontFamily pb-10">Inscription</h2>
      </div>
      <form>
        <Input
          type={"text"}
          placeholder={"Entrez votre nom"}
          icon={"🦸‍♀️"}
          label={"Nom d'utilisateur"}
        />
        <Input
          type={"email"}
          placeholder={"email@hotmail.fr"}
          icon={"📧"}
          label={" Votre e-mail"}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          icon={"🔐"}
          label={" Votre mot de passe"}
        />

        <div className="px-10 md:px-20 lg:px-80">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
