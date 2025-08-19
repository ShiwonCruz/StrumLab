import { Check } from "lucide-react";
import bg from "../assets/bg.png"; 
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div id="workflow" className="mt-20 pt-24">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Dive into our streamlined{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
          workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center" >
        <div className="rounded-3xl mt-9 overflow-hidden w-full lg:w-5/12">
          <img
            src={bg}
            alt="bgimage"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <Check />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
