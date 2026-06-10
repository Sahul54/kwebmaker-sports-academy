"use client";

import Image from "next/image";

export default function ProgramCard({
  title,
  description,
  image,
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-md
        h-[320px]
        sm:h-[380px]
        md:h-[420px]
        lg:h-[500px]
      "
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6 md:p-8 text-white text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-sm text-white/80 max-w-xs mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}