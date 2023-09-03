import { websiteData } from "../assets/websiteData";
import { Calculator } from "./Calculator";


export const Hero = () => {
    return(
    <section className="text-center relative px-6 lg:px-28 pt-8 pb-24 lg:pb-0 lg:flex lg:items-center lg:h-[75vh] lg:justify-around lg:mb-0">
    <div>
        
    </div>
        <div className="absolute h-[70vh] sm:h-[50vh] lg:w-2/3 lg:h-[65vh] lg:left-8 w-full z-[-1] left-0 top-0 bg-gradient-to-br from-pureWhite to-gradient-2 rounded-br-3xl rounded-bl-3xl"></div>
        <div className="w-full lg:max-w-[500px] lg:text-left lg:flex lg:flex-col lg:justify-center lg:items-start">
            <img className="mx-auto lg:mx-0 w-[40px] mb-6 lg:w-[64px] lg:absolute lg:top-20" src={websiteData.hero.img} alt="logo image" />
            
            <div className="relative">
                <h1 className="text-lg leading-lg font-semibold pb-6 lg:text-xl">{websiteData.hero.title}</h1>
                <p className="text-dark-electric-blue pb-12">{websiteData.hero.description}</p>
                
            </div>
        </div>
        <Calculator />
    </section>
    )
}