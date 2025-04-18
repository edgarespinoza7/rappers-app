import React from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-6">
      <span className="font-bold text-2xl">50</span>
      <ul className="flex space-x-4 text-sm ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
