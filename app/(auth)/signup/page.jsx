"use client";

import AuthForm from "../authform";

export default function Signup() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log("user sign up", email, password);
  };

  return (
    <main>
      <h2 className="text-center">Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
