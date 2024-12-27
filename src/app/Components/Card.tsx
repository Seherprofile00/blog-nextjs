import React from 'react'
import Image from 'next/image'
import card01 from "@/app/Public/download (3).jpeg"
import card02 from "@/app/Public/NextJs Development Company in India.jpeg"
import card03 from "@/app/Public/download (5) (1).jpeg"
import card04 from "@/app/Public/download (6).jpeg"

const Card = () => {
  return (
    <>
    <section>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Pitchfork Kickstarter Taxidermy
        </h1>
        <div className="h-1 w-20 bg-pink-400 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-400 hover:bg-pink-300  p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={card01}
            alt="content"
          />
          <h3 className="tracking-widest text-white text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            Chichen Itza
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-400 hover:bg-pink-300   p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={card02}
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Colosseum Roma
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-400 hover:bg-pink-300  p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={card03}
            
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Great Pyramid of Giza
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-400 hover:bg-pink-300  p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={card04}
            alt="content"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            San Francisco
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
   
        
        
        
        </section></>
  )
}

export default Card