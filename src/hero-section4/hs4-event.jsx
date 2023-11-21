import React from "react";

const Event = (props) => {
  return (
    <main className="w-4/5 md:w-1/3 lg:px-6 md:px-4">
      <div className="w-full mb-3 bg-slate-400 h-60 md:mb-6">IMAGE</div>
      <div className="mb-2 text-lg font-semibold md:text-xl lg:text-2xl md:mb-4">
        {props.title}
      </div>
      <div className="text-neutral-400 md:text-base lg:text-lg">
        {props.info}
      </div>
      <div className="pt-2 mb-8 text-sm cursor-pointer text-neutral-500 md:pt-4">
        Learn More
      </div>
    </main>
  );
};

export default Event;
