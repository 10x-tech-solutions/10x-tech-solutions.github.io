import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    {name: "Home", href: "/"},
    {name: "About Us", href: "/about"},
    {name: "Meet the Team", href: "/meet"},
    {name: "Contact Us", href: "/contact"},
  ];

  return (
    <div className="relative">
      <Container>
        {/* <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5"> */}
        <div className="grid grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-5">
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0 justify-center">
              {navigation.map((item, index) => (
                // <Link key={index} href={item.href} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-emerald-500 focus:text-emerald-500 focus:bg-emerald-100 focus:outline-none dark:focus:bg-trueGray-700">
                <Link href={item.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-emerald-500 focus:text-emerald-500 focus:bg-emerald-100 focus:outline-none dark:focus:bg-gray-800">
                    {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener">
            Web3Templates.
          </a>{" "}
          Illustrations from{" "}
          <a
            href="https://www.glazestock.com/"
            target="_blank"
            rel="noopener ">
            Glazestock
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
      {/* <Backlink /> */}
    </div>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300">
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          width="30"
          height="29.5385"
          rx="2.76923"
          fill="#362F78"
        />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};
