import React, { useState } from 'react';
import { json, Link } from 'react-router-dom';

export const SignUpCheck = () => {
  const [isLogged, setIsLogged] = useState(undefined);

  const postUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const usernameInput = event.target.username;
    const emailInput = event.target.email;
    const passwordInput = event.target.password;

    const username: string = usernameInput.value;
    const email: string = emailInput.value;
    const password: string = passwordInput.value;

    const formResult = {
      name: username,
      email: email,
      password: password,
    };

    const jsonResult = JSON.stringify(formResult);

    await fetch('http://localhost:3003/auth/signup', { method: 'PUT', body: jsonResult });
  };

  return (
    <>
      {isLogged === true && <div>Your are already logged</div>}

      <form
        onSubmit={(e) => {
          postUser(e);
        }}
      >
        <div className="space-y-4">
          <input
            type="username"
            name="username"
            placeholder="Username"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-3 w-64 text-xl text-white bg-black hover:text-black hover:bg-white duration-300 rounded-2xl"
          >
            Sign Up
          </button>
        </div>
        <div className="text-end mt-6 flex flex-row justify-end">
          <Link to={'../login'}> LogIn</Link>
        </div>
      </form>
    </>
  );
};
