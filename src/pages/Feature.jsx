import React from 'react'
import FeatureBan from "../assets/Hero.png"
import Trust1 from "../assets/trust1.png"
import Trust2 from "../assets/trust2.png"
import Trust3 from "../assets/trust3.png"
import Trust4 from "../assets/trust4.png"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from ".././Components/ui/accordion"
const Feature = () => {
  return (
  <>
    <section className='bg-[#1C1E53] xl:h-[625px] sm:h-[790px] lg:h-[630px] xs:h-[710px] md:h-[910px] px-0'>
       <div className="container  lg:max-w-screen-xl mx-auto">
       <section class="flex flex-col lg:pt-[65px] justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        
        <div class="flex pt-[100px]  flex-col justify-start sm:text-center lg:py-12 lg:text-left">
          
   
          <h1 class="mb-8 text-4xl font-bold text-white xs:text-center sm:text-5xl md:mb-12 md:text-6xl">All the features you need</h1>
   
          <p class="mb-8 leading-relaxed xs:text-center text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   
          <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#" class="inline-block rounded-lg bg-[#FCD980] px-8 py-3 text-center text-sm font-semibold text-black hover:text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">View Pricing</a>
   
           
          </div>
        </div>
       
   
        
        <div class=" lg:h-auto lg:mt-[115px] xl:w-5/12">
          <img src={FeatureBan} loading="lazy" alt="Photo by Fakurian Design" class="mx-auto object-cover object-center" />
        </div>
       
      </section>
       </div>
    
      
   
      
     
      </section>

      <div className="">

      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Trusted by the best</h2>

    <div class="grid grid-cols-5 gap-2 rounded-lg bg-gray-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-4">
      
      <div class="flex justify-center text-gray-400">
        <img src={Trust1}/>
      </div>
     
      <div class="flex justify-center text-gray-400">
       <img src={Trust2}/>
      </div>
    
      <div class="flex justify-center text-gray-400">
      <img src={Trust3}/>
      </div>
     
      <div class="flex justify-center text-gray-400">
      <img src={Trust4}/>
      </div>
      
      
    </div>
  </div>
</div>
      </div>



      <div className="">
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
   
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our competitive advantage</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
   

    <div class="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
    
      <div class="flex flex-col items-center">
        <div class="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>

        <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">Growth</h3>
        <p class="mb-2 text-center text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
        <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
      </div>
     
      <div class="flex flex-col items-center">
        <div class="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">Security</h3>
        <p class="mb-2 text-center text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
        <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
      </div>
      
      <div class="flex flex-col items-center">
        <div class="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>

        <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">Cloud</h3>
        <p class="mb-2 text-center text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
        <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
      </div>
      
      <div class="flex flex-col items-center">
        <div class="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">Speed</h3>
        <p class="mb-2 text-center text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
        <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
      </div>
     
      <div class="flex flex-col items-center">
        <div class="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>

        <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">Support</h3>
        <p class="mb-2 text-center text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
        <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
      </div>
      
      <div class="flex flex-col items-center">
        <div class="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>

        <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">Dark Mode</h3>
        <p class="mb-2 text-center text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
        <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
      </div>
      
    </div>
  </div>
</div>
      </div>


      <div className="">
      <section className='container mx-auto max-w-screen-xl h-[400px]'>
        <div className="flex justify-between mt-[100px]">
            <div className="">
                <h1 className='font-bold text-[35px]'>Frequently asked questions</h1>
                <a className='leading-[55px] font-semibold text-[18px] hover:text-[blue] text-[#1C1E53]'>Contact us for more info</a>
            </div>
            <div className="w-[700px]">
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>How much time does it take?</AccordionTrigger>
                          <AccordionContent>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>What is your class naming convention?</AccordionTrigger>
                          <AccordionContent>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>How do you communicate?</AccordionTrigger>
                          <AccordionContent>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>I have a bigger project. Can you handle it?</AccordionTrigger>
                          <AccordionContent>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>What is your class naming convention?</AccordionTrigger>
                          <AccordionContent>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

            </div>
        </div>
    </section>
      </div>
  </>
      



  )
}

export default Feature
