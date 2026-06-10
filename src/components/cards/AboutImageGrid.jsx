"use client";

import Image from "next/image";

export default function AboutImageGrid() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Top Left Large */}
      <div className="col-span-8">
        <Image
          src="/about/about-1.jpg"
          alt="About"
          width={600}
          height={500}
          className="
            w-full
            h-[200px]
            md:h-[220px]
            lg:h-[280px]
            object-cover
          "
        />
      </div>

      {/* Top Right Small */}
      <div className="col-span-4">
        <Image
          src="/about/about-2.jpg"
          alt="About"
          width={450}
          height={500}
          className="
            w-full
            h-[200px]
            md:h-[220px]
            lg:h-[280px]
            object-cover
          "
        />
      </div>

      {/* Bottom Left */}
      <div className="col-span-6">
        <Image
          src="/about/about-3.jpg"
          alt="About"
          width={500}
          height={400}
          className="
            w-full
            h-[160px]
            md:h-[180px]
            lg:h-[240px]
            object-cover
          "
        />
      </div>

      {/* Bottom Right */}
      <div className="col-span-6">
        <Image
          src="/about/about-4.jpg"
          alt="About"
          width={500}
          height={400}
          className="
            w-full
            h-[180px]
            md:h-[220px]
            lg:h-[240px]
            object-cover
          "
        />
      </div>
    </div>
  );
}