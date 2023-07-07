import Navbar from "./components/Navbar";
import heroImg from './assets/imgs/hero-svg.svg'
import gingerCat from './assets/imgs/ginger-cat.jpg'
import blueCat from './assets/imgs/cat-blue.jpg'
import pug from './assets/imgs/pug.jpg'
import greenDog from './assets/imgs/green-dog.jpg'
import kittens from './assets/imgs/kitten-svg.svg'
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
          
          <img src={heroImg} alt="hero" className="hidden lg:w-[450px] lg:block" />
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

          <div className="flex flex-col space-y-10 mt-10 lg:space-y-0 lg:mt-52 lg:flex-row lg:space-x-10">
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

      <section id="banner" className="bg-lavender">
        <div className="py-40 font-sans text-slate mx-12 md:mx-40 flex justify-between items-center">
          <div className="space-y-10">
            <span id="banner-heading" className="uppercase font-extrabold text-slate text-2xl tracking-wider sm:text-4xl">stress relieving with pets</span>

            <p className="font-light max-w-lg text-md md:text-lg">Find what activities and interactions bring both you and your pet the most joy and relaxation, and make them a regular part of your routine to effectively relieve stress and strengthen your bond.</p>
          </div>

          <img src={kittens} alt="kittens" className="hidden lg:w-[300px] lg:block xl:w-[350px]" />

        </div>
      </section>

      <section id="tips" className="bg-lighter-pink">
        <div className="py-40 font-sans text-slate mx-12 md:mx-40">
          <span id="tips-heading" className="uppercase font-extrabold text-slate text-3xl tracking-wider sm:text-4xl">follow these tips...</span>

          <div className="flex flex-col mt-20 space-y-10 xl:space-y-0 xl:space-x-5 xl:flex-row">
            <div className="xl:w-1/3">
              <Card height='full'>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">Practice Deep Breathing with Your Pet</h4>
                  <p className="font-light leading-5">Sit in a calm and quiet space with your pet, and practice deep breathing exercises together. Take slow, deep breaths in and out, focusing on the rise and fall of your pet's chest as well. This synchronized breathing can help create a sense of relaxation and promote a calming atmosphere.</p>
                </div>
              </Card>
            </div>
            <div className="xl:w-1/3">
              <Card height={'full'}>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">Create a Routine</h4>
                  <p className="font-light leading-5">Establishing a consistent routine for you and your pet can bring a sense of structure and predictability to your daily lives. Pets thrive on routine, and knowing what to expect can help reduce their stress levels, which, in turn, can positively influence your own stress levels.</p>
                </div>
              </Card>
            </div>
            <div className="xl:w-1/3">
              <Card height={'full'}>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">Explore Nature Together</h4>
                  <p className="font-light leading-5">Take your pet for outdoor adventures in nature. Whether it's going for hikes, exploring local parks, or simply spending time in your backyard, immersing yourself in nature with your pet can provide a soothing and rejuvenating experience, helping to alleviate stress and promote well-being.</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex flex-col mt-5 space-y-10 xl:space-y-0 xl:space-x-5 xl:flex-row">
            <div className="xl:w-1/3">
              <Card height='full'>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">Share Affectionate Moments</h4>
                  <p className="font-light leading-5">Show love and affection to your pet through gentle strokes, cuddles, or even giving them a massage. This physical connection can release oxytocin, the "feel-good" hormone, in both you and your pet, promoting a sense of calm and reducing stress for both parties.</p>
                </div>
              </Card>
            </div>
            <div className="xl:w-1/3">
              <Card height={'full'}>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">Practice Pet-Assisted Therapy</h4>
                  <p className="font-light leading-5">Consider engaging in pet-assisted therapy activities with your pet, such as visiting nursing homes, hospitals, or participating in community programs. Sharing the joy and comfort of your pet with others in need can be a rewarding and stress-relieving experience for you while bringing happiness to those you visit.</p>
                </div>
              </Card>
            </div>
            <div className="xl:w-1/3">
              <Card height={'full'}>
                <div className="space-y-5 xl:text-xs">
                  <h4 className="font-semibold text-lg tracking-tight">Seek Support from Pet Communities</h4>
                  <p className="font-light leading-5">Connect with fellow pet owners through local or online pet communities. Sharing experiences, tips, and stories with like-minded individuals can provide emotional support, advice, and a sense of belonging, reducing feelings of stress and isolation.</p>
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
