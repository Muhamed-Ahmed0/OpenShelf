import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src={"/icons/logo.svg"} alt="logo" width={100} height={100} />
      </Link>
      <ul className="flex items-center gap-8">
        <li>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
            className="mb-10"
          >
            <Button>Logout</Button>
          </form>
          {/* <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className="bg-amber-100 font-extrabold">
                {getInitials(session?.user?.name || "UK")}
              </AvatarFallback>
            </Avatar>
          </Link> */}
        </li>
      </ul>
    </header>
  );
};

export default Header;
