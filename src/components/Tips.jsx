import Card from "./Card"
import { useContext } from "react"
import LanguageContext from "../context/languageProvider"

function Tips() {
  const {content} = useContext(LanguageContext)
  const tips = content.tipsText.tips
  return (
    <>
         <div className="flex flex-col mt-20 space-y-10 xl:space-y-0 xl:space-x-5 xl:flex-row">
            <div className="xl:w-1/3">
              <Card height='full'>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">{tips[0].title}</h4>
                  <p className="font-light leading-5">{tips[0].description}</p>
                </div>
              </Card>
            </div>
            <div className="xl:w-1/3">
              <Card height={'full'}>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">{tips[1].title}</h4>
                  <p className="font-light leading-5">{tips[1].description}</p>
                </div>
              </Card>
            </div>
            <div className="xl:w-1/3">
              <Card height={'full'}>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">{tips[2].title}</h4>
                  <p className="font-light leading-5">{tips[2].description}.</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex flex-col mt-5 space-y-10 xl:space-y-0 xl:space-x-5 xl:flex-row">
            <div className="xl:w-1/3">
              <Card height='full'>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">{tips[3].title}</h4>
                  <p className="font-light leading-5">{tips[3].description}</p>
                </div>
              </Card>
            </div>
            <div className="xl:w-1/3">
              <Card height={'full'}>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">{tips[4].title}</h4>
                  <p className="font-light leading-5">{tips[4].description}</p>
                </div>
              </Card>
            </div>
            <div className="xl:w-1/3">
              <Card height={'full'}>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">{tips[5].title}</h4>
                  <p className="font-light leading-5">{tips[5].description}</p>
                </div>
              </Card>
            </div>
          </div>
    </>
  )
}

export default Tips