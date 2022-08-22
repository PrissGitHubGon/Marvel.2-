import React from "react";
// ** Hooks **
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// ** Dependencies
import axios from "axios";
import Cookies from "js-cookie";
import Input from "../components/Input";

function Register(props) {
  const { tokenPresent, setTokenPresent } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        name: name,
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://marvel-students.herokuapp.com/signup",
        data
      );

      const token = await response.data.token;

      Cookies.set("bearerToken", token, { expires: 360 });

      setTokenPresent(!tokenPresent);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="mb-6 px-10 md:px-20 lg:px-80  pt-10 ">
        <h2 className="text-5xl text-center fontFamily pb-10">Inscription</h2>
      </div>
      <form>
        <Input
          type={"text"}
          placeholder={"Entrez votre nom"}
          value={name}
          setValue={setName}
          icon={"🦸‍♀️"}
          label={"Nom d'utilisateur"}
        />
        <Input
          type={"email"}
          placeholder={"email@hotmail.fr"}
          value={email}
          setValue={setEmail}
          icon={"📧"}
          label={" Votre e-mail"}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          icon={"🔐"}
          label={" Votre mot de passe"}
        />

        <div className="px-10 md:px-20 lg:px-80">
          <button
            type="submit"
            onClick={onSubmit}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
