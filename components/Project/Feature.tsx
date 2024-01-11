/* eslint-disable @next/next/no-img-element */
export default function Feature({ feature, right=false }:any) {
  return !right ? (
    <div className="flex gap-16 mt-14">
        <div data-aos="fade-up" className={`w-6/12 relative mb-20 ${feature.mb}`}>
          <img src={feature.image1} className={`${feature.image1Class}`} alt="feature_1" />
          <img src={feature.image2} className={`absolute right-0 ${feature.image2Class}`} alt="feature_2" />
        </div>
        <div data-aos="fade-left" className="w-6/12 flex flex-col justify-center items-start gap-3">
          <h1 className="text-3xl font-medium ">{feature.title}</h1>
          <p className="text-lg text-gray-400 bottom-5">{feature.description}</p>
        </div>
    </div>
  ):(

    <div className="flex gap-16 mt-14">
        <div data-aos="fade-right" className="w-6/12 flex flex-col justify-center items-start gap-3">
          <h1 className="text-3xl font-medium ">{feature.title}</h1>
          <p className="text-lg text-gray-400">{feature.description}</p>
        </div>
        <div data-aos="fade-up" className={`w-6/12 relative mb-20 ${feature.mb}`}>
          <img src={feature.image1} className={`ml-auto ${feature.image1Class}`} alt="feature_1" />
          {feature.image2 && 
          <img src={feature.image2} className={`absolute left-0 ${feature.image2Class}`} alt="feature_2" />
          }
        </div>
    </div>
  )
}