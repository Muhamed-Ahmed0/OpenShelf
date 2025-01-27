import React from "react";

const page = () => {
  return (
    <main className="root-container flex flex-col items-center justify-center min-h-screen ">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Hold Your Horses!
      </h1>
      <p className="mt-3 text-center max-w-xl text-light-400">
        You've been sending requests faster than a caffeinated squirrel! 🐿️ Our
        servers are catching their breath—please give them a moment to recharge.
        Thanks for your patience!{" "}
      </p>
    </main>
  );
};

export default page;
