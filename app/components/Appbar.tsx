"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Appbar() {
  const sesssion = useSession();
  return (
    <div>
      {JSON.stringify(sesssion)}
      <button onClick={() => signIn()}> SignIn </button>
      <button onClick={() => signOut()}> logout </button>
    </div>
  );
}

export default Appbar;
