import React from "react";

function Tokenomic() {
  return (
    <div className=" container-wrapper  px-4 relative  ">
      <h1 className=" font-kid font-bold text-4xl sm:text-6xl my-3 text-center pb-4">
        Shibnomics
      </h1>

      <div className=" flex justify-between flex-col sm:flex-row gap-4 items-center">
        <div className=" w-full sm:w-[300px] bg-[#fd8b00] border-2   py-8 px-4 rounded-2xl shadow-xl">
          <h1 className=" text-2xl font-semibold  pb-2">Token Name</h1>

          <p className=" text-lg font-semibold">Nubshib</p>
        </div>

        <div className=" w-full sm:w-[300px] bg-[#fd8b00] border-2   py-8 px-4 rounded-2xl shadow-xl">
          <h1 className=" text-2xl font-semibold  pb-2">Symbol</h1>

          <p className=" text-lg font-semibold">$NUBS</p>
        </div>

        <div className=" w-full sm:w-[300px] bg-[#fd8b00] border-2   py-8 px-4 rounded-2xl shadow-xl">
          <h1 className=" text-2xl font-semibold  pb-2">Total Supply</h1>

          <p className=" text-lg font-semibold">1,000,000,000</p>
        </div>
      </div>
    </div>
  );
}

export default Tokenomic;
