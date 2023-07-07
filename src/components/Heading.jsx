function Heading({text, highlight, size, smSize, smEnabled, mdEnabled, mdSize}) {
  return (
    <span data-aos="zoom-in" className={`uppercase font-extrabold text-slate max-w-lg ${size === '5xl' ? 'text-5xl': size === '2xl' ? 'text-2xl' : size === '3xl' ? 'text-3xl' : 'text-4xl' } tracking-wider ${smEnabled && smSize === '5xl' ? 'sm:text-5xl' : smEnabled && smSize === '3xl' ? 'sm:text-3xl' : 'sm:text-4xl'} ${mdEnabled && mdSize === '6xl' && 'md:text-6xl'} ${highlight === 'pink' ? 'pink-highlight-text' : highlight === 'blue' ? 'blue-highlight-text': highlight === 'lavender' ? 'lavender-highlight-text' : 'yellow-highlight-text'}`}>{text}</span>
  )
}

export default Heading