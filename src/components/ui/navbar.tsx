import React from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between mt-4">
      <div>
        <span className="font-bold text-2xl">50</span>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4 text-sm mr-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
