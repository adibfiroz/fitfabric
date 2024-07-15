"use client"

import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { categoryBody, categoryDance, categoryEndurance, categoryHealth, categoryLessMills, categoryMartialArts, categoryMetabolic, categoryOther, categorySpeclised, categoryStrength } from '@/categories'
import Link from 'next/link'



const Categories = () => {



    return (
        <div>
            <div className="flex lg:grid lg:grid-cols-5 gap-9  mt-10 scrollMobile pt-10 lg:pt-0">
                <div>
                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm">
                        <li className=" text-gray-400 font-semibold mb-3">STRENGTHENING</li>
                        {categoryStrength.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm">
                        <li className=" text-gray-400 font-semibold mb-3">SPECIALIZED</li>
                        {categorySpeclised.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">ENDURANCE</li>
                        {categoryEndurance.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm">
                        <li className=" text-gray-400 font-semibold mb-3">BODY & MIND</li>
                        {categoryBody.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">METABOLIC</li>
                        {categoryMetabolic.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm">
                        <li className=" text-gray-400 font-semibold mb-3">OTHER</li>
                        {categoryOther.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">LES MILLS</li>
                        {categoryLessMills.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">DANCE</li>
                        {categoryDance.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm">
                        <li className=" text-gray-400 font-semibold mb-3">HEALTH WITH APZA</li>
                        {categoryHealth.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className=" bg-white custom-shadow w-[220px] lg:w-auto p-10 rounded-xl text-sm mt-9">
                        <li className=" text-gray-400 font-semibold mb-3">MARTIAL ARTS</li>
                        {categoryMartialArts.map((item) => (
                            <li className="mb-1" key={item.id}>
                                <Link href="/" className="hover:underline text-[#3d4939] text-[11px] font-extrabold">
                                    {item.category}
                                    <ChevronRight size={12} className=" inline-block  text-[#6cce40]" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex justify-center lg:mt-10">
                <Button variant="primaryGreen" className="w-full sm:w-auto rounded-full text-sm px-8">
                    <img src="/schedulicon.svg" className="w-5 grayscale mr-2" alt="" />
                    <Link href="/shedule">See the schedule</Link>
                </Button>
            </div>
        </div>
    )
}

export default Categories