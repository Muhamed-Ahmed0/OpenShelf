"use client";
import AuthForm from "@/components/AuthForm";
import { signIn_schema } from "@/constants/validations";
import { SignInWithCredentials } from "@/lib/actions/auth";
import React from "react";

const page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signIn_schema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={SignInWithCredentials}
  />
);

export default page;
