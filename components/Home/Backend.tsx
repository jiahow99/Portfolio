import { backend } from "@/utils/languages";
import TechCard from "./TechCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import TechCardsSwiper from "./TechCardsSwiper";

export default function Backend() {
    return (
    <>
        {/* Frameworks */}
        <h1 className="text-xl mt-3">FRAMEWORKS</h1>
        <div className="mt-3 hidden md:grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-14">
        {backend.frameworks.map(framework => (
            <TechCard key={framework.title} language={framework} />
        ))}
        </div>
        {/* Swiper (mobile) */}
        <TechCardsSwiper frameworks={backend.frameworks} />

        {/* Languages */}
        <h1 className="text-xl mt-7">LANGUAGES</h1>
        <div className="mt-3 hidden md:grid grid-cols-5 gap-14">
        {backend.languages.map(language => (
            <TechCard key={language.title} language={language} />
        ))}
        </div>
        {/* Swiper (mobile) */}
        <TechCardsSwiper frameworks={backend.languages} />
    </>
    )
}