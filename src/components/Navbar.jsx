function Navbar() {

  const toggleMenu = () => {
    const hamburgerIcon = document.getElementById('menu-btn'),
          mobileMenu = document.getElementById('menu')
          hamburgerIcon.classList.toggle('open')
          mobileMenu.classList.toggle('flex')
          mobileMenu.classList.toggle('hidden')
  }

  return (
    <div className=" py-6 px-12 md:px-40 md:py-10">
      <nav>
        <h4 className="uppercase font-sans font-bold text-slate text-2xl self-center"><span className="text-sky-darker">paw</span>sitivity</h4>
      </nav>

    </div>
  )
}

export default Navbar