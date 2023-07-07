function Footer() {
  const yearToday = new Date().getFullYear()
  return (
    <footer className="bg-sky">
      <div className="py-10 font-sans text-sky-darker mx-12 md:mx-40">
        <div className="flex justify-between ">
          <h3 className="uppercase font-bold text-lg"><span className="font-semibold text-sm">rmfn</span> &copy; {yearToday}</h3>

          <h2 className="font-bold tracking-wider text-slate uppercase text-2xl"><span className="text-sky-darker">paw</span>sitivity</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer