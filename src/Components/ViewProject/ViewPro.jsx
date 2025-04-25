import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
 import Pro1 from "../../assets/pro1.png"
 import Pro2 from "../../assets/pro2.png"
 import Pro3 from "../../assets/pro3.png"


const ViewPro = () => {
    return (
        <section className=' bg-[#F4F6FC] h-[500px]'>
            <div className="flex max-w-screen-xl container mx-auto pt-[50px] justify-between">
                <h1 className='font-bold text-[35px]'>View our projects</h1>
                <a className='flex items-center  text-[15px] hover:text-[blue] font-medium gap-2'>View More <FaAngleRight />
                </a>
            </div>
            <div className="container max-w-screen-xl mx-auto flex justify-between mt-[100px]">
                <Carousel className='w-[300px] m-auto'>
                    <CarouselContent className=''>
                        <CarouselItem><img src={Pro1}/></CarouselItem>
                        <CarouselItem><img src={Pro2}/></CarouselItem>
                        <CarouselItem><img src={Pro3}/></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <Carousel className='w-[300px] m-auto'>
                    <CarouselContent className=''>
                        <CarouselItem><img src={Pro1}/></CarouselItem>
                        <CarouselItem><img src={Pro2}/></CarouselItem>
                        <CarouselItem><img src={Pro3}/></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <Carousel className='w-[300px] m-auto'>
                    <CarouselContent className=''>
                        <CarouselItem><img src={Pro1}/></CarouselItem>
                        <CarouselItem><img src={Pro2}/></CarouselItem>
                        <CarouselItem><img src={Pro3}/></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </section>
    )
}

export default ViewPro
