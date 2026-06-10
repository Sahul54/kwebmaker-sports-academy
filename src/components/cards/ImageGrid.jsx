"use client";

import Image from "next/image";

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Left Image */}
      <div className="md:col-span-4">
        <div className="relative h-[320px] md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden">
          <Image
            src="/KeyFeaturesSection/excellence-1.jpg"
            alt="Excellence Image 1"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="md:col-span-8">
        <div className="relative h-[320px] md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden">
          <Image
            src="/KeyFeaturesSection/excellence-2.jpg"
            alt="Excellence Image 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}