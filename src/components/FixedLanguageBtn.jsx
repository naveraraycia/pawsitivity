import { useContext } from "react"
import LanguageContext from "../context/languageContext"

function FixedLanguageBtn() {
  const {changeToEnglish, changeToFilipino} = useContext(LanguageContext)

  const handleChangeToEnglish = (e) => {
    e.preventDefault()
    changeToEnglish()
  }

  const handleChangeToFilipino = (e) => {
    e.preventDefault()
    changeToFilipino()
  }

  return (
    <div className="fixed bottom-10 right-16 z-50">
      <div className="flex space-x-5">
        <button onClick={handleChangeToEnglish} className="rounded-3xl bg-white text-slate font-bold tracking-wider font-sans uppercase py-3 px-5 blue-box duration-200">eng</button>
        <button onClick={handleChangeToFilipino} className="rounded-3xl bg-white text-slate font-bold tracking-wider font-sans uppercase py-3 px-5 blue-box duration-200">fil</button>
      </div>
    </div>
  )
}

export default FixedLanguageBtn