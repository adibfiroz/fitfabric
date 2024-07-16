
"use client"

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function MapComponent() {
    const apiKey = process.env.API_KEY || '';
    return (
        <div className=' rounded-2xl overflow-hidden'>
            <APIProvider apiKey={apiKey}>
                <Map
                    style={{ width: '100%', height: '70vh' }}
                    defaultCenter={{ lat: 22.54992, lng: 0 }}
                    defaultZoom={3}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >
                    <Marker position={{ lat: 53.54992, lng: 10.00678 }} />
                </Map>
            </APIProvider>
        </div>
    )
}

export default MapComponent;
