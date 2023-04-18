import Image from 'next/image'

const HangkopSection = () => {
  return (
    <div className='mt-44'>
         <section className="grid grid-cols-2 gap-4 my-16 max-md:grid-cols-1">

             <div className="md:mx-auto md:my-auto bg-opacity-80 ">
                <Image src='pfaproviders.svg' width={350} height={350} alt='pfa-providers' priority/>
            </div>  
            <div className="py-10">

                <div>
                    <h1 className="mb-4 text-5xl font-extrabold text-deeppink">
                        PFA Providers
                    </h1>

                    <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                    is an online service and program of SK Libas where people can get psychosocial and emotional help support for an emergency and emotional crisis. It's free and anonymous.
                    </p>

                    <button className="py-4 my-8 text-lg font-bold underline transition-all rounded-full text-pink hover:text-deeppink">See providers</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HangkopSection