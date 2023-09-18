"use client";

import AuthForm from "../authform";

export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log("user log in", email, password);
  };

  return (
    <main>
      <h2 className="text-center">Log in</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
