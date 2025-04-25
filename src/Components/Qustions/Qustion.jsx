import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"
  
const Qustion = () => {
  return (
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
  )
}

export default Qustion
