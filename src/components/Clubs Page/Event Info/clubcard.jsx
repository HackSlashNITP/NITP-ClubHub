import React from "react";
import { data } from "./info.js";

const Clubcard = () => {
  return (
    <component className="flex flex-row md:p-[2.8rem] p-8">
      <div>
        <img className="h-3/4 md:h-max" src={data.event1.image} />
      </div>
      <div className="ml-1 md:ml-16">
        <h1 className="md:mb-8 mb-4 font-semibold md:text-5xl text-3xl">
          {data.event1.eventName}
        </h1>
        <p className="m-0 font-normal md:text-xl text-base">
          {data.event1.eventInfo}
        </p>
      </div>
    </component>
  );
};

export default Clubcard;
