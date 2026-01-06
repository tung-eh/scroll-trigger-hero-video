import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import Button from 'src/components/Button'

const navLinks = [
  { href: '#', name: 'Overview' },
  { href: '#', name: 'Solutions' },
  { href: '#', name: 'Resources' },
]

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.to(navRef.current, {
      opacity: 0,
      scrollTrigger: {
        start: 'top top',
        end: `+=${window.innerHeight * 0.7}px`,
        scrub: true,
      },
    })
  })

  return (
    <nav
      ref={navRef}
      className="fixed w-full grid lg:grid-cols-3 items-center gap-8 py-6 px-8 z-10"
    >
      <div className="hidden lg:flex gap-12">
        {navLinks.map(({ href, name }) => (
          <a
            key={name}
            href={href}
            className="uppercase text-[0.8rem] font-medium text-foreground"
          >
            {name}
          </a>
        ))}
      </div>
      <div>
        <a
          href="#"
          className="font-hg text-[1.5rem] font-medium text-foreground flex items-center justify-center gap-2"
        >
          <img src="/logo.png" className="w-6" /> Byewind
        </a>
      </div>
      <div className="hidden lg:flex justify-end gap-6">
        <a href="#">
          <Button>Live Demo</Button>
        </a>
        <a href="#">
          <Button variant="secondary">Get started</Button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
