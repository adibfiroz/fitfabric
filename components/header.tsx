"use client"

import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const pathName = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Initial check when component mounts
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);;

    return (
        <header className={cn('fixed top-0 left-0 w-full z-30', isVisible && "bg-white shadow-xl")}>
            <div className={cn(' max-w-screen-2xl mx-auto transition-all duration-300 pb-5 pt-16 md:pt-10 lg:py-10 px-3 lg:px-16 relative', isVisible && "!py-3")}>
                <div className={cn('flex justify-between items-center text-white font-semibold', pathName === "/cluby-fitness" && "text-black", isVisible && " text-black")}>


                    <Link href="/" className=' flex-shrink-0'>
                        <img src={
                            pathName === "/cluby-fitness"
                                ? "/logo2.svg"
                                : isVisible
                                    ? "/logo2.svg"
                                    : "/logo.svg"
                        } className=' w-24 ' width={100} height={50} alt='logo' />
                    </Link>


                    <Link href="/cluby-fitness" className={cn(' absolute md:relative top-2 md:top-auto right-10 md:right-auto left-10 md:left-auto md:w-auto border-2 border-[#6cce4033] text-sm rounded-full py-2 px-6 flex gap-1 justify-center items-center hover:underline', isVisible && " hidden md:flex border-[#6cce40]")}>
                        Choose a club
                        <ChevronDown size={16} className='text-[#6cce40]' />
                    </Link>

                    <ul className={cn('lg:text-sm hidden lg:flex gap-16', open && " fixed top-0 bottom-0 left-0 right-0 bg-white text-black flex justify-center z-40 items-center text-2xl flex-col gap-8 font-semibold")}>
                        <li className='lg:hidden '>
                            <Button onClick={() => setOpen(!open)} className='radial-bg-green rounded-full   p-0 w-10 fixed top-5 right-5 border-0 shadow-xl'>
                                <X size={30} className=' text-gray-700' />
                            </Button>
                        </li>
                        <li><Link className=" hover:underline" href="/classes">Classes</Link></li>
                        <li><Link className=" hover:underline" href="/Work">Work</Link></li>
                        <li><Link className=" hover:underline" href="/Contact">Contact</Link></li>
                        <li><Link className=" hover:underline" href="/Schedule">Schedule</Link></li>
                    </ul>

                    <div className='flex gap-x-2 md:gap-x-4'>
                        <Button variant="secondary" className=' rounded-full text-[11px] sm:text-sm'>
                            theme
                        </Button>
                        <div className='border-2 border-[#6cce40] cursor-pointer text-[11px] sm:text-sm rounded-full py-2 px-4 flex gap-1 items-center hover:underline'>
                            Language
                        </div>
                        <Button onClick={() => setOpen(!open)} className='bg-transparent hover:bg-transparent text-[#6cce40] rounded-full border-2 lg:hidden border-[#6cce40] px-1.5'>
                            <Menu />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header