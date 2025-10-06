"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Thumbs, FreeMode } from "swiper/modules";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

type GalleryImageProductProps = {
  title: string;
  mainImage?: string | null;
  attaches?: string[];
};

function GalleryImageProduct({
  title,
  mainImage,
  attaches,
}: GalleryImageProductProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const gallery = [
    ...(mainImage ? [mainImage] : []),
    ...(Array.isArray(attaches) ? attaches : []),
  ];

  const showSlider = gallery.length > 1;

  return (
    <div className="w-full mb-2 px-3">
      {gallery.length > 0 ? (
        showSlider ? (
          <div className="flex gap-2">
            {/* Thumbnails */}
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="!w-auto h-48 overflow-auto !p-2 flex flex-col"
            >
              {gallery.map((image, index) => (
                <SwiperSlide
                  key={`thumb-${index}`}
                  className="relative !h-[40px] !w-[40px] rounded-full overflow-hidden cursor-pointer shadow-md border-1 border-gray-200"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={`thumb-${index}`}
                      fill
                      priority={index === 0}
                      className="object-cover rounded-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Main slider */}
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Pagination, Autoplay, Thumbs]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 85000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="h-48 w-full custom-pagination"
            >
              {gallery.map((image, index) => (
                <SwiperSlide
                  key={`main-${index}`}
                  className="flex justify-center items-center h-48"
                >
                  <div className="flex justify-center items-center h-full w-full">
                    <Image
                      src={image}
                      alt={`image-${index}`}
                      width={600}
                      height={192}
                      className="object-contain h-full w-auto rounded-xl"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-48 rounded-xl overflow-hidden relative">
            <Image
              src={gallery[0]}
              alt={title}
              width={600}
              height={192}
              priority
              className="object-contain h-full w-auto shadow-lg rounded-xl"
            />
          </div>
        )
      ) : (
        <div className="flex justify-center items-center w-full h-48 rounded-xl overflow-hidden relative">
          <Image
            src="/images/logo.png"
            alt="placeholder"
            width={300}
            height={192}
            className="object-contain opacity-20 grayscale h-full w-auto"
          />
        </div>
      )}
    </div>
  );
}

export default GalleryImageProduct;
