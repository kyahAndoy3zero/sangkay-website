import Image from "next/image"


const HomeSection = () => {
  return (
  <div>
    <section className="grid grid-cols-2 gap-4 mt-10 max-md:grid-cols-1 sm:mt-0">
      <div className="py-10 text-center sm:text-left">
        <div>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-deeppink">
            Project Sangkay
          </h1>
          <p className="mt-2 font-sans text-lg text-slate-700 dark:text-slate-400">
            is an online service and program of SK Libas where people can get psychosocial and emotional help support for an emergency and emotional crisis. It's free and anonymous.
          </p>
          <button className="px-6 py-2 my-8 text-lg font-bold transition-all border rounded-full text-deeppink border-pink hover:bg-deeppink hover:text-white">Help Line</button>
        </div>
      </div>
      <div className="order-first md:mx-auto md:my-auto bg-opacity-80 md:order-last">
        <Image src='hero.svg' width={400} height={400} className="w-96 h-96" alt="connection"/>
      </div>
    </section>
  </div>


  )
}

export default HomeSection