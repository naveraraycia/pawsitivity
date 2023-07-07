function Heading({text, highlight, size, smSize, smEnabled, mdEnabled, mdSize}) {
  return (
    <span className={`uppercase font-extrabold text-slate max-w-lg text-${size} tracking-wider ${smEnabled && `sm:text-${smSize}`} ${mdEnabled && `md:text-${mdSize}`} ${highlight === 'pink' ? 'pink-highlight-text' : highlight === 'blue' ? 'blue-highlight-text': highlight === 'lavender' ? 'lavender-highlight-text' : 'yellow-highlight-text'}`}>{text}</span>
  )
}

export default Heading