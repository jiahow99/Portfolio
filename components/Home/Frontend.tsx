import { frontend } from "@/utils/languages";
import TechCard from "./TechCard";
import TechCardsSwiper from "./TechCardsSwiper";

export default function Frontend() {
  return (
    <>
    {/* Frameworks */}
    <h1 className="text-xl mt-3">FRAMEWORKS</h1>
    {/* Tech */}
    <div className="mt-3 hidden md:grid grid-cols-5 gap-14">
    {frontend.frameworks.map(framework => (
        <TechCard key={framework.title} language={framework} />
    ))}
    </div>
    <TechCardsSwiper frameworks={frontend.frameworks} />


    {/* Languages */}
    <h1 className="text-xl mt-7">LANGUAGES</h1>
    {/* Tech */}
    <div className="mt-3 hidden md:grid grid-cols-5 gap-14">
    {frontend.languages.map(language => (
        <TechCard key={language.title} language={language} />
    ))}
    </div>
    <TechCardsSwiper frameworks={frontend.languages} />
    </>
  )
}