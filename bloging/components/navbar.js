import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-start justify-between">
        <Link href={"/"}>Blog</Link>
        <div className="flex gap-2">
          <Link href={"/profile"}>profile</Link>
          <Link href={"/create"}>create</Link>
          <Link href={"/logout"}>logOut</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
