import React from 'react'
import HeroImg from "../../assets/Hero.png"
const Hero = () => {
  return (
   <section className='bg-[#1C1E53] xl:h-[625px] sm:h-[790px] lg:h-[630px] xs:h-[710px] md:h-[910px] px-0'>
    <div className="container  lg:max-w-screen-xl mx-auto">
    <section class="flex flex-col lg:pt-[65px] justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
     
     <div class="flex pt-[100px]  flex-col justify-start sm:text-center lg:py-12 lg:text-left">
       

       <h1 class="mb-8 text-4xl font-bold text-white xs:text-center sm:text-5xl md:mb-12 md:text-6xl">Building stellar websites for early startups</h1>

       <p class="mb-8 leading-relaxed xs:text-center text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

       <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
         <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

         <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
       </div>
     </div>
    

     
     <div class=" lg:h-auto lg:mt-[115px] xl:w-5/12">
       <img src={HeroImg} loading="lazy" alt="Photo by Fakurian Design" class="mx-auto object-cover object-center" />
     </div>
    
   </section>
    </div>
 
   

   
  
   </section>
  )
}

export default Hero
