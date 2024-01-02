import { database } from "@/utils/languages";
import TechCard from "./TechCard";

export default function Database() {
    return (
    <>
        {/* Tech */}
        <div className="grid grid-cols-5 gap-14">
        {database.map(framework => (
            <TechCard key={framework.title} language={framework} />
        ))}
        </div>
    </>
    )
}