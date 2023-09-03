import { websiteData } from "../assets/websiteData"

export const Limitations = () => {
    const windowSize = window.innerWidth;
    console.log(windowSize);
    return(
        

            <section className="flex relative flex-col gap-10 px-6 text-center mt-[127px] mb-[96px] lg:max-w-[1160px] lg:mx-auto">
            <img className="absolute max-[1200px]:hidden left-[180px] top-[250px]" src="./images/pattern-curved-line-right.svg" alt="curved indicator" />
            <div className="grid max-[600px]:place-items-center grid-cols-1 sm:flex sm:flex-wrap md:justify-center lg:grid lg:grid-cols-8 lg:grid-rows-3 lg:items-center gap-6  lg:gap-x-4 lg:gap-y-6">
            <div className=" lg:col-start-1 lg:col-end-4 lg:text-start">
                <h1 className="font-bold text-[32px] mb-8">Limitations of BMI</h1>
                <p className="text-dark-electric-blue">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
            </div>
                {websiteData.limitations.map((limitation, index) => {
                    return <div key={index} className={`bg-pureWhite p-6 sm:p-8 text-start drop-shadow-card rounded-xl w-[335px] lg:h-fit  lg:w-[365px] max-[600px]:max-w-full  ${limitation.position}`}>
                        <div className="mb-4 flex gap-4 items-center">
                            <img className="w-[32px] h-[32px]" src={limitation.icon} alt="BMI limitations" />
                            <p className="font-bold text-base">{limitation.title}</p>
                        </div>
                        <div>
                            <p className="text-dark-electric-blue">{limitation.description}</p>
                        </div>
                    </div>
            
            })}</div>
        </section>
        
    )
}