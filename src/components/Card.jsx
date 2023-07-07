function Card({children, shadow, height}) {
  return (
    <div id="card" className={`py-5 px-10 text-xs text-slate text-left bg-white text-light font-sans tracking-widest leading-6 max-w-2xl ${shadow === 'blue' && 'blue-box'} xl:text-sm xl:px-20 xl:py-8 xl:leading-7 ${height === 'full'&& 'h-full'}`}>
      {children}
    </div>
  )
}

export default Card