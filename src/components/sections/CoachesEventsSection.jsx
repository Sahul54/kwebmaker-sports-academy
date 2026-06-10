"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoachesEventsSection() {
  return (
    <section id="coaches" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Card */}
        <div className="relative min-h-[280px] lg:min-h-[320px] overflow-hidden">
          <Image
            src="/coaches/coaches-bg.jpg"
            alt="Our Coaches"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex h-full items-center">
            <div className="px-8 lg:px-20 max-w-xl">
              <div className="relative inline-block">
                <h2 className="text-white text-3xl lg:text-4xl font-bold">
                  Our Coaches
                </h2>

                <span className="absolute -top-1 -right-5 w-3 h-3 rounded-full bg-white" />
              </div>

              <p className="mt-4 text-white/90 text-md lseading-relaxed">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>

              <Link
                href="/coaches"
                className="inline-flex items-center gap-3 text-white mt-10 font-medium"
              >
                Read More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative min-h-[280px] lg:min-h-[320px] bg-[#9DBC14] overflow-hidden">
          
          {/* Background Silhouette */}
          <Image
            src="/coaches/tennis-player.png"
            alt=""
            width={300}
            height={300}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              opacity-15
              pointer-events-none
            "
          />

          <div className="relative z-10 flex h-full items-center">
            <div className="px-8 lg:px-20 max-w-xl">
              <div className="relative inline-block">
                <h2 className="text-white text-3xl lg:text-4xl font-bold">
                  Events
                </h2>

                <span className="absolute -top-1 -right-5 w-3 h-3 rounded-full bg-white" />
              </div>

              <p className="mt-6 text-white/90 text-md leading-relaxed">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>

              <Link
                href="/events"
                className="inline-flex items-center gap-3 text-white mt-10 font-medium"
              >
                Read More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}