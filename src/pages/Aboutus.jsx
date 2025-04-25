import React from 'react'
import Aboutban from "../assets/aboutban.png"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

const Aboutus = () => {
    const data = [
        {
            goal: 400,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 239,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 349,
        },
    ]
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }


    return (
        <section className='container mx-auto max-w-screen-xl'>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <section className="flex flex-col mt-[110px] justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">

                        <div className="flex flex-col justify-between xl:w-5/12">
                            <div></div>

                            <div className="sm:text-center lg:py-12 lg:text-left xl:py-24">
                                <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">About us</p>

                                <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Our designs solve problems</h1>
                                <p className='text-[15px] mt-[15px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>


                            </div>




                        </div>



                        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                            <img src={Aboutban} loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
                        </div>

                    </section>
                </div>
            </div>


            <div className="">
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                        <div class="mb-10 md:mb-16">
                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>

                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">

                            <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                <a href="#" class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                    <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>

                                <div class="flex flex-col gap-2 p-4 lg:p-6">
                                    <span class="text-sm text-gray-400">July 19, 2021</span>

                                    <h2 class="text-xl font-bold text-gray-800">
                                        <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
                                    </h2>

                                    <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                    <div>
                                        <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                <a href="#" class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>

                                <div class="flex flex-col gap-2 p-4 lg:p-6">
                                    <span class="text-sm text-gray-400">April 07, 2021</span>

                                    <h2 class="text-xl font-bold text-gray-800">
                                        <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
                                    </h2>

                                    <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                    <div>
                                        <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                <a href="#" class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                    <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>

                                <div class="flex flex-col gap-2 p-4 lg:p-6">
                                    <span class="text-sm text-gray-400">March 15, 2021</span>

                                    <h2 class="text-xl font-bold text-gray-800">
                                        <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best smartphones for devs</a>
                                    </h2>

                                    <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                    <div>
                                        <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                                <a href="#" class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                    <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </a>

                                <div class="flex flex-col gap-2 p-4 lg:p-6">
                                    <span class="text-sm text-gray-400">January 27, 2021</span>

                                    <h2 class="text-xl font-bold text-gray-800">
                                        <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High performance Notebooks</a>
                                    </h2>

                                    <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                    <div>
                                        <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1> <h1 className='text-center text-[30px] font-semibold mb-[30px]'>Goal section</h1></h1>
            </div>
            <div className="flex justify-center mb-[100px]">

                <Drawer >
                    <DrawerTrigger asChild>
                        <Button variant="outline">Open </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="m-auto">
                            <DrawerHeader>
                                <DrawerTitle>Move Goal</DrawerTitle>
                                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0">
                                <div className="flex items-center justify-center space-x-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => onClick(-10)}
                                        disabled={goal <= 200}
                                    >
                                        <Minus />
                                        <span className="sr-only">Decrease</span>
                                    </Button>
                                    <div className="flex-1 text-center">
                                        <div className="text-7xl font-bold tracking-tighter">
                                            {goal}
                                        </div>
                                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                                            Calories/day
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => onClick(10)}
                                        disabled={goal >= 400}
                                    >
                                        <Plus />
                                        <span className="sr-only">Increase</span>
                                    </Button>
                                </div>
                                <div className="mt-3 h-[120px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={data}>
                                            <Bar dataKey="desktop" fill="hsl(var(--foreground))" opacity={0.9} />


                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <DrawerFooter>
                                <Button><a href='#'>Submit</a></Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>



            </div>



            <div className="bg-[#F4F6FC] mb-[100px] w-full text-center rounded-full h-[300px]">
                <h1 className='text-[35px] pt-[20px] font-bold'>Meet our team</h1>

                <div className="flex gap-[20px] justify-center mt-[75px]">




                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>


                    

                </div>
            </div>



        </section>



    )
}

export default Aboutus
