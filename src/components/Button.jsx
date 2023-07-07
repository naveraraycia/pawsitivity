function Button({children, color}) {
  return (
    <button className={`${color === 'yellow' && 'bg-highlight-yellow hero-btn'} tracking-widest font-extrabold text-slate uppercase text-md py-4 px-10 duration-200 md:text-lg`}>{children}</button>
  )
}

export default Button