import { createContext, useState, useEffect } from "react";

const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
  // const [isLoading, setIsLoading] = useState(true)

  const english = {
    heroText: {
      heading: 'Discover the world of',
      paragraph: 'We believe that the bond between humans and animals is transformative, bringing joy, companionship, and immeasurable benefits to our lives. Our website is dedicated to providing you with the knowledge, tools, and inspiration to create a happy, healthy, and harmonious life with your beloved pets.'
    },
    informationText: {
      heading: 'Do you know?',
      textBlocks: ['Pets provide unconditional love, companionship, and emotional support. Interacting with pets can help reduce feelings of loneliness, provide comfort during times of stress or sadness, and enhance overall emotional well-being.', 'Spending time with pets, such as playing, petting, or simply being in their presence, has been shown to lower stress levels. These interactions trigger the release of oxytocin (a hormone associated with bonding and relaxation) and decrease the production of cortisol (a stress hormone).', 'Pets have a positive impact on mood and can help alleviate symptoms of anxiety and depression. Engaging with pets can boost serotonin and dopamine levels in the brain, which are neurotransmitters associated with happiness.', 'Pet ownership can facilitate social interactions and increase social support. Pets serve as icebreakers and conversation starters, helping individuals connect with others, especially in community settings such as parks or pet-related events.', 'Owning a pet often requires physical activity, such as walking a dog or playing with a cat, which promotes regular exercise. Regular physical activity has numerous mental health benefits, including reducing symptoms of anxiety, and depression.']
    },
    bannerText: {
      heading: 'Stress relieving with pets',
      paragraph: 'Find what activities and interactions bring both you and your pet the most joy and relaxation, and make them a regular part of your routine to effectively relieve stress and strengthen your bond.'
    },
    tipsText: {
      heading: 'Follow these tips...',
      tips: [
        {
          title: 'Practice Deep Breathing with Your Pet',
          description: 'Sit in a calm and quiet space with your pet, and practice deep breathing exercises together. Take slow, deep breaths in and out, focusing on the rise and fall of your pet\'s chest as well. This synchronized breathing can help create a sense of relaxation and promote a calming atmosphere.'
        },
        {
          title: 'Create a Routine',
          description: 'Establishing a consistent routine for you and your pet can bring a sense of structure and predictability to your daily lives. Pets thrive on routine, and knowing what to expect can help reduce their stress levels, which, in turn, can positively influence your own stress levels.'
        },
        {
          title: 'Explore Nature Together',
          description: 'Take your pet for outdoor adventures in nature. Whether it\'s going for hikes, exploring local parks, or simply spending time in your backyard, immersing yourself in nature with your pet can provide a soothing and rejuvenating experience, helping to alleviate stress and promote well-being.'
        },
        {
          title: 'Share Affectionate Moments',
          description: 'Show love and affection to your pet through gentle strokes, cuddles, or even giving them a massage. This physical connection can release oxytocin, the "feel-good" hormone, in both you and your pet, promoting a sense of calm and reducing stress for both parties.'
        },
        {
          title: 'Practice Pet-Assisted Therapy',
          description: 'Consider engaging in pet-assisted therapy activities with your pet, such as visiting nursing homes, hospitals, or participating in community programs. Sharing the joy and comfort of your pet with others in need can be a rewarding and stress-relieving experience for you while bringing happiness to those you visit.'
        },
        {
          title: 'Seek Support from Pet Communities',
          description: 'Connect with fellow pet owners through local or online pet communities. Sharing experiences, tips, and stories with like-minded individuals can provide emotional support, advice, and a sense of belonging, reducing feelings of stress and isolation.'
        }
      ]
    },
    bondText: {
      heading: 'Our bond matters',
      paragraph: 'Remember, each pet and their needs are unique, so pay attention to your pet\'s individual preferences and comfort levels when engaging in stress-relieving activities.',
      span: 'Your bond with your pet is a powerful source of comfort and support',
      paragraphContinue: ', so embrace and nurture it to foster a harmonious and stress-free relationship.'
    }
  }
  
  const filipino = {
    heroText: {
        heading: 'Tuklasing and mundo ng',
        paragraph: 'Naniniwala kami na ang ugnayan sa pagitan ng tao at animals ay nakapagbabago, nagdadala ng kasiyahan, companionship, at di-matatawarang benepisyo sa ating mga buhay. Ang aming website ay nakatuon sa pagbibigay sa iyo ng kaalaman, kagamitan, at inspirasyon upang makabuo ng masaya, maayos, at payapang buhay kasama ang iyong mga minamahal na pets.'
    },
    informationText: {
        heading: 'Alam mo ba?',
        textBlocks: ['Ang ating mga pets ay nagbibigay ng walang-sukat na pagmamahal, companionship, at emotional support. Ang pakiki-interact sa ating mga pets ay maaaring makatulong mabawasan ang ating pagkalungkot, mabigyan tayo ng comfort sa mga panahong tayo ay naiistress, at maaari rin mapagbuti pa lalo ang ating emotional well-being.', 'Ang paglalaan ng oras kasama ang ating mga pets, katulad ng pakikipaglaro sakanila o kahit ang simpleng presensiya nila saatin ay napatunayan na nakakapagpababa ng stress levels. Ito ay nakakatrigger ng release ng oxytocin (isang hormone na associated sa bonding at relataxion) at pagbaba ng produksyon ng cortisol (isang stress hormone)', 'Ang mga pets ay may positibong epekto sa mood at makatutulong upang mabawasan ang mga sintomas ng anxiety at depresyon. Ang pakikisama natin sa ating mga pets ay maaaring magboost ng serotonin at dopamine levels sa ating brain, na mga neurotransmitters na may konekta sa ating hapiness.', 'Ang pagkakaroon ng pet ay maaaring makapagpabuti ng ating social interaction at social support. Ang pakikipag-usap tungkol sa mga pets ay maaaring gawing icebreakers at conversation starters, na makakatulong makapag-ugnay sa mga indibidwal, lalo na sa mga lugar tulad ng parks o pet-related events.', 'Sa pag-aalaga ng pets, kailangan nito ng physical activity tulad ng paglalakad kasama ng aso o pakikipaglaro sa pusa. Ang mga ito ay nakakapag-promote ng regular exercise. Ang regular physical activity ay maraming mental health benefits katulad nga ng pagpapababa ng sintomas ng anxiety at depresyon.']
    },
    bannerText: {
        heading: 'Stress relieving kasama ang pets',
        paragraph: 'Alamin kung anong mga activities at interactions na makakapagbigay sayo at sa iyong pet ng kasiyahan at relaxation, at gawin itong regular na parte ng iyong routine para epektibong maibsan ang iyong stress at maipagpatatag ang bond ng iyong pet.'
    },
    tipsText: {
        heading: 'Sundan ang mga tips...',
        tips: [
          {
            title: 'Praktisin ang Deep Breathing kasama ang iyong pet',
            description: 'Umupo sa kalmado at tahimik na space kasama ang iyong pet at magkasama ninyong praktisin ang deep breathing exercises. Huminga ng malalim at mabagal, at magfocus din sa pagtaas at pagbaba ng chest ng iyong pet sa kaniyang paghinga. Ang synchronized breathing na ito ay makakatulong makabuo ng sense of relaxation at maka-promote ng calming atmosphere.'
          },
          {
            title: 'Bumuo ng Routine',
            description: 'Ang pagbuo ng consistent na routine para sa inyo ng iyong pet ay makakapagdala ng sense of structure and predictability sa iyong pang araw-araw na buhay. Ang ating pets ay nagta-thrive sa mga routines, at ang mga ito ay nakakatulong pababain ang kanilang stress levels, na siyang positibong makakaimpluwensiya rin sa ating sariling stress levels.'
          },
          {
            title: 'Tuklasin and Nature ng magkasama',
            description: 'Dalhin ang iyong pet sa mga outdoor adventures in nature. Maging hiking man, pagtuklas ng local parks, o simpleng pag-lalaan ng oras magkasama sa inyong bakuran, ang interaksyon sa nature kasama ang iyong pet ay makakapagbigay ng soothing at rejuvenating na experience na siyang makakatulong maibsan ang stress at ma-promote ang well-being.'
          },
          {
            title: 'Magbahagi ng Affectionate Moments',
            description: 'Magpakita ng pagmamahal at affection sa iyong pet sa pamamagitan ng paghimas, paglalambing, o kahit pagbibigay sakanila ng masahe. Ang mga pisikal na koneksyon na ito ay nakakapagrelease ng oxytocin, ang "feel-good" hormone, para sa inyo parehas ng iyong pet, na siyang nakakapag-promote ng sense of calmness na nakakapagpababa ng stress.'
          },
          {
            title: 'Praktisin ang Pet-Assisted Therapy',
            description: 'I-consider na mag-engage sa pet-assisted therapy activities kasama ang iyong alaga, katulad ng pagbisita sa mga nursing homes, mga ospital, o pagpa-participate sa mga community programs. Ang pagbabahagi ng kasiyahan at comfort ng ating pet sa ibang tao ay isang mapagpala at stress-relieving na experience para sa atin at sa kabilang banda ay ito naman ay nagdadala ng kasiyahan sa mga taong nabahagian natin. '
          },
          {
            title: 'Maghanap ng suporta sa mga Pet Communities',
            description: 'Makipagkonekta sa ibang mga pet owners sa pamamagitan ng mga lokal o online na pet communities. Ang pagbabahagi ng mga experiences, tips, at mga storya sa ibang indibidwal na katulad mo ay makakapag-provide sa iyo ng emotional support, advice, at sense of belonging, na nakakapagpababa ng pakiramdam ng stress at isolation.'
          }
        ]
    },
    bondText: {
        heading: 'Ang ating samahan ay mahalaga',
        paragraph: 'Tandaan na ang pangangailangan ng bawat alagang hayop ay unique kung kaya kailangan nating pagtuunan ng atensyon ang mga indibidwal na preference at comfort levels ng ating mga alaga tuwing tayo ay nage-engage sa mga stress-relieving activities.',
        span: 'Ang ating samahan sa ating mga alaga ay isang makapangyarihang source ng comfort at support',
        paragraphContinue: ', kaya sikapin natin itong pagbutihin at pagtibayin para sa isang matiwasay at mapayapang relasyon.'
    }
  }

  const [content, setContent] = useState(english)

  const changeToEnglish = () => {
    setContent((prevState) => ({...prevState, ...english}))
  }

  const changeToFilipino = () => {
    setContent((prevState) => ({...prevState, ...filipino}))
  }

  return <LanguageContext.Provider value={{
    content,
    changeToEnglish,
    changeToFilipino
  }}>
    {children}
  </LanguageContext.Provider>
}

export default LanguageContext