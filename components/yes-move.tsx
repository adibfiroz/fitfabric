"use client"

import { useState } from 'react'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const YesMove = () => {
    const [showModal, setShowModal] = useState(false)
    const [videoUrl, setVideoUrl] = useState('');

    const handleModal = (url: string) => {
        setVideoUrl(url);
        setShowModal(true);
    }

    const data = [
        {
            "id": 1,
            "img": "/yesmove1.jpg",
            "title": "TURBO COMBUSTION",
            "desc": "Maria and Kamil Mańko",
            "duration": "30",
            "intensity": "short",
            "videoUrl": "https://player.vimeo.com/video/399707077?autoplay=1&title=0&byline=0&portrait=0"
        },
        {
            "id": 2,
            "img": "/yesmove2.jpg",
            "title": "TURBO COMBUSTION",
            "desc": "Maria and Kamil Mańko",
            "duration": "30",
            "intensity": "short",
            "videoUrl": "https://player.vimeo.com/video/399716434?autoplay=1&title=0&byline=0&portrait=0"
        },
        {
            "id": 3,
            "img": "/yesmove3.jpg",
            "title": "TURBO COMBUSTION",
            "desc": "Maria and Kamil Mańko",
            "duration": "30",
            "intensity": "short",
            "videoUrl": "https://player.vimeo.com/video/399692892?autoplay=1&title=0&byline=0&portrait=0"
        },
        {
            "id": 4,
            "img": "/yesmove4.jpg",
            "title": "TURBO COMBUSTION",
            "desc": "Maria and Kamil Mańko",
            "duration": "30",
            "intensity": "short",
            "videoUrl": "https://player.vimeo.com/video/399716434?autoplay=1&title=0&byline=0&portrait=0"
        }
    ]

    return (
        <div>
            <div className="my-16 px-3 lg:px-16 max-w-6xl mx-auto">
                <img src="/yesmove.svg" className=" mx-auto w-32" alt="" />
                <p className=" text-[12px] text-center text-gray-500  mt-6">The largest training platform in Poland. </p>
                <p className=" text-[12px] text-center text-gray-500  mt-2 mb-10">
                    Train. Where you want and when you want.</p>

                <div className="flex md:inline scrollMobile">
                    {data.map((item, i) => (
                        <div key={item.id} className={cn(" bg-white align-top custom-shadow rounded-2xl p-4 inline-block mr-4", i == 0 ? "w-72 xl:w-96" : "w-72 md:w-52 xl:w-72", i == 3 && "md:ml-20 xl:ml-24 md:mt-4")}>
                            <div className=" relative w-[240px] md:w-auto">
                                <img src={item.img} className=" rounded-xl" alt="" />
                                <Button variant="primaryGreen" onClick={() => handleModal(item.videoUrl)} className=" rounded-full px-2 shadow-xl h-auto absolute -bottom-4 left-3">
                                    <img src="/play.svg" width={18} className=" rounded-xl" alt="" />
                                </Button>
                            </div>

                            <div className=" text-black text-[11px] font-bold mt-7">{item.title}</div>
                            <p className=" text-[10px] text-gray-600">{item.desc}</p>

                            <div className="flex gap-6 text-[10px] text-gray-600 mt-4">
                                <div className="flex gap-2">
                                    <img src="/duration.svg" width={14} height={14} alt="" />
                                    {item.duration}
                                </div>
                                <div className="flex gap-2">
                                    <img src="/intensity.svg" width={14} height={14} alt="" />
                                    {item.intensity}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* <div className=" bg-white custom-shadow w-72 md:w-52 xl:w-72 align-top rounded-2xl p-4 inline-block mr-4">
                        <div className=" relative w-[240px] md:w-auto">
                            <img src="/yesmove2.jpg" className=" rounded-xl" alt="" />
                            <Button variant="primaryGreen" onClick={() => handleModal("https://player.vimeo.com/video/399716434?autoplay=1&title=0&byline=0&portrait=0")} className=" rounded-full px-2 shadow-xl h-auto absolute -bottom-4 left-3">
                                <img src="/play.svg" width={18} className=" rounded-xl" alt="" />
                            </Button>
                        </div>

                        <div className=" text-black text-[11px] font-bold mt-7">TURBO COMBUSTION</div>
                        <p className=" text-[10px] text-gray-600">Maria and Kamil Mańko</p>

                        <div className="flex gap-6 text-[10px] text-gray-600 mt-4">
                            <div className="flex gap-2">
                                <img src="/duration.svg" width={14} height={14} alt="" />
                                thirty
                            </div>
                            <div className="flex gap-2">
                                <img src="/intensity.svg" width={14} height={14} alt="" />
                                short
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white custom-shadow w-72 md:w-52 xl:w-72  align-top rounded-2xl p-4 inline-block mr-4">
                        <div className=" relative w-[240px] md:w-auto">
                            <img src="/yesmove3.jpg" className=" rounded-xl" alt="" />
                            <Button variant="primaryGreen" onClick={() => handleModal("https://player.vimeo.com/video/399692892?autoplay=1&title=0&byline=0&portrait=0")} className=" rounded-full px-2 shadow-xl h-auto absolute -bottom-4 left-3">
                                <img src="/play.svg" width={18} className=" rounded-xl" alt="" />
                            </Button>
                        </div>

                        <div className=" text-black text-[11px] font-bold mt-7">TURBO COMBUSTION</div>
                        <p className=" text-[10px] text-gray-600">Maria and Kamil Mańko</p>

                        <div className="flex gap-6 text-[10px] text-gray-600 mt-4">
                            <div className="flex gap-2">
                                <img src="/duration.svg" width={14} height={14} alt="" />
                                thirty
                            </div>
                            <div className="flex gap-2">
                                <img src="/intensity.svg" width={14} height={14} alt="" />
                                short
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white custom-shadow w-72 md:w-52 xl:w-72 rounded-2xl p-4 inline-block mr-4 md:ml-20 xl:ml-24 md:mt-4">
                        <div className=" relative w-[240px] md:w-auto">
                            <img src="/yesmove4.jpg" className=" rounded-xl" alt="" />
                            <Button variant="primaryGreen" onClick={() => handleModal("https://player.vimeo.com/video/399716434?autoplay=1&title=0&byline=0&portrait=0")} className=" rounded-full px-2 shadow-xl h-auto absolute -bottom-4 left-3">
                                <img src="/play.svg" width={18} className=" rounded-xl" alt="" />
                            </Button>
                        </div>

                        <div className=" text-black text-[11px] font-bold mt-7">TURBO COMBUSTION</div>
                        <p className=" text-[10px] text-gray-600">Maria and Kamil Mańko</p>

                        <div className="flex gap-6 text-[10px] text-gray-600 mt-4">
                            <div className="flex gap-2">
                                <img src="/duration.svg" width={14} height={14} alt="" />
                                thirty
                            </div>
                            <div className="flex gap-2">
                                <img src="/intensity.svg" width={14} height={14} alt="" />
                                short
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className=" inline-block md:-mt-6 bg-[#b8df4b1a] align-top w-full md:w-[27rem] xl:w-[37rem] px-6 py-10 text-center rounded-2xl">
                    <div className=" text-6xl font-bold text-[#6cce40]">900</div>
                    <p className=" text-xl font-bold text-black">A variety of workouts <br />
                        for everyone</p>

                    <div className="flex justify-center gap-5 mt-5">
                        <Button variant="primaryGreen" className=" rounded-full text-[12px]">
                            Try it for 1 PLN
                        </Button>
                        <Button className=" bg-transparent hover:bg-transparent text-[12px] text-black rounded-full border-2 border-[#6cce40]">
                            Find out more
                        </Button>
                    </div>
                </div>
            </div>

            {showModal &&
                <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center backdrop-blur-md z-50">
                    <div className=" relative max-w-3xl w-full bg-white rounded-3xl shadow-2xl md:p-6 h-full md:h-auto flex items-center">
                        <iframe
                            width="100%"
                            height="315"
                            src={videoUrl}
                            title="Video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <Button onClick={() => setShowModal(!showModal)} className='radial-bg-green rounded-full   p-0 w-10 absolute top-5 right-5 border-0 shadow-xl'>
                            <X size={30} className=' text-gray-700' />
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default YesMove