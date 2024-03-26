import { FaTwitter, FaTelegram } from "react-icons/fa";

function Hero() {
  return (
    <section className=" pt-0  pb-[1rem]">
      <div className="container-wrapper flex justify-center flex-col ">
        <h1 className=" font-kid text-[120px] sm:text-[220px] font-bold text-center mt-[3rem] uppercase">
          NubShib
        </h1>

        <div className=" flex justify-center gap-5 items-center sm:hidden">
          <a
            href="https://x.com/nub_doge_" target="_blank"
            className=" bg-[#b6d9ff] rounded-full px-4 py-2 text-xl font-semibold "
          >
            Twitter
          </a>

       

          <a
            href="https://t.me/nubdoges" target="_blank"
            className=" bg-[#b6d9ff] rounded-full px-4 py-2 text-xl font-semibold "
          >
            Telegram
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/GzFhSwYnVZxx7BYheTmn2qLZzav6Zs9MnqBZr5Ce5AAV?t=1711398205299" target="_blank"
            className=" bg-[#b6d9ff] rounded-full px-4 py-2 text-xl font-semibold "
          >
            DexTools
          </a>
        </div>
        <div className=" flex justify-center mx-auto -mt-[4rem]">
          <img
            src="images/hero.png"
            alt=""
            className="w-auto h-64    lg:h-[500px] 2xl:h-[550px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
