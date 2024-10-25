import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;
  return (
    <nav className="flex flex-1 justify-between items-start navbar">
      <Link href="/">
        <Image src="./logo.svg" width={115} height={43} alt="Flexibble" />
      </Link>
      <ul className="2xl:flex hidden text-small gap-7">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.text}
          </Link>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-4">
        {session ? (
          <>
            userphoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
