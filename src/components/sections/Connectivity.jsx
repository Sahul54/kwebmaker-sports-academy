"use client";

import Image from "next/image";
import { LuFlagTriangleRight } from "react-icons/lu";
import connectivityData from "@/data/connectivity";

export default function Connectivity() {
  const { title, subtitle, image, locations } = connectivityData;

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="grid lg:grid-cols-5 overflow-hidden">
        
        {/* Left Content */}
        <div className="lg:col-span-2 bg-gradient-to-b from-[#0a4965] to-[#8cab22] text-white px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 relative z-10">
          
          <span className="uppercase tracking-[2px] text-sm sm:text-base text-white/90">
            Launching
          </span>

          <h2 className="mt-3 md:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            {title}
          </h2>

          <h3 className="mt-3 md:mt-4 text-xl md:text-2xl font-bold">
            {subtitle}
          </h3>

          <div className="mt-6 md:mt-8 space-y-5 md:space-y-7">
            {locations.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <LuFlagTriangleRight
                  size={18}
                  className="shrink-0 mt-1 text-white"
                />

                <div className="flex items-center w-full min-w-0">
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {item.name}
                  </span>

                  <div className="flex-1 border-b border-dashed border-white/40 mx-2 md:mx-4" />

                  <span className="text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
                    {item.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
         <div className="lg:col-span-3 relative h-[320px] sm:h-[420px] md:h-[500px] lg:h-auto lg:min-h-[650px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover block"
          />
        </div>

      </div>
    </section>
  );
}