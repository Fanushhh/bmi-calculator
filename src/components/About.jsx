import { websiteData } from "../assets/websiteData"

export const About = () => {
    return(
        <section className=" sm:flex sm:gap-6 lg:gap-14 lg:max-w-[1160px] lg:mx-auto lg:justify-between lg:items-center">
            <div className="w-full "><img src={websiteData.BMIResultSection.img} alt="image of man eating" /></div>
            <div className="p-6 w-full lg:flex lg:flex-col justify-center  lg:place-self-end">
                <h1 className="font-bold mb-8 text-[32px] leading-[110%] lg:text-lg">{websiteData.BMIResultSection.title}</h1>
                <p className="text-dark-electric-blue max-w-[465px]">{websiteData.BMIResultSection.description}</p>
            </div>
        </section>
    )
}