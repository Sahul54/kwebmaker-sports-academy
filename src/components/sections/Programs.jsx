"use client";

import Link from "next/link";

import Container from "../common/Container";
import Button from "../common/Button";

import ProgramCard from "../cards/ProgramCard";
import programs from "../../data/programs";
import VerticalLines from "../common/VerticalLines";

export default function Programs() {
  return (
    <section id="programs" className="relative py-16 md:py-20 lg:py-24 bg-[#f7f7f7] overflow-hidden">
      <VerticalLines />
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 mb-10 md:mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <div className="relative inline-block mb-4">
              <span className="absolute -top-1 -right-3 w-3 h-3 rounded-full bg-lime-500"></span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Programs
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base md:text-md leading-7">
              Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <Link href="/register">
              <Button className="text-white">
                Register Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              {...program}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}