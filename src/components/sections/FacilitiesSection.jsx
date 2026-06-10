"use client";

import { Trophy } from "lucide-react";
import Container from "../common/Container";
import facilities from "@/data/facilities";
import FacilityCard from "../cards/FacilityCard";

export default function FacilitiesSection() {
  const topFacilities = facilities.slice(0, 2);
  const bottomFacilities = facilities.slice(2, 4);

  return (
    <section className="relative bg-[#ffffff] overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="max-w-xl pt-20 lg:pt-24 mb-16">
          <div className="relative inline-block">
             <span className="absolute -top-1 -right-3 w-3 h-3 rounded-full bg-lime-500"></span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Facilities
                </h2>
          </div>

          <p className="mt-5 text-gray-600 text-xs md:text-base leading-relaxed">
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s.
          </p>
        </div>
      </Container>

      {/* Gradient Area */}
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-[680px] bg-gradient-to-r from-[#063f63] via-[#1f6f4f] to-[#86aa2e] mt-36" />

        {/* Trophy */}
        <Trophy
          strokeWidth={1}
          className="
            hidden lg:block
            absolute
            right-[-160px]
            top-[20px]
            w-[350px]
            h-[350px]
            text-white/10
            z-0
          "
        />

        <Container>
          <div className="relative z-10">
            {/* Top Cards */}
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-3xl">
              {topFacilities.map((facility) => (
                <FacilityCard
                  key={facility.id}
                  {...facility}
                  textColor="white"
                />
              ))}
            </div>

            {/* Bottom Cards */}
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-3xl ml-auto mt-12 md:mt-20 lg:mt-28 pb-20">
              {bottomFacilities.map((facility) => (
                <FacilityCard
                  key={facility.id}
                  {...facility}
                  textColor="black"
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
} 