import { backend } from "@/utils/languages";
import TechCard from "./TechCard";

export default function Backend() {
    return (
    <>
        {/* Frameworks */}
        <h1 className="text-xl mt-3">FRAMEWORKS</h1>
        {/* Tech */}
        <div className="mt-3 grid grid-cols-5 gap-14">
        {backend.frameworks.map(framework => (
            <TechCard key={framework.title} language={framework} />
        ))}
        </div>

        {/* Languages */}
        <h1 className="text-xl mt-7">LANGUAGES</h1>
        {/* Tech */}
        <div className="mt-3 grid grid-cols-5 gap-14">
        {backend.languages.map(language => (
            <TechCard key={language.title} language={language} />
        ))}
        </div>
    </>
    )
}