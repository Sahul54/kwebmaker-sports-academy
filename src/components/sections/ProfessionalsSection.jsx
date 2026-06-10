"use client";

import Link from "next/link";

import Container from "../common/Container";
import Button from "../common/Button";

import ProfessionalCard from "../cards/ProfessionalCard";
import professionals from "@/data/professionals";
import VerticalLines from "../common/VerticalLines";

export default function ProfessionalsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#ffffff] overflow-hidden">
      
      {/* Background Lines */}
      <VerticalLines />

      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-xl">
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                Meet our professionals
              </h2>

              <span className="absolute -top-2 -right-4 w-3 h-3 rounded-full bg-[#a8bf20]" />
            </div>

            <p className="mt-5 text-gray-600 text-base md:text-md leading-relaxed">
              Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s.
            </p>
          </div>

          <div className="flex items-start lg:items-center">
            <Link href="/professionals">
              <Button className="text-white">
                View All
              </Button>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {professionals.map((item) => (
            <ProfessionalCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}