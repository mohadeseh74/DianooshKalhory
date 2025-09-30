"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
export default function Gallery() {
  return (
    <section className="container p-5 overflow-hidden rounded-lg">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-gray-800">
          Gallery
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </h2>
        <div data-aos="zoom-in" className="mb-10 mx-5 contents lg:inline">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            className="w-full max-w-5xl h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
          >
            <SwiperSlide>
              <Image
                src="/slider/futuristic-molecule-patterns-connect-genetic-research-discovery-generated-by-ai.jpg"
                alt="Slide 2"
                fill
                className="rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slider/logo_make_11_06_2023_191.jpg"
                alt="Slide 3"
                fill
                className="rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slider/test-tube-containing-dna.jpg"
                alt="Slide 4"
                fill
                className="rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
