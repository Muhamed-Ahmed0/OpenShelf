import Image from "next/image";
import React, { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex gap-3">
            <Image src={"/icons/logo.svg"} alt="logo" width={57} height={57} />
            <h1 className="text-2xl font-semibold text-white">OpenShelf</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src={"/images/auth-illustration.jpg"}
          alt="auth-illustration"
          height={1000}
          width={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default layout;
