const navLinks = [
  { href: '#', name: 'Overview' },
  { href: '#', name: 'Solutions' },
  { href: '#', name: 'Resources' },
]

const Navbar = () => {
  return (
    <nav>
      <div>
        {navLinks.map(({ href, name }) => (
          <a href={href}>{name}</a>
        ))}
      </div>
      <div>
        <a href="#">
          <img src="/logo.png" /> Byewind
        </a>
      </div>
      <div>
        <div>
          <a href="#">Live Demo</a>
        </div>
        <div>
          <a href="#">Get started</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
