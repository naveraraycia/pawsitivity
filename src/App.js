import { useRef, useContext } from "react";
import { LanguageProvider } from "./context/languageProvider";
import LanguageContext from "./context/languageProvider";
import Navbar from "./components/Navbar";
import heroImg from './assets/imgs/hero-svg.svg'
import kittens from './assets/imgs/kitten-svg.svg'
import dogOcean from './assets/imgs/dog-landscape.jpg'
import Tips from "./components/Tips";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Information from "./components/Information";
import FixedLanguageBtn from "./components/FixedLanguageBtn";

function App() {
  const elementRef = useRef(null)
  const scrollToElement = () => elementRef.current.scrollIntoView()

  const {content, changeToEnglish, changeToFilipino} = useContext(LanguageContext);

  const heroTopText = content.heroText.heading.split(' ')[0]
  let heroRemainingText = content.heroText.heading.split(' ')
  heroRemainingText.shift()
  
  heroRemainingText = `${heroRemainingText[0]} ${heroRemainingText[1]} ${heroRemainingText[2]}`
  
  return (
    <>
      <FixedLanguageBtn />
      <section id="hero" className="bg-sky">
        <Navbar />

        <div className="flex font-sans justify-between py-16 mx-12 md:mx-40 md:space-x-10">
          <div className="flex flex-col space-y-5">
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-3">
                <div className="font-bold text-4xl text-sky-darker md:text-5xl md:space-y-1">
                  <h2>{heroTopText}</h2>
                  <h2>{heroRemainingText}</h2>
                </div>

                <Heading text={'pawsitivity'} size={'5xl'} mdEnabled={true} mdSize={'6xl'} />
                
              </div>

              <p className="font-light text-slate max-w-lg text-md md:text-lg">{content.heroText.paragraph}</p>

              <div onClick={scrollToElement} className="w-fit">
                <Button color="yellow">learn more</Button>
              </div>

            </div>
          </div>
          
          <img src={heroImg} alt="hero" className="hidden lg:w-[450px] lg:block" />
        </div>
      </section>

      {/* ---------------------------------------------------------- */}

      <section id="information" className="bg-lighter-pink">
        <div className="text-center py-32 mx-12 md:mx-40">
          <Heading text={content.informationText.heading} size={'4xl'} smEnabled={true} smSize={'5xl'} highlight={'blue'} />

          <Information />
   
        </div>
      </section>

      {/* ---------------------------------------------------------- */}

      <section id="banner" className="bg-lavender">
        <div className="py-32 font-sans text-slate mx-12 md:mx-40 flex justify-between items-center">
          <div className="space-y-10">

            <Heading text={content.bannerText.heading} highlight={'pink'} size={'2xl'} smEnabled={true} smSize={'4xl'} />

            <p className="font-light max-w-lg text-md md:text-lg">{content.bannerText.paragraph}</p>
          </div>

          <img src={kittens} alt="kittens" className="hidden lg:w-[300px] lg:block xl:w-[350px]" />

        </div>
      </section>

      {/* ---------------------------------------------------------- */}

      <section id="tips" className="bg-lighter-pink">
        <div ref={elementRef} className="py-32 font-sans flex flex-col items-center text-slate mx-12 md:mx-40">

          <Heading text={content.tipsText.heading} size={'3xl'} smEnabled={true} smSize={'4xl'} highlight={'lavender'} />
       
          <Tips />

        </div>
      </section>

      {/* ---------------------------------------------------------- */}

      <section id="bond" className="bg-pastel-yellow">
        <div className="flex flex-col font-sans text-slate py-32 px-12 space-y-10 justify-center items-center lg:flex-row  lg:space-y-0 lg:space-x-20">
          <img src={dogOcean} alt="dog bond" className="w-[800px]  lg:w-[600px] lg:rounded-none" />

          <div className="flex flex-col space-y-16">
            <div className="space-y-7">

              <Heading text={content.bondText.heading} smEnabled={true} smSize={'4xl'} size={'3xl'} highlight={'blue'} />

              <p className="font-light leading-7 lg:max-w-lg">{content.bondText.paragraph} <span className="font-bold">{content.bondText.span}</span>{content.bondText.paragraphContinue}</p>
            </div>

            <h4 className="font-bold text-3xl uppercase tracking-wider">stay <span className="text-sky-darker">paw</span>sitive!</h4>
          </div>
        </div>
      </section>

    <Footer />
      
    </>
   
  );
}

export default App;
