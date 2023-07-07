import Card from "./Card"

function Tips() {
  return (
    <>
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
    </>
  )
}

export default Tips