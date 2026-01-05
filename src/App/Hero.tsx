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
    <section>
      <canvas></canvas>

      <div>
        <h1>One unified workspace to build, test, and ship AI faster</h1>
        <p>Trusted by</p>
        <div>
          {clientLogos.map(({ src }) => (
            <div>
              <img src={src} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <img src="/dashboard.png" />
      </div>
    </section>
  )
}

export default Hero
