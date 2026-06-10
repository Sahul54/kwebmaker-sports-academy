"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../common/Container";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-white">
      {/* Main Footer */}
      <Container>
        <div className="py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-34">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start shrink-0">
              <Image
                src="/logo.png"
                alt="SSA Logo"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              
              {/* Navigation */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 lg:gap-y-6 gap-x-6 text-sm md:text-base">
                <Link href="/about-us" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  About Us
                </Link>

                <Link href="/coaches" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  Coaches
                </Link>

                <Link href="/news" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  News
                </Link>

                <Link href="/matches" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  Matches
                </Link>

                <Link href="/events" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  Events
                </Link>

                <Link href="/faqs" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  FAQs
                </Link>

                <Link href="/programs" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  Programs
                </Link>

                <Link href="/amenities" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  Amenities
                </Link>

                <Link href="/blogs" className="text-black hover:text-[#95b80d] transition cursor-pointer">
                  Blogs
                </Link>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6 lg:my-8" />

              {/* Bottom Content */}
              <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
                
                {/* Contact */}
                <div>
                  <h3 className="text-[#95b80d] text-xl lg:text-2xl font-medium mb-5">
                    Signature Slam Academy
                  </h3>

                  <p className="text-base lg:text-md text-black mb-5">
                    30 Wills Hill Road, Lovedale, NSW
                  </p>

                  <div className="space-y-2 text-sm lg:text-base">
                    <div className="flex items-center gap-3">
                      <FiPhone
                        size={18}
                        className="text-black shrink-0"
                      />
                      <span className="text-black">+91 5642589752</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiMail
                        size={18}
                        className="text-black shrink-0"
                      />
                      <span className="text-black">
                        info@ssagroup.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="md:text-right">
                  <h3 className="text-[#95b80d] text-xl lg:text-2xl font-medium mb-5">
                    Connect With Us
                  </h3>

                  <div className="flex md:justify-end items-center gap-5">
                    <Link
                      href="#"
                      className="text-black cursor-pointer"
                    >
                      <FaFacebookF size={20} />
                    </Link>

                    <Link
                      href="#"
                      className="text-black cursor-pointer"
                    >
                      <FaXTwitter size={20} />
                    </Link>

                    <Link
                      href="#"
                      className="text-black cursor-pointer"
                    >
                      <FaInstagram size={20} />
                    </Link>

                    <Link
                      href="#"
                      className="text-black cursor-pointer"
                    >
                      <FaYoutube size={20} />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#003b63] via-[#195a4c] to-[#9cc10b]">
        <Container>
          <div className="py-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white text-xs md:text-sm">
              
              <Link
                href="/terms-and-conditions"
                className="hover:text-white/80 transition"
              >
                Terms & Conditions
              </Link>

              <p className="text-center">
                © 2025 All Rights Reserved
                <span className="hidden md:inline">
                  {" "}www.signatureslamacademy.com
                </span>

                <span className="block md:hidden">
                  www.signatureslamacademy.com
                </span>
              </p>

              <Link
                href="/privacy-policy"
                className="hover:text-white/80 transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}