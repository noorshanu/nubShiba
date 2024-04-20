
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className=" pt-0  pb-[1rem]">
      <div className="container-wrapper flex justify-center flex-col ">
        <h1 className=" font-kid text-[110px] sm:text-[220px] font-bold text-center mt-[5rem] sm:mt-[3rem] uppercase">
          NubShib
        </h1>

  
        <div className=" flex justify-center mx-auto -mt-[4rem]">
          <img
            src="images/hero.png"
            alt=""
            className="w-auto h-64    lg:h-[500px] 2xl:h-[550px] mx-auto floating"
          />
        </div>

        <div className=" flex justify-center gap-5 items-center mt-[2rem]">
        <a
                  href="https://twitter.com/NubshibSolana"
                  className=" text-xl text-black bg-[#fd8b00] hover:scale-125 hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitterX />
                </a>
             
           

                <a
                  href="https://t.me/NubShib" target="_blank"
                  className=" text-xl text-black hover:scale-125 bg-[#fd8b00] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/52og9K7jjsoP76FXRHc62KXWu3aKdhriXHGdGv92Fnp8?t=1713602367339" target="_blank"
            className=" bg-[#fd8b00] rounded-full text-xl font-semibold p-1 border-2 hover:scale-125 "
          >
            <img src="images/dext.png" alt="" className=" h-[29px] w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
