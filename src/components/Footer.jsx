function Footer() {
  const yearToday = new Date().getFullYear()
  return (
    <footer className="bg-sky">
      <div className="py-10 font-sans text-sky-darker px-5">
        <div className="flex justify-between px-5 mx-auto w-full max-w-6xl">
          <h3 className="uppercase font-bold text-lg"><span className="font-semibold text-sm">rmfn</span> &copy; {yearToday}</h3>

          <h2 className="font-bold tracking-wider text-slate uppercase text-2xl"><span className="text-sky-darker">paw</span>sitivity</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer