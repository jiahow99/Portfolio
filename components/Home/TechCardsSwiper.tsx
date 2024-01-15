import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import TechCard from './TechCard';

export default function TechCardsSwiper({frameworks}: any) {
  return (
    <div className="block md:hidden">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={15}
      >
      {frameworks.map((framework: any) => (
          <SwiperSlide key={framework.title}>
              <TechCard language={framework} />
          </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}