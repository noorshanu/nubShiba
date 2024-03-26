import React from "react";

function Mission() {
  return (
    <section className=" container-wrapper">
      <div className=" flex justify-between items-center flex-col-reverse sm:flex-row">
        <div className="w-full">
          <img src="images/about2.png" alt="" />
        </div>

        <div className=" bg-white border-2   py-8 px-4 rounded-2xl shadow-xl max-w-2xl ">
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3">$NUBS Mission</h1>

          <p className=" text-lg sm:text-xl "> 
            To the moon we aim, no bumps, just zoom! It's NubShib moon day, a
            NubShib celebration in full sway. Yes, yes, to the moon NubShib
            flies, today's the day, no lies. So, you in for this moon ride?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
