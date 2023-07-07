import Navbar from "./components/Navbar";
import heroImg from './assets/imgs/hero-svg.svg'
import gingerCat from './assets/imgs/ginger-cat.jpg'
import blueCat from './assets/imgs/cat-blue.jpg'
import pug from './assets/imgs/pug.jpg'
import greenDog from './assets/imgs/green-dog.jpg'
import Card from "./components/Card";

function App() {
  return (
    <>
      <section id="hero" className="bg-sky">
        <Navbar />

        <div className="flex font-sans justify-between py-16 mx-12 md:mx-40 md:space-x-10">
          <div className="flex flex-col space-y-5">
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-3">
                <div className="font-bold text-4xl text-sky-darker md:text-5xl md:space-y-1">
                  <h2>Discover</h2>
                  <h2>the world of</h2>
                </div>

                <span id="hero-brand" className="uppercase font-extrabold text-slate text-5xl tracking-wider md:text-6xl ">pawsitivity</span>
              </div>

              <p className="font-light text-slate max-w-lg text-md md:text-lg">We believe that the bond between humans and animals is transformative, bringing joy, companionship, and immeasurable benefits to our lives. Our website is dedicated to providing you with the knowledge, tools, and inspiration to create a happy, healthy, and harmonious life with your beloved pets.</p>

              <button id="hero-btn" className=" bg-highlight-yellow tracking-widest font-extrabold text-slate uppercase text-md py-4 px-10 duration-200 md:text-lg">learn more</button>
            </div>
          </div>
          
          <img src={heroImg} alt="hero" className="lg:w-[450px] hidden lg:block" />
        </div>
      </section>

      <section id="information" className="bg-lighter-pink">
        <div className="text-center py-40 mx-12 md:mx-40">
          <span id="information-heading" className="uppercase font-extrabold text-slate text-4xl tracking-wider sm:text-5xl">do you know?</span>

          <div className="flex flex-col space-y-10 justify-center items-center mt-14 lg:mt-24 lg:flex-row lg:space-y-0 lg:space-x-28">
            <img src={gingerCat} alt="cat" className="rounded-[50px] w-[250px] xl:w-[340px] lg:block" />

            <div className="space-y-10">
              <Card shadow={'blue'}>
                Pets provide unconditional love, companionship, and emotional support. Interacting with pets can help reduce feelings of loneliness, provide comfort during times of stress or sadness, and enhance overall emotional well-being.
              </Card>
              <Card shadow={'blue'}>
              Spending time with pets, such as playing, petting, or simply being in their presence, has been shown to lower stress levels. These interactions trigger the release of oxytocin (a hormone associated with bonding and relaxation) and decrease the production of cortisol (a stress hormone).
              </Card>
            </div>
          </div>

          <div className="flex flex-col space-y-10 mt-10 lg:space-y-0 lg:mt-32 lg:flex-row lg:space-x-10">
            <div className="lg:w-1/3">
            <Card shadow={'blue'} height={'full'}>
              <div className="space-y-5 flex flex-col items-center">
                <img src={blueCat} alt="cat" className="rounded-full w-[100px]" />

                <p>Pets have a positive impact on mood and can help alleviate symptoms of anxiety and depression. Engaging with pets can boost serotonin and dopamine levels in the brain, which are neurotransmitters associated with happiness.</p>
              </div>
            </Card>
            </div>
            <div className="lg:w-1/3">
            <Card shadow={'blue'} height={'full'}>
              <div className="space-y-5 flex flex-col items-center">
                <img src={pug} alt="cat" className="rounded-full w-[100px] bg-cover bg-center" />

                <p>Pet ownership can facilitate social interactions and increase social support. Pets serve as icebreakers and conversation starters, helping individuals connect with others, especially in community settings such as parks or pet-related events.</p>
              </div>
            </Card>
            </div>
            <div className="lg:w-1/3">
            <Card shadow={'blue'} height={'full'}>
              <div className="space-y-5 flex flex-col items-center">
                <img src={greenDog} alt="cat" className="rounded-full w-[100px] bg-cover bg-center" />

                <p>Owning a pet often requires physical activity, such as walking a dog or playing with a cat, which promotes regular exercise. Regular physical activity has numerous mental health benefits, including reducing symptoms of anxiety, and depression.</p>
              </div>
            </Card>
            </div>
          </div>
        </div>
      </section>
    </>
   
  );
}

export default App;
