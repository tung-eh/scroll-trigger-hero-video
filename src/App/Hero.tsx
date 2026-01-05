const clientLogos = [
  {
    src: '/client-logo-01.svg',
  },
  {
    src: '/client-logo-02.svg',
  },
  {
    src: '/client-logo-03.svg',
  },
  {
    src: '/client-logo-04.svg',
  },
]

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <canvas></canvas>

      <div className="absolute left-0 top-0 h-[50vh] w-full text-foreground flex flex-col items-center justify-center gap-6 py-2">
        <h1 className="text-center max-w-3xl">
          One unified workspace to build, test, and ship AI faster
        </h1>
        <p className="uppercase text-[0.8rem] font-medium opacity-35">
          Trusted by
        </p>
        <div className="flex gap-4">
          {clientLogos.map(({ src }) => (
            <div>
              <img src={src} className="h-7" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-1/2 flex items-center justify-center">
        <img src="/dashboard.png" className="opacity-0" />
      </div>
    </section>
  )
}

export default Hero
