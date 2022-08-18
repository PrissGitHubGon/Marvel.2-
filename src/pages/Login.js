import React from "react";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="mb-6 px-10 md:px-20 lg:px-80  pt-10">
        <h2 className="text-5xl text-center fontFamily">Connexion</h2>
      </div>
      <form>
        <div class="mb-6 px-10 md:px-20 lg:px-80  ">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Votre e-mail
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-teal-700 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 text-xl">
              📧
            </span>
            <input
              type="email"
              id="email"
              class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email@hotmail.fr"
            />
          </div>
        </div>
        <div class="mb-6 px-10 md:px-20 lg:px-80  ">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Votre mot de passe
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-teal-600 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 text-xl">
              🔐
            </span>
            <input
              type="password"
              id="password"
              class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
        </div>

        <div className="px-10 md:px-20 lg:px-80">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
