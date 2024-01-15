import { database } from "@/utils/languages";
import TechCard from "./TechCard";
import TechCardsSwiper from "./TechCardsSwiper";

export default function Database() {
    return (
    <>
        {/* Tech */}
        <div className="hidden md:grid grid-cols-5 gap-14">
        {database.map(framework => (
            <TechCard key={framework.title} language={framework} />
        ))}
        </div>
        <TechCardsSwiper frameworks={database} />

    </>
    )
}