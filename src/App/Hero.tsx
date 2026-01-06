import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

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

const frameCount = 240
const getFrameSrc = (index: number) =>
  `/frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const dashboardImgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    // set canvas size
    const pixelRatio = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * pixelRatio
    canvas.height = window.innerHeight * pixelRatio
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
    context.scale(pixelRatio, pixelRatio)

    const images: HTMLImageElement[] = []
    let loadedCount = 0

    const renderImage = (index: number) => {
      const canvasWidth = window.innerWidth
      const canvasHeight = window.innerHeight
      context.clearRect(0, 0, canvasWidth, canvasHeight)

      const img = images[index]

      context.drawImage(img, 0, 0, canvasWidth, canvasHeight)
    }

    const setupScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * 7}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const animationProgress = Math.min(progress / 0.9, 1)
          const targetFrame = Math.round(animationProgress * (frameCount - 1))
          renderImage(targetFrame)
        },
      })
    }

    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      img.onload = () => {
        loadedCount++
        if (loadedCount === frameCount) {
          renderImage(0)
          setupScrollTrigger()
        }
      }
      img.src = getFrameSrc(i)
      images.push(img)
    }
  }, [])

  useGSAP(() => {
    gsap.to(headerRef.current, {
      z: -500,
      scrollTrigger: {
        start: 'top top',
        end: `+=${(window.innerHeight * 7) / 4}px`,
        scrub: true,
      },
    })
    gsap.to(headerRef.current, {
      opacity: 0,
      scrollTrigger: {
        start: `top+=${(window.innerHeight * 7) / 5}px top`,
        end: `top+=${(window.innerHeight * 7) / 4}px`,
        scrub: true,
      },
    })
  })

  useGSAP(() => {
    gsap.set(dashboardImgRef.current, {
      x: '-50%',
      y: '-50%',
      z: 1000,
    })
    gsap.to(dashboardImgRef.current, {
      z: 0,
      scrollTrigger: {
        start: `top+=${window.innerHeight * 7 * 0.6}px top`,
        end: `top+=${window.innerHeight * 7 * 0.9}px`,
        scrub: true,
      },
    })
    gsap.to(dashboardImgRef.current, {
      opacity: 1,
      scrollTrigger: {
        start: `top+=${window.innerHeight * 7 * 0.6}px top`,
        end: `top+=${window.innerHeight * 7 * 0.8}px`,
        scrub: true,
      },
    })
  })

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden transform-3d perspective-[1000px]"
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>

      <div
        ref={headerRef}
        className="absolute left-0 top-0 h-[50vh] w-full text-foreground flex flex-col items-center justify-center gap-6 py-2 px-8"
      >
        <h1 className="text-center max-w-3xl">
          One unified workspace to build, test, and ship AI faster
        </h1>
        <p className="uppercase text-[0.8rem] font-medium opacity-35">
          Trusted by
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {clientLogos.map(({ src }) => (
            <div key={src}>
              <img src={src} className="h-7" />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={dashboardImgRef}
        className="absolute top-1/2 left-1/2 w-1/2 flex items-center justify-center opacity-0"
      >
        <img src="/dashboard.png" />
      </div>
    </section>
  )
}

export default Hero
