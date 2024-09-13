"use client";

import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
import { useState } from "react";


export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <h1>Hello Auth</h1>
        Email:   <input type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
      /><br /> <br />

      Password:   <input type="password"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />
<br /> <br />
      <button onClick={
        () => { signupWithEmailPassword(email, password) }}
      >
        Signup
      </button>

      <br /> <br />

      <button onClick={
        () => { loginWithEmailPassword(email, password) }}
      >
        Login
      </button>

    </>
  );
}

