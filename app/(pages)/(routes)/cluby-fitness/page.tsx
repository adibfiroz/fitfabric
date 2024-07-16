import MapComponent from '@/components/MapComponent';
import { cn } from '@/lib/utils';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ListChecks, MapPin } from 'lucide-react';


interface Location {
    name: string;
    address: string;
    icons: string[];
}

interface LocationItemProps {
    city: string;
    locations: Location[];
}

const LocationItem: React.FC<LocationItemProps> = ({ city, locations }) => {
    return (
        <div className=" relative">
            <h2 className="text-sm mb-2 sm:mt-0 sm:absolute sm:left-5 sm:top-5 sm:h-10 flex items-center sm:w-40 font-bold">{city}</h2>
            <div className='bg-white custom-shadow rounded-2xl p-4 mb-6 sm:pl-48'>
                {locations.map((location, index) => (
                    <div key={index} className={cn("bg-[#b8df4b1a] rounded-xl md:rounded-full px-4 md:px-6 py-3 text-sm grid grid-cols-12 items-center", locations.length > 1 && "mb-4")}>

                        <div className="font-semibold text-[13px] mb-1 md:mb-0 col-span-12 md:col-span-3">{location.name}</div>
                        <div className="text-gray-600 text-[13px] mb-2 md:mb-0 col-span-12 md:col-span-4">{location.address}</div>

                        <div className=" col-span-12 md:col-span-5 flex justify-start space-x-3">
                            {location.icons.map((icon, idx) => (
                                <img key={idx} src={icon} alt="" className="w-5 h-5" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

interface DataItem {
    city: string;
    locations: Location[];
}


const ClubyFitness = () => {

    const data: DataItem[] = [
        {
            city: 'ANDRESPOL',
            locations: [
                {
                    name: 'Andrespol',
                    address: 'Rokicińska 125',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon3.svg', '/fiticon4.svg', '/fiticon5.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
            ],
        },
        {
            city: 'KONSTANTYNÓW ŁÓDZKI',
            locations: [
                {
                    name: 'Konstantynów Łódzki',
                    address: 'Jana Pawła II 11/13',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon4.svg', '/fiticon5.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
            ],
        },
        {
            city: 'TOMASZÓW MAZOWIECKI',
            locations: [
                {
                    name: 'Tomaszow Mazowiecki',
                    address: 'ul. Warsaw 1',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon3.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
            ],
        },
        {
            city: 'ŁÓDŹ',
            locations: [
                {
                    name: 'Dąbrowa',
                    address: 'ul. Dabrowskiego 207/225',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon3.svg', '/fiticon4.svg', '/fiticon5.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
                {
                    name: 'Franciscan',
                    address: '99 Franciszkańska Street',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon4.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
                {
                    name: 'Retkińska Gallery',
                    address: 'al. Cardinal Stefan Wyszyński 29',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon3.svg', '/fiticon4.svg', '/fiticon5.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
                {
                    name: 'Rewolucji',
                    address: 'Rewolucji 1905 r nr 44',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon3.svg', '/fiticon7.svg'],
                },
                {
                    name: 'Retkińska Gallery',
                    address: 'al. Cardinal Stefan Wyszyński 29',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon4.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
                {
                    name: 'Teofilów',
                    address: 'ul. Aleksandrowska 38',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon3.svg', '/fiticon4.svg', '/fiticon5.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
                {
                    name: 'Zatoka Sportu',
                    address: 'ul. Zgierska 211',
                    icons: ['/fiticon1.svg', '/fiticon2.svg', '/fiticon3.svg', '/fiticon4.svg', '/fiticon5.svg', '/fiticon6.svg', '/fiticon7.svg'],
                },
            ],
        },
    ];


    return (
        <div className=' max-w-screen-lg mx-auto px-3 pt-36 mb-28'>
            <Tabs defaultValue="list" className="">
                <div className=' text-center mb-8'>
                    <TabsList className='rounded-full'>
                        <TabsTrigger className=' rounded-full' value="map">
                            <MapPin size={18} className=' mr-1' />
                            Map
                        </TabsTrigger>
                        <TabsTrigger className=' rounded-full' value="list">
                            <ListChecks size={18} className=' mr-1' />
                            List
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="map">
                    <MapComponent />
                </TabsContent>
                <TabsContent value="list">
                    {data.map((item, index) => (
                        <LocationItem key={index} city={item.city} locations={item.locations} />
                    ))}
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default ClubyFitness