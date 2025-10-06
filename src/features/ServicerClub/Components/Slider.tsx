import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "../type";

interface SliderProps {
  images: SliderItem[];
}

function Slider({ images }: SliderProps) {
  return (
    <div className="w-full mb-2 h-48 px-3 ">
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        dir="rtl"
        className="h-full w-full rounded-xl custom-pagination"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={image.Id}
            className="relative h-48 rounded-xl shadow-xl"
          >
            {image.Link ? (
              <a
        href={image.Link}
        target="_blank" // اگر میخوای در تب جدید باز بشه
        rel="noopener noreferrer"
        className="block w-full h-full relative"
      >
                <Image
                  src={image.Url}
                  alt={image.Name}
                  fill
                  className="object-cover rounded-xl"
                  priority={index === 0}
                />
              </a>
            ) : (
              <Image
                src={image.Url}
                alt={image.Name}
                fill
                className="object-cover rounded-xl"
                priority={index === 0}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
