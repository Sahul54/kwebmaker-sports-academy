"use client";

import Image from "next/image";

export default function ProfessionalCard({
  name,
  role,
  image,
}) {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-md">
        <div className="relative h-[220px] sm:h-[260px] md:h-[420px] lg:h-[450px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-5">
        <h3 className="text-xl md:text-2xl font-semibold text-black">
          {name}
        </h3>

        <p className="mt-3 text-gray-600 italic text-sm md:text-base leading-relaxed max-w-xs">
          {role}
        </p>
      </div>
    </div>
  );
}