import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-start justify-between">
        <Link href={"/"}>Blog</Link>
        <div className="flex gap-2">
          <Link href={"/create"}>create</Link>
          <Link href={"/login"}>login</Link>
          <Link href={"/saved"}>savd</Link>
          <Link href={"/register"}>register</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
