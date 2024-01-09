import Feature from "@/components/Project/Feature";
import { dreambidFeatures } from "@/utils/features";

export default function moviebites() {
  return (
    <div className="w-11/12 mx-auto pt-10">
      {/* Title */}
      <h1 className="font-medium text-2xl tracking-wider">MovieBites</h1>
      <h1 className="font-medium text-5xl mt-3">Features</h1>

      {/* Feature */}
      {dreambidFeatures.map((feature, i) => (
        <Feature feature={feature} key={feature.title} right={i % 2 === 1} />
      ))}
    </div>
  )
}