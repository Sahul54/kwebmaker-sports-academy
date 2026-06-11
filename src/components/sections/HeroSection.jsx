"use client";

import { useEffect, useState } from "react";
import Container from "../common/Container";
import { MapPin } from "lucide-react";
import VerticalLines from "../common/VerticalLines";
import Link from "next/link";

export default function HeroSection() {
  const [weather, setWeather] = useState(null);
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-32.93&longitude=151.78&current=temperature_2m"
        );

        const data = await res.json();

        setWeather({
          temperature: Math.round(data.current.temperature_2m),
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeather();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setDateTime(
        now.toLocaleDateString("en-US", {
          weekday: "long",
        }) +
          ", " +
          now.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home/home.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Vertical Lines */}
     <VerticalLines />

      <Container className="relative z-10 h-screen">
        {/* Center Content */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center max-w-6xl px-4">
            <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#d8ef6b] text-xs md:text-sm font-medium mb-4">
              SSA HUNTER VALLEY
            </p>

            <h1 className="text-white font-light uppercase leading-tight text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl">
              Grow Your Game With The
            </h1>

            <h1 className="text-white font-extrabold uppercase leading-tight mt-2 text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
              Professionals
            </h1>

            <div className="w-28 sm:w-40 md:w-64 lg:w-80 h-px bg-white mx-auto my-6 md:my-8" />

            <div className="relative mt-8 w-full flex justify-center">
            {/* Center Raised Bar */}
            <div
                className="relative z-10
                h-[58px]
                px-8
                md:px-14
                min-w-[300px]
                md:min-w-[650px]
                flex
                items-center
                justify-center
                backdrop-blur-md
                border-y
                border-white/0
                bg-[#99B034]/70
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                "
                style={{
                background: `
                    linear-gradient(
                    to right,
                    transparent 0%,
                    rgba(153,176,52,0.15) 10%,
                    rgba(153,176,52,0.45) 20%,
                    rgba(153,176,52,0.75) 35%,
                    rgba(153,176,52,0.85) 50%,
                    rgba(153,176,52,0.75) 65%,
                    rgba(153,176,52,0.45) 80%,
                    rgba(153,176,52,0.15) 90%,
                    transparent 100%
                    )
                `,
                }}
            >
                <div
                className="
                    flex
                    items-center
                    gap-4
                    md:gap-7
                    uppercase
                    text-white
                    text-[11px]
                    md:text-[15px]
                    font-light
                    tracking-[4px]
                    md:tracking-[8px]
                "
                >
                <span>Adopt</span>

                <div className="w-[6px] h-[6px] rounded-full bg-white" />

                <span>Nurture</span>

                <div className="w-[6px] h-[6px] rounded-full bg-white" />

                <span>Deliver</span>
                </div>
            </div>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                mt-8
                md:mt-10
                px-6
                md:px-8
                py-3
                border
                border-[#d8ef6b]
                rounded-full
                text-white
                hover:bg-[#d8ef6b]
                hover:text-black
                transition-all
                duration-300
              "
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Mobile Weather Card */}
        <div className="lg:hidden absolute bottom-24 left-4 right-4 z-20">
          <div className="bg-[#99bf38]/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-white/70" />

              <span className="text-white font-medium">
                Hunter Valley
              </span>
            </div>

            <div className="flex justify-between items-end">
              <h3 className="text-white text-4xl font-bold">
                {weather?.temperature ?? "--"}°
              </h3>

              <div className="text-right">
                <p className="text-white font-semibold">
                  Weather
                </p>

                <p className="text-white/80 text-xs">
                  {dateTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Right Panel */}
        <div className="hidden lg:flex flex-col absolute right-[-120] top-120 -translate-y-1/2 z-20 items-end">
          {/* Weather Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#c5db4d] text-lg">≪</span>

            <span className="text-white text-xs font-semibold tracking-[2px] uppercase">
              Weather
            </span>

            <div className="w-20 h-px bg-[#c5db4d]" />
          </div>

          {/* Weather Card */}
          <div
            className="relative w-[260px] h-[130px] bg-[#99bf38]/75 backdrop-blur-md overflow-hidden border border-white/10"
            // style={{
            //   clipPath:
            //     "polygon(0 0, 75% 0, 100% 35%, 100% 100%, 0 100%)",
            // }}
          >
            <div className="absolute inset-0 bg-white/5" />

            <div className="relative z-10 p-5 h-full">
              <div className="flex items-center gap-2">
                <MapPin
                  size={14}
                  className="text-white/60"
                />

                <p className="text-white text-lg font-semibold">
                  Hunter Valley
                </p>
              </div>

              <div className="flex justify-between items-end mt-4">
                <h3 className="text-white font-bold text-6xl leading-none">
                  {weather?.temperature ?? "--"}
                  <span className="text-3xl align-top">
                    °C
                  </span>
                </h3>

                <div className="text-right">
                  <p className="text-white font-semibold">
                    Weather
                  </p>

                  <p className="text-white/80 text-sm">
                    {dateTime}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ongoing Matches */}
          <div className="flex items-center gap-3 mt-8">
            <span className="text-[#c5db4d] text-lg">≪</span>

            <span className="text-white text-xs font-semibold tracking-[2px] uppercase">
              Ongoing Matches
            </span>

            <div className="w-14 h-px bg-[#c5db4d]" />
          </div>

          {/* Score */}
          <div className="flex items-center gap-3 mt-6">
            <span className="text-[#c5db4d] text-lg">≪</span>

            <span className="text-white text-xs font-semibold tracking-[2px] uppercase">
              Score
            </span>

            <div className="w-20 h-px bg-[#c5db4d]" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-[#d8ef6b] animate-bounce text-2xl">
          ↓
        </div>
      </Container>
    </section>
  );
}