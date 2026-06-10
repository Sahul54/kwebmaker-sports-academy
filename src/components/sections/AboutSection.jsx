"use client";

import { useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import AboutImageGrid from "../cards/AboutImageGrid";
import Link from "next/link";

import {
  aboutStats,
  aboutTabs,
} from "@/data/about";
import VerticalLines from "../common/VerticalLines";

export default function AboutSection() {
  const [activeTab, setActiveTab] =
    useState("About Us");

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#f8f8f8]
        py-24
        lg:py-32
      "
    >
      {/* Vertical Lines */}
      <VerticalLines />

      {/* Decorative Letter */}
      <div
        className="
          hidden
          xl:block
          absolute
          left-[-50px]
          top-[-30px]
          z-0
        "
      >
        <h2
          className="
            text-[520px]
            leading-none
            font-black
            text-[#dce8a8]
            opacity-60
          "
        >
          A
        </h2>
      </div>

      <Container className="relative z-10">
        {/* Intro Text */}

        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="
              text-xl
              md:text-2xl
              lg:text-2xl
              font-medium
              leading-relaxed
              text-gray-900
            "
          >
            To be the first venue in the world to have{" "}
            <span className="text-[#99bf38] font-bold">
              60 multi surface courts
            </span>{" "}
            at one location and establish first one stop
            tennis academy in the Asia Pacific producing
            grand slam champions.
          </h2>
        </div>

        {/* Tabs */}

        <div className="mt-12 mb-12 md:mt-20 md:mb-20">
          <div
            className="
            flex
            items-center
            justify-start md:justify-center
            gap-6 md:gap-14
            overflow-x-auto
            scrollbar-hide
            whitespace-nowrap
            px-4
          "
          >
            {aboutTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
          relative
          text-base sm:text-lg md:text-xl
          font-bold
          pb-3
          transition-all
          duration-300
          shrink-0
          ${activeTab === tab
                    ? "text-black"
                    : "text-gray-300"
                  }
        `}
              >
                {tab}

                {activeTab === tab && (
                  <span
                    className="
              absolute
              left-0
              bottom-0
              h-[2px]
              w-full
              bg-[#99bf38]
            "
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}

          <div>
            <h3
              className="
                text-4xl
                lg:text-5xl
                font-bold
                mb-8
                text-gray-900
              "
            >
              About Us
              <span className="text-[#99bf38]">
                .
              </span>
            </h3>

            <p
              className="
                text-gray-700
                leading-relaxed
                max-w-xl
              "
            >
              To be the first venue in the world to have
              60 multi surface courts at one location and
              establish first one stop tennis academy in
              the Asia Pacific producing grand slam
              champions.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
              {aboutStats.map((item) => (
                <div key={item.label}>
                  <h4
                    className="
                      text-[#99B81B]
                      text-4xl
                      font-bold
                    "
                  >
                    {item.number}
                  </h4>

                  <p className="text-xl mt-2 text-gray-800">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <Link href="/about">
                <Button className="text-white">
                  Read More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right */}

          <AboutImageGrid />
        </div>
      </Container>
    </section>
  );
}