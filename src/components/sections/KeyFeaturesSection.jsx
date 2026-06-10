"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Container from "../common/Container";
import Button from "../common/Button";

import features from "@/data/features";
import ImageGrid from "../cards/ImageGrid";
import VerticalLines from "../common/VerticalLines";

export default function KeyFeatures() {
    return (
        <section
            className="relative py-24 lg:py-32 overflow-hidden"
            style={{
                backgroundImage:
                    "url('/testimonials/testimonial-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container>
                {/* KEY FEATURES */}

                <VerticalLines />

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-20">
                    <div>
                        <div className="relative inline-block mb-4">
                            <span className="absolute -top-1 -right-3 w-3 h-3 rounded-full bg-lime-500"></span>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                Key Features
                            </h2>
                        </div>

                        <p className="text-gray-600 max-w-2xl">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    <Link href="/register">
                        <Button className="text-white">
                            Register Now
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 ">
                    {/* LEFT */}
                    <div className="space-y-4">
                        {features.left.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <ArrowRight
                                    size={18}
                                    className="text-lime-500 shrink-0 mt-1"
                                />

                                <p className="text-base leading-8 text-gray-800">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4">
                        {features.right.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <ArrowRight
                                    size={18}
                                    className="text-lime-500 shrink-0 mt-1"
                                />

                                <p className="text-base leading-8 text-gray-800">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* GLIMPSE */}

                <div className="mt-24 lg:mt-32">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
                        <div>
                            <div className="relative inline-block mb-4">
                                <span className="absolute -top-1 -right-3 w-3 h-3 rounded-full bg-lime-500"></span>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                    A Glimpse of Excellence
                                </h2>
                            </div>

                            <p className="text-gray-600 max-w-2xl">
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s.
                            </p>
                        </div>

                        <Link href="/register">
                            <Button className="text-white">
                                Register Now
                            </Button>
                        </Link>
                    </div>

                    <ImageGrid />
                </div>
            </Container>
        </section>
    );
}