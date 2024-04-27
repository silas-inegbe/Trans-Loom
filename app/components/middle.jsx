const HowItWorks = () => {
  return (
    <section className="py-10 bg-gradient-to-t from-[#52796f]  to-gray-800  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-lg leading-relaxed text-gray-100">
            TransLoom is a translation tool that allows you to translate your
            text to any language of your choice. It is easy to use and swift.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-[#66a9c9] rounded-full shadow">
                <span className="text-xl font-semibold text-[#52796f]"> 1 </span>
              </div>
              <h3 className="mt-6 text-2xl lg:text-3xl font-semibold leading-tight text-[#66a9c9]  md:mt-10">
                Create a free account
              </h3>
              <p className="mt-4 text-base text-white ">
                First you need to create an account to start using TransLoom.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-[#66a9c9] rounded-full shadow">
                <span className="text-xl font-semibold text-[#52796f]"> 2 </span>
              </div>
              <h3 className="mt-6 text-2xl lg:text-3xl font-semibold leading-tight text-[#66a9c9]  md:mt-10">
                Type your text
              </h3>
              <p className="mt-4 text-base text-gray-100 ">
                Type or paste the text you want to translate into the input box.

              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-[#66a9c9] rounded-full shadow">
                <span className="text-xl font-semibold text-[#52796f]"> 3 </span>
              </div>
              <h3 className="mt-6 text-2xl lg:text-3xl font-semibold leading-tight text-[#66a9c9]  md:mt-10">
                Translate to any language
              </h3>
              <p className="mt-4 text-base text-gray-200 ">
                Choose the language you want to translate your text to and click
                the translate button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
