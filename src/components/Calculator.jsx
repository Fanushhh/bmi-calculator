import { useState } from "react";
import { websiteData } from "../assets/websiteData";

const initialImperial = {
  feet: null,
  inches: null,
  stones: null,
  pounds: null,
};

export const Calculator = () => {
  const [isMetric, setIsMetric] = useState(true);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [result, setResult] = useState(null);
  const [imperial, setImperial] = useState(initialImperial);
  const inches = imperial.feet * 12 + Number(imperial.inches);
  const pounds = imperial.stones * 14 + Number(imperial.pounds);
  const minIdealWeightImperial = (92.5 + 3.7 * (inches - 60))
    .toString()
    .slice(0, 5);
  const maxIdealWeightImperial = (125 + 5 * (inches - 60))
    .toString()
    .slice(0, 5);

  const handleHeightChange = (e) => {
    setHeight(e.target.value / 100);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleImperial = (e) => {
    setImperial({
      ...imperial,
      [e.target.name]: Number(e.target.value),
    });
  };
  console.log(result);
  const calculateBmi = () => {
    if (isMetric) {
      const result = new String(weight / (height * height));
      setResult(result.slice(0, 5));
    } else {
      const result = new String((pounds / (inches * inches)) * 703);
      setResult(result.slice(0, 5));
    }
  };

  return (
    <section className="bg-pureWhite relative shadow-xl mx-auto md:mx-auto w-full max-w-[686px] p-6 rounded-xl md:max-w-[564px] place-self-center">
    <img className="max-[1300px]:hidden absolute right-8 bottom-[-280px]" src="./images/pattern-curved-line-left.svg" alt="curved indicator" />
      <h1 className="text-[22px] text-start leading-8 font-bold">
        {websiteData.calculator.title}
      </h1>
      <div className="flex gap-2 max-[768px]:justify-center  justify-between items-center py-4 font-bold">
        <div className="w-1/2">
          <label
            htmlFor="metric"
            className="flex items-center self-start gap-4"
          >
            <input
              onClick={() => {
                setIsMetric(true)
                setResult(null);
                }}
              type="radio"
              name="measurement"
              id="metric"
              defaultChecked 
            />
            Metric
          </label>
        </div>
        <div className="w-1/2">
          <label htmlFor="imperial" className="flex items-center gap-4 ">
            <input
              onClick={() => {
                setIsMetric(false)
                setResult(null);
                }}
              type="radio"
              name="measurement"
              id="imperial"
              
            />
            Imperial
          </label>
        </div>
      </div>
      {isMetric ? (
        <div className="flex flex-col sm:flex-row gap-4 text-dark-electric-blue">
          <div className="relative text-start flex flex-col gap-2">
            <label htmlFor="height" className="relative text-bodyS">
              {" "}
              Height
            </label>

            <input
              className="w-full relative rounded-md border border-borders px-6 py-5 text-base text-[#000] font-bold focus:outline-blue"
              type="number"
              name="height"
              id="height"
              autoComplete="off"
              onChange={handleHeightChange}
            />
            <span className="absolute right-5 top-1/2 text-base font-bold text-blue">
              cm
            </span>
          </div>
          <div className="relative flex flex-col text-start gap-2">
            <label htmlFor="weight" className="relative text-bodyS">
              Weight
            </label>
            <input
              className="w-full rounded-md border border-borders px-6 py-5 text-base text-[#000] font-bold focus:outline-blue"
              type="text"
              name="weight"
              id="weight"
              autoComplete="off"
              onChange={handleWeightChange}
              onBlur={calculateBmi}
            />
            <span className="absolute right-5 top-1/2 text-base font-bold text-blue">
              kg
            </span>
          </div>
        </div>
      ) : (
        <div className="text-start text-dark-electric-blue flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="height" className="relative text-bodyS">
              Height
            </label>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="relative">
                <input
                  className="w-full relative rounded-xl border border-borders pl-6 pr-14 py-5 text-base text-[#000] font-bold focus:outline-blue"
                  type="number"
                  name="feet"
                  id="feet"
                  autoComplete="off"
                  onChange={handleImperial}
                />
                <span className="absolute right-5 top-[24px] text-base font-bold text-blue">
                  ft
                </span>
              </div>
              <div className="relative">
                <input
                  className="w-full relative rounded-xl border border-borders pl-6 pr-14 py-5 text-base text-[#000] font-bold focus:outline-blue"
                  type="number"
                  name="inches"
                  id="inches"
                  autoComplete="off"
                  onChange={handleImperial}
                />
                <span className="absolute right-5 top-[24px] text-base font-bold text-blue">
                  in
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="height" className="relative text-bodyS">
              Weight
            </label>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="relative">
                <input
                  className="w-full relative rounded-xl border border-borders pl-6 pr-14 py-5 text-base text-[#000] font-bold focus:outline-blue"
                  type="number"
                  name="stones"
                  id="stones"
                  autoComplete="off"
                  onChange={handleImperial}
                />
                <span className="absolute right-5 top-[24px] text-base font-bold text-blue">
                  st
                </span>
              </div>
              <div className="relative">
                <input
                  className="w-full relative rounded-xl border border-borders pl-6 pr-14 py-5 text-base text-[#000] font-bold focus:outline-blue"
                  type="number"
                  name="pounds"
                  id="pounds"
                  autoComplete="off"
                  onChange={handleImperial}
                  onBlur={calculateBmi}
                />
                <span className="absolute right-5 top-[24px] text-base font-bold text-blue">
                  lbs
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`mt-6 mb-2 transition ease-in ${
          result < 18.5 && result
            ? "bg-gradient-to-tr  from-[#ff4e00] to-[#ec9f05]"
            : result > 18.5 && result < 24.9
            ? "bg-gradient-to-tr  from-[#42FCDB] to-[#3EE577]"
            : result > 24.9
            ? "bg-gradient-to-tr from-[#D14545] to-[#FFD045]"
            : "bg-gradient-to-tr from-blue to-[#587DFF]"
        }  text-pureWhite duration-500 p-8 rounded-xl text-start sm:flex sm:justify-between sm:items-center sm:rounded-tl-lg sm:rounded-tr-full sm:rounded-br-full sm:rounded-bl-xl lg:gap-20`}
        
      >
        <div>
          <p className="font-bold w-full">{websiteData.calculator.result.title}</p>
          <p className=" text-lg pt-2 pb-6 sm:pb-0 lg:text-xl">
            {result > 0 ? result : ""}
          </p>
        </div>
        <div className="max-w-[270px] w-full">
          {!result ? (
            <p>You will see your recommendation here.</p>
          ) : (
            <p className="lg:text-bodyS">
              Your BMI suggests that you're{" "}
              <span className="font-bold">
                {result < 18.5
                  ? "underweight."
                  : result > 18.5 && result < 24.9
                  ? "at a healthy weight."
                  : result > 24.9
                  ? "overweight."
                  : ""}
              </span>
              Your ideal weight range is between{" "}
              {isMetric ? (
                <span className="font-bold">
                  {(18.5 * (height * height)).toString().slice(0, 5)}
                  kg - {(24.9 * (height * height)).toString().slice(0, 5)}kg
                </span>
              ) : (
                <span className="font-bold">
                  {Math.round(
                    (minIdealWeightImperial / 14).toString().slice(0, 4)
                  )}
                  st{" "}
                  {Math.round(
                    (minIdealWeightImperial % 14).toString().slice(0, 2)
                  )}
                  lbs -{" "}
                  {Math.round(
                    (maxIdealWeightImperial / 14).toString().slice(0, 2)
                  )}
                  st{" "}
                  {Math.round(
                    (maxIdealWeightImperial % 14).toString().slice(0, 2)
                  )}{" "}
                  lbs
                </span>
              )}
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
