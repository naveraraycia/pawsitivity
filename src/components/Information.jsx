import { useContext } from 'react'
import LanguageContext from '../context/languageContext'
import Card from './Card'
import gingerCat from '../assets/imgs/ginger-cat.jpg'
import blueCat from '../assets/imgs/cat-blue.jpg'
import pug from '../assets/imgs/pug.jpg'
import greenDog from '../assets/imgs/green-dog.jpg'

function Information() {
  const {content} = useContext(LanguageContext)

  return (
    <>
      <div className="flex flex-col space-y-10 justify-center items-center mt-14 lg:mt-24 lg:flex-row lg:space-y-0 lg:space-x-28">
            <img data-aos="fade-right" data-aos-delay="150" src={gingerCat} alt="cat" className="w-[250px] xl:w-[340px] lg:block" />

            <div className="space-y-10">
              <div data-aos="fade-left" data-aos-delay="400">
                <Card shadow={'blue'}>
                  {content.informationText.textBlocks[0]}
                </Card>
              </div>
              <div data-aos="fade-left" data-aos-delay="600">
                <Card shadow={'blue'}>
                {content.informationText.textBlocks[1]}
                </Card>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-10 mt-10 lg:space-y-0 lg:mt-52 lg:flex-row lg:space-x-10">
            <div className="lg:w-1/3" data-aos="fade-right" data-aos-delay="150">
            <Card shadow={'blue'} height={'full'}>
              <div className="space-y-5 flex flex-col items-center">
                <img src={blueCat} alt="cat" className="rounded-full w-[100px]" />

                <p>{content.informationText.textBlocks[2]}</p>
              </div>
            </Card>
            </div>
            <div className="lg:w-1/3"  data-aos="fade-right" data-aos-delay="400">
            <Card shadow={'blue'} height={'full'}>
              <div className="space-y-5 flex flex-col items-center">
                <img src={pug} alt="cat" className="rounded-full w-[100px] bg-cover bg-center" />

                <p>{content.informationText.textBlocks[3]}</p>
              </div>
            </Card>
            </div>
            <div className="lg:w-1/3"  data-aos="fade-right" data-aos-delay="600">
            <Card shadow={'blue'} height={'full'}>
              <div className="space-y-5 flex flex-col items-center">
                <img src={greenDog} alt="cat" className="rounded-full w-[100px] bg-cover bg-center" />

                <p>{content.informationText.textBlocks[4]}</p>
              </div>
            </Card>
            </div>
          </div>
    </>
  )
}

export default Information