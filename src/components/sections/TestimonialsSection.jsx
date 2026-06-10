"use client";

import Container from "../common/Container";
import VerticalLines from "../common/VerticalLines";

export default function Testimonials() {
  return (
    <section className="relative h-[450px] lg:h-[500px] overflow-hidden">

    
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/testimonials/testimonial-bg.jpg')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#d8dce5]/75" />
  
  {/* Vertical Lines */}
    <VerticalLines />

  <Container className="relative z-10 h-full flex items-center justify-center">
    <div className="max-w-4xl mx-auto">
      {/* Quote */}
      <h2
        className="
          text-white
          text-2xl
          md:text-3xl
          lg:text-4xl
          font-bold
          leading-tight
        "
      >
        “ We have created an environment ideal for
        building craft. Our goal is to be recognized
        as the best tennis performance centre in the
        world. ”
      </h2>

      {/* Divider */}
      <div className="w-full max-w-4xl h-px bg-white/40 mt-10 mb-8 mx-auto" />

      {/* Author */}
      <div>
        <h4 className="text-white text-2xl font-semibold">
          John Doe
        </h4>

        <p className="text-white/80 text-lg mt-1">
          Chairman
        </p>
      </div>
    </div>
  </Container>
</section>
  );
}