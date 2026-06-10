"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function FacilityCard({
  title,
  description,
  image,
  tags,
  videoUrl,
  textColor = "white",
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url) => {
    if (!url) return "";

    const videoId =
      url.split("v=")[1]?.split("&")[0] ||
      url.split("/").pop()?.split("?")[0];

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  return (
    <div className="group w-full">
      {/* Image */}
     <div className="relative overflow-hidden rounded-2xl">
    <div className="relative aspect-square w-full max-w-[360px] rounded-xl overflow-hidden">
        {!isPlaying ? (
        <>
            <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-black/20 rounded-2xl" />

            {videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
                <button
                onClick={() => setIsPlaying(true)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-110"
                >
                <Play
                    size={18}
                    fill="black"
                    className="ml-0.5 text-black"
                />
                </button>
            </div>
            )}
        </>
        ) : (
        <iframe
            src={getEmbedUrl(videoUrl)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full rounded-2xl"
        />
        )}
    </div>
    </div>
      {/* Content */}
      <div className="mt-5">
        <h3
          className={`text-xl md:text-2xl font-semibold ${
            textColor === "white" ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                textColor === "white"
                  ? "bg-white text-black"
                  : "bg-lime-600 text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          className={`mt-4 max-w-md text-sm leading-7 md:text-base ${
            textColor === "white"
              ? "text-white/85"
              : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}