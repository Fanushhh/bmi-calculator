import { websiteData } from "../assets/websiteData"

export const Recommendations = () => {
    return(
        <section className="flex flex-col gap-10 px-6 sm:px-10 text-start mt-[127px] lg:mt-[168px] lg:flex-row lg:max-w-[1160px] lg:mx-auto lg:px-0">
            {websiteData.recommendations.map((recommendation, index) => {
                return <div key={index} className="sm:flex gap-10 items-center lg:flex-col lg:items-start">
                    <div className="mb-8 sm:mb-0">
                        <img className="w-full block max-w-[64px]" src={recommendation.img} alt="recommendations" />
                    </div>
                    <div>
                        <p className="font-bold text-base pb-6">{recommendation.title}</p>
                        <p className="text-dark-electric-blue">{recommendation.description}</p>
                    </div>
                </div>
            })}
        </section>
    )
}