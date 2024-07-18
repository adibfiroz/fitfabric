"use client"

import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'

const routes = [
    {
        label: 'Classes',
        href: '/classes',
    },
    {
        label: 'Work',
        href: '/work',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
    {
        label: 'Schedule',
        href: '/schedule',
    },
];

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

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<any>(null);


    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const urls = pathName === "/cluby-fitness" || pathName === "/contact" || pathName === "/schedule" || pathName.startsWith("/blogs") || pathName.startsWith("/classess")

    return (
        <header className={cn('fixed top-0 left-0 w-full z-30', isVisible && "bg-white dark:bg-[#020817] shadow-xl dark:shadow-slate-900")}>
            <div className={cn(' max-w-[1900px] mx-auto transition-all duration-500 pb-5 pt-16 md:pt-10 lg:py-10 px-3 lg:px-16 relative', isVisible && "!py-3")}>
                <div className={cn('flex justify-between items-center text-white font-semibold', urls && "text-black dark:text-white ", isVisible && " text-black dark:text-white ")}>

                    <Link href="/" className=' flex-shrink-0'>
                        <img src={
                            urls
                                ? "/logo2.svg"
                                : isVisible
                                    ? "/logo2.svg"
                                    : "/logo.svg"
                        } className=' w-24' width={100} height={50} alt='logo' />
                    </Link>


                    <Link href="/cluby-fitness" className={cn(' absolute md:relative top-2 md:top-auto right-10 md:right-auto left-10 md:left-auto md:w-auto border-2 border-[#6cce4033] text-sm 2xl:text-lg rounded-full py-2 px-6 flex gap-1 justify-center items-center hover:underline', isVisible && " hidden md:flex border-[#6cce40]", urls && "border-[#6cce40]")}>
                        Choose a club
                        <ChevronDown size={16} className='text-[#6cce40]' />
                    </Link>

                    <ul className={cn('lg:text-sm hidden lg:flex gap-16', open && " fixed top-0 bottom-0 left-0 right-0 bg-white dark:bg-[#020817] text-black dark:text-white flex justify-center z-40 items-center text-2xl flex-col gap-8 font-semibold")}>
                        <li className='lg:hidden '>
                            <Button onClick={() => setOpen(!open)} className='radial-bg-green rounded-full p-0 w-10 fixed top-5 right-5 border-0 shadow-xl'>
                                <X size={30} className=' text-gray-700' />
                            </Button>
                        </li>
                        {routes.map((route) => (
                            <li key={route.label}>
                                <Link className={cn(" hover:underline  2xl:text-lg", pathName === route.href && " text-[#6cce40] ")} onClick={() => setOpen(false)} href={route.href}>{route.label}</Link>
                            </li>
                        ))}

                    </ul>

                    <div className='flex gap-x-2 md:gap-x-4'>
                        <ThemeToggle />

                        <div className=' relative' ref={dropdownRef}>

                            <div onClick={() => setShowDropdown(true)} className='border-2 border-[#6cce40] cursor-pointer text-[11px] sm:text-sm 2xl:text-lg rounded-full py-2 px-4 flex gap-1 items-center hover:underline'>
                                Language
                            </div>
                            {showDropdown &&
                                <ul className=' absolute top-10 bg-white p-1 shadow-2xl text-black text-sm rounded-md left-0 right-0'>
                                    <li onClick={() => setShowDropdown(false)} className=' py-1 px-2 cursor-pointer rounded-sm text-gray-600 hover:bg-gray-200/90'>English</li>
                                    <li onClick={() => setShowDropdown(false)} className=' py-1 px-2 cursor-pointer rounded-sm text-gray-600 hover:bg-gray-200/50'>Polish</li>
                                    <li onClick={() => setShowDropdown(false)} className=' py-1 px-2 cursor-pointer rounded-sm text-gray-600 hover:bg-gray-200/50'>Russian</li>
                                </ul>
                            }
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