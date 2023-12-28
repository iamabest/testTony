function Banner() {
    return (
      <div>
        <section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
          <div class="px-6 mx-auto sm:px-9 lg:px-8 max-w-9xl ">
            <div class="gap- grid items-center grid-cols-1 md:grid-cols-2">
              <div className="ml-[50%]">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Hey 👋 I am
                  <br class="block sm:hidden" /> Kitsune
                </h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                  This is a website about Marathon education center's 2nd level
                  completion project using ReachJS and Javascript. The lady next
                  to me is my illustration :)))
                </p>
  
                <p class="mt-4 text-xl text-gray-600 md:mt-8">
                  <span class="relative inline-block">
                    <span class="absolute inline-block w-full bottom-0.5 h-2 bg-blue-300"></span>
                    <span class="relative"> Have a question ? </span>
                  </span>
                  <br class="block sm:hidden" /> Ask me on{" "}
                  <a
                    href="/"
                    title=""
                    class="transition-all duration-200 text-sky-800 font-bold hover:text-sky-600 hover:underline"
                  >
                   Email
                  </a>
                </p>
              </div>
  
              <div class="relative">
                <img
                  class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2 mr-[15px]"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                  alt=""
                />
  
                <img
                  class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Banner;
  