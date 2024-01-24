import React from "react";

const Example = () => {
  return (
    <div className="grid min-h-[200px] place-content-center p-4">
      <DrawOutlineButton>Hover me</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-white bg-amber-900 hover:bg-white transition-colors duration-[400ms] hover:text-amber-900 rounded-lg overflow-visible"
    >
      <span>{children}</span>

      {/* TOP */}
      <span
        className="absolute left-0 top-0 h-[2px] w-0 bg-amber-900 transition-all duration-100 group-hover:w-full rounded-tl-lg rounded-tr-lg"
      />

      {/* RIGHT */}
      <span
        className="absolute right-0 top-0 h-0 w-[2px] bg-amber-900 transition-all delay-150 duration-150 group-hover:h-full rounded-tr-lg rounded-br-lg"
      />

      {/* BOTTOM */}
      <span
        className="absolute bottom-0 right-0 h-[2px] w-0 bg-amber-900 transition-all delay-200 duration-150 group-hover:w-full rounded-br-lg rounded-bl-lg"
      />

      {/* LEFT */}
      <span
        className="absolute bottom-0 left-0 h-0 w-[2px] bg-amber-900 transition-all delay-250 duration-150 group-hover:h-full rounded-bl-lg rounded-tl-lg"
      />
    </button>
  );
};



export default Example;
