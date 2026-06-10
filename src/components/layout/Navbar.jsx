"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "../common/Container";
import Button from "../common/Button";

import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Coaches", href: "#coaches" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-4 left-0 w-full z-50">
        <Container>
          <div
            className="
              flex
              items-center
              justify-between
              h-[70px]
              md:h-[82px]
              px-4
              md:px-6
              rounded-full
              border border-white/10
              bg-white
            "
          >
            {/* Logo */}
            <Link href="/">
              <div className="cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="SSA Academy"
                  width={150}
                  height={60}
                  priority
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-10">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="
                        text-black
                        font-medium
                        text-sm
                        tracking-wide
                        relative
                        transition-all
                        duration-300
                        hover:text-[#d8ef6b]
                        after:absolute
                        after:left-0
                        after:-bottom-2
                        after:h-[2px]
                        after:w-0
                        after:bg-[#d8ef6b]
                        after:transition-all
                        after:duration-300
                        hover:after:w-full
                      "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Button href="/contact" className="text-white">
                  Join Now
                </Button>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-white"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[300px]
          bg-black/95
          backdrop-blur-xl
          z-[60]
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Image
            src="/logo.png"
            alt="SSA Academy"
            width={120}
            height={50}
            className="h-10 w-auto object-contain"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-6">
          <ul className="space-y-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-white
                    text-lg
                    font-medium
                    hover:text-[#d8ef6b]
                    transition-all
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              href="/contact"
              className="w-full justify-center"
            >
              Join Now
            </Button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed
            inset-0
            bg-black/50
            z-50
          "
        />
      )}
    </>
  );
}