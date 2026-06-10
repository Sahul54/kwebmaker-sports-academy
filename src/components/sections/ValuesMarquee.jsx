"use client";

import VerticalLines from "../common/VerticalLines";

export default function ValuesMarquee() {
  const items = [
    "ADOPT",
    "NURTURE",
    "DELIVER",
    "ADOPT",
    "NURTURE",
    "DELIVER",
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#f5f5f5]">
        <VerticalLines />
      <div className="flex items-center whitespace-nowrap animate-marquee-right">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center shrink-0"
          >
            <h2
              className={`
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                uppercase
                tracking-wide
                mx-8
                ${
                  index % 2 === 0
                    ? "text-lime-600"
                    : "text-transparent stroke-text"
                }
              `}
            >
              {item}
            </h2>

            {/* Dot */}
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-lime-600 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}