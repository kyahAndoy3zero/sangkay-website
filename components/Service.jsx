import Image from "next/image"

const Service = () => {
  return (
    <div className="mt-48">
    <section className="grid grid-cols-3 gap-4 max-md:grid-cols-1 ">
      <div className="mb-10 text-center">
        <div>
          <Image src='connection.svg' width={170} height={190} className="mx-auto mb-10" alt="connection"/>
          <h2 className="mb-4 text-2xl font-bold">
            Connectedness
          </h2>
        </div>
      </div>
      <div className="mb-10 text-center">
        <div>
          <Image src='calm.svg' width={200} height={200} className="mx-auto mb-10" alt="connection"/>
          <h2 className="mb-4 text-2xl font-bold">
          Calm & Comfort
          </h2>
        </div>
      </div>
      <div className="text-center ">
        <div>
          <Image src='empowerment.svg' width={180} height={180}  className="mx-auto mb-10" alt="connection"/>
          <h2 className="mb-4 text-2xl font-bold">
          Self-Empowerment
          </h2>
        </div>
      </div>
    </section>
  </div>

  )
}

export default Service