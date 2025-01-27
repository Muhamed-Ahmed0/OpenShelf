"use client";
import AuthForm from "@/components/AuthForm";
import { signUp_schema } from "@/constants/validations";
import { signUp } from "@/lib/actions/auth";
import React from "react";

const page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUp_schema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={signUp}
  />
);

export default page;
