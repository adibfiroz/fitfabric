

import { Button } from "@/components/ui/button";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import HomeBlogList from "@/components/home-blogList";
import Categories from "@/components/categories";
import YesMove from "@/components/yes-move";

const LandingPage = () => {


  return (
    <div className="h-full max-w-[1900px] max-w-sc mx-auto">
      <div className="homeBanner pt-32 pb-12 rounded-b-3xl px-3 lg:px-16">
        <div className=" relative rounded-2xl overflow-hidden  md:h-[450px] grid grid-cols-12 bg-[#6cce40] mx-auto">
          <div className=" text-white p-6 lg:py-12 lg:pl-16 col-span-12 md:col-span-5">
            <p className=" text-[12px] font-semibold">SUMMER IN GOOD SHAPE</p>
            <h1 className=" text-2xl mt-1 mb-4 font-extrabold">Head into summer with a <br />65% discount</h1>
            <p className=" text-[12px] text-gray-200">Many possibilities in one pass.</p>
            <ul className="text-[12px] text-gray-200 my-3">
              <li className="mb-1.5"> - Clubs in the best locations</li>
              <li className="mb-1.5"> -  The widest selection of group classes</li>
              <li className="mb-1.5"> - Rewards for activity in the Game of Form</li>
              <li className="mb-1.5"> - Training plan</li>
              <li className="mb-1.5"> - Introductory meeting</li>
              <li className="mb-1.5"> - Intro with a trainer</li>
              <li className="mb-1.5"> - Mobile application</li>
            </ul>

            <div className='flex flex-col md:flex-row gap-4 md:gap-x-4 mt-4'>
              <Button variant="secondary" className='radial_bg_red shadow-xl text-white px-10 font-semibold  rounded-full text-[11px] sm:text-sm'>
                I{`'`}am buying
              </Button>
              <div className='border-2 border-white cursor-pointer text-[11px] sm:text-sm rounded-full py-2 justify-center px-10 font-semibold flex gap-1 items-center hover:underline whitespace-nowrap'>
                Game of form
              </div>
            </div>
          </div>

          <div className="bg-[url('/desk_home-banner.webp')] h-[500px] bg-no-repeat bg-cover relative -top-[26px] -right-6 hidden md:block md:col-span-7"></div>

          <div className=" col-span-12 md:hidden">
            <img src="/mobile_home-banner.webp" />
          </div>
        </div>

        <div className="mt-4">
          <h2 className=" text-white text-xl md:text-2xl font-extrabold">
            <Link href="/" className="hover:underline">
              You{`'`}re closer to fitness than you think!
              <ChevronRight size={24} className=" inline-block ml-1 text-[#6cce40]" />
            </Link>
          </h2>

          <HomeBlogList />
        </div>
      </div>

      <div className="my-16 px-3 lg:px-16 mx-auto">
        <h2 className=" text-black font-extrabold text-2xl text-center">Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div className="rounded-2xl  bg-[#f8ffe5]">
            <div className="grid  grid-cols-1 sm:grid-cols-2">
              <div className="pl-10 py-10 md:py-5 flex flex-col justify-center text-sm 2xl:text-xl">
                <div className=" text-black font-bold mb-5">for you</div>
                <p className=" text-[12px] 2xl:text-lg leading-7 text-gray-500 ">Choose a club, buy a pass and enjoy training!</p>

                <Button variant="primaryGreen" className="mt-12 shadow-xl w-fit rounded-full text-sm 2xl:text-lg">Choose a club</Button>
              </div>

              <div>
                <img src="/offer1.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#e7e9e7]">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="pl-10 py-10 md:py-5 flex flex-col justify-center text-sm 2xl:text-xl">
                <div className=" text-black font-bold mb-5">for companies</div>
                <p className=" text-[12px] 2xl:text-lg leading-7 text-gray-500 ">Check out our offer of <br />employee and business passes!</p>

                <Button variant="primaryGreen" className="mt-6 shadow-xl w-fit rounded-full text-sm 2xl:text-lg">Find out more</Button>
              </div>

              <div>
                <img src="/offer2.webp" className="" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 mt-5 scrollMobile">
          <div className=" shadow-xl relative rounded-xl pt-32 md:pt-4 p-4 min-w-64 md:min-w-fit md:pl-32 flex-1 md:h-32 overflow-hidden">
            <div className=" absolute skew top-0 left-0 right-0 bottom-52 md:bottom-0 w-full h-full overflow-hidden">
              <img src="/offer3.webp" className=" rounded-2xl" alt="" />
            </div>
            <div className=" text-black relative z-10 mt-12 text-sm  mb-2">YES2<span className=" font-bold">MOVE</span></div>
            <div className=" flex justify-between relative z-10 text-[12px] text-gray-500">
              Online training
              <Button variant="primaryGreen" className=" rounded-full p-0 h-5 px-2">
                <ChevronRight size={14} className="text-black" />
              </Button>
            </div>
            <img className=" absolute z-10 top-0 right-3" width={50} src="/offericon-3.webp" alt="" />
          </div>
          <div className=" shadow-xl relative rounded-xl pt-32 md:pt-4 p-4 min-w-64 md:min-w-fit md:pl-32 flex-1 md:h-32 overflow-hidden">
            <div className=" absolute skew top-0 left-0 right-0 bottom-44 md:bottom-0 w-full h-full overflow-hidden">
              <img src="/offer4.webp" alt="" />
            </div>
            <div className=" text-black relative z-10 mt-12 text-sm mb-2"><span className=" font-bold">Zdropfit Academy</span></div>
            <div className=" flex justify-between relative z-10 text-[12px] text-gray-500">
              training and workshops
              <Button variant="primaryGreen" className=" rounded-full p-0 h-5 px-2">
                <ChevronRight size={14} className="text-black" />
              </Button>
            </div>
            <img className=" absolute z-10 top-0 right-3" width={50} src="/offericon-1.webp" alt="" />
          </div>
          <div className=" shadow-xl relative rounded-xl pt-32 md:pt-4 p-4 min-w-64 md:min-w-fit md:pl-32 flex-1 md:h-32 overflow-hidden">
            <div className=" absolute skew top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
              <img src="/offer5.webp" alt="" />
            </div>
            <div className=" text-black relative z-10 mt-12 text-sm mb-2"><span className=" font-bold">Introductory Meeting</span></div>
            <div className=" flex justify-between relative z-10 text-[12px] text-gray-500">
              get help from an expert
              <Button variant="primaryGreen" className=" rounded-full p-0 h-5 px-2">
                <ChevronRight size={14} className="text-black" />
              </Button>
            </div>
            <img className=" absolute z-10 top-0 right-3" width={50} src="/offericon-2.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="my-16 px-3 lg:px-16 mx-auto">
        <h2 className=" text-black font-bold text-2xl 2xl:text-3xl text-center">Classes available in our clubs</h2>
        <p className=" text-[12px] 2xl:text-lg text-center text-gray-500  mt-4">Choose your favorite activities and learn more</p>

        <Categories />
      </div>

      <div className="my-16 px-3 lg:px-16 mx-auto">
        <h2 className=" text-black font-bold text-2xl text-center">Popular Activities</h2>

        <div className="flex lg:grid lg:grid-cols-3 gap-5 mt-10 scrollMobile">
          <div className=" rounded-2xl bg-[#b8df4b1a] p-4 pt-16 md:p-10 group/item min-w-[300px] lg:min-w-fit relative pb-16">
            <Link href="/">
              <h3 className=" text-[12px] 2xl:text-[15px] text-gray-600 font-semibold">STRENGTHENING</h3>

              <h4 className=" uppercase text-black font-bold mb-5 2xl:text-[18px] group-hover/item:underline">Functional Training</h4>

              <p className=" text-gray-600 text-[11px] 2xl:text-[13px] leading-6">This is a series of intensive exercises that strengthen muscles but do not cause them to grow too much. What is functional training? During classes, exercises are performed that imitate everyday activities (such as reaching for something, getting out of bed, climbing stairs, walking, etc.), but at a faster pace and often with additional weight in the form of dumbbells or kettlebells. The effects of functional training are primarily a general improvement in efficiency, a slimmer figure (training is great for burning fat tissue), improved circulation, and greater endurance. It also strengthens joints and tendons. Recommended for people who have sedentary jobs.</p>

              <div className="flex justify-end">
                <Button variant="primaryGreen" className=" absolute bottom-5 right-5 shadow-xl mt-8 rounded-full p-0 h-5 px-2">
                  <ChevronRight size={14} className="text-black" />
                </Button>
              </div>

              <div className=" absolute top-4 left-4 md:top-6 md:left-auto md:right-6 flex gap-1">
                <div className=" bg-white rounded-xl p-2">
                  <img src="/popularicon1.svg" width={16} className="" alt="" />
                </div>
                <div className=" bg-white rounded-xl p-2">
                  <img src="/popularicon2.svg" width={16} className="" alt="" />
                </div>
                <div className=" bg-white rounded-xl p-2">
                  <img src="/popularicon3.svg" width={16} className="" alt="" />
                </div>
              </div>
            </Link>
          </div>

          <div className=" rounded-2xl bg-[#b8df4b1a] p-4 pt-16 md:p-10 group/item min-w-[300px] lg:min-w-fit relative">
            <Link href="/">
              <h3 className=" text-[12px] 2xl:text-[15px] text-gray-600 font-semibold">STRENGTHENING</h3>

              <h4 className=" uppercase text-black font-bold mb-5 2xl:text-[18px] group-hover/item:underline">Flat Belly </h4>

              <p className=" text-gray-600 text-[11px] 2xl:text-[13px] leading-6">to strengthen and shape your abdominal muscles. If you want a flat stomach and a beautifully defined six pack - these classes are for you! You will burn fat tissue, lose your belly, sides and unnecessary kilograms and naturally improve your fitness. A shaped figure and better well-being guaranteed!</p>

              <div className="flex justify-end">
                <Button variant="primaryGreen" className=" absolute bottom-5 right-5 shadow-xl mt-8 rounded-full p-0 h-5 px-2">
                  <ChevronRight size={14} className="text-black" />
                </Button>
              </div>

              <div className=" absolute top-4 md:top-6 left-4 md:left-auto md:right-6 flex gap-1">
                <div className=" bg-white rounded-xl p-2">
                  <img src="/popularicon1.svg" width={16} className="" alt="" />
                </div>
              </div>
            </Link>
          </div>

          <div className=" rounded-2xl bg-[#b8df4b1a] p-4 pt-16 md:p-10 group/item min-w-[300px] lg:min-w-fit relative">
            <Link href="/">
              <h3 className=" text-[12px] 2xl:text-[15px] text-gray-600 uppercase font-semibold">body & mind</h3>

              <h4 className=" uppercase text-black font-bold mb-5 2xl:text-[18px] group-hover/item:underline">Yoga</h4>

              <p className=" text-gray-600 text-[11px] 2xl:text-[13px] leading-6">Yoga classes are mainly aimed at people who want to take care of their body and mind in a calmer way. Exercises aimed at strengthening muscles are performed at a slow pace, on a mat, using special blocks and straps. Conscious breathing, in turn, will allow you to de-stress and reduce tension. What does practicing yoga give you? It strengthens and tones the muscles, helps to sculpt the figure, and relaxes. Therefore, yoga can be practiced by both beginners and people who already exercise regularly.</p>

              <div className="flex justify-end">
                <Button variant="primaryGreen" className=" absolute bottom-5 right-5 shadow-xl mt-8 rounded-full p-0 h-5 px-2">
                  <ChevronRight size={14} className="text-black" />
                </Button>
              </div>

              <div className=" absolute top-4 md:top-6 left-4 md:left-auto md:right-6 flex gap-1">
                <div className=" bg-white rounded-xl p-2">
                  <img src="/popularicon4.svg" width={16} className="" alt="" />
                </div>
                <div className=" bg-white rounded-xl p-2">
                  <img src="/popularicon5.svg" width={16} className="" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <YesMove />
    </div>
  );
}

export default LandingPage;