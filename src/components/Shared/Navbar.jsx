import Image from "next/image";
import Link from "next/link";
import React from "react";

import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    ,
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="bg-green-200 text-black">
      <nav className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              width={60}
              height={100}
              alt="logo"
              className="rounded-full"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex space-x-6 ">
            {navItems.map((item) => (
              <Link
                className="font-semibold duration-300 hover:text-primary"
                key={item.link}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <CiShoppingCart className="text-xl mr-4" />
          <CiSearch className="text-xl mr-4" />

          <Link
            href="/appointment"
            className="btn btn-primary btn-outline px-8"
          >
            Book now
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
