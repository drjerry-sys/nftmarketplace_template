import { FavoriteBorderOutlined, ChatBubbleOutlineOutlined, ExitToAppOutlined, CallMissedOutgoingOutlined } from '@material-ui/icons';
import NftCard from './NftCard';
import { useState } from 'react';

const Latest = () => {

    const [time, setTime] = useState('24hrs');

    const info = [
        {id: '0xbb...1b06', img: 'art2.jfif', name: 'Break', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
        {id: '0cvb...4x66', img: 'art3.jfif', name: 'Biggi', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
        {id: '3tvx...5ry1', img: 'art4.jfif', name: 'Plank', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
    ];

    const timeFrame = [
        {id: '0xbb...1b06', img: 'download.jfif', name: 'Break', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
        {id: '0cvb...4x66', img: 'art3.jfif', name: 'Biggi', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
        {id: '3tvx...5ry1', img: 'art4.jfif', name: 'Plank', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
        {id: '0xbb...1b06', img: 'art2.jfif', name: 'Break', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
        {id: '0cvb...4x66', img: 'art3.jfif', name: 'Biggi', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
        {id: '3tvx...5ry1', img: 'art4.jfif', name: 'Plank', details: 'Infinity Loop 1500px - 1500px', owner: 'Foundation'},
    ]

    return (
        <>
            <div className="container mb-24">
                <div className="w-full flex justify-between mb-2">
                    <div className="flex items-center">
                        <h3 className="font-medium mr-3 text-2xl">Latest</h3>
                        <div className="px-2 h-5 border-2 text-sm rounded-full border-current text-cyan-600"><h1 className="pb-px">Random</h1></div>
                    </div>
                    <div>
                        <span className="text-cyan-600">Explore more pieces</span>
                    </div>
                </div>
                <div className="block md:grid grid-cols-3 gap-4">
                    {info.map(user=>(
                        <NftCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
            <div className="container mb-5">
                <div className="w-full mb-2">
                    <h3 className="font-medium mr-3 text-2xl">Trending</h3>
                    <div className='w-full border-b-2 my-3 mb-7'>
                        <span onClick={()=>setTime('24hrs')} className={`mb-2 mr-3 cursor-pointer text-sm font-medium ${time==='24hrs' && 'border-b-2 border-cyan-600 text-cyan-600'}`}>24 Hours</span>
                        <span onClick={()=>setTime('7days')} className={`mb-2 mr-3 cursor-pointer text-sm font-medium ${time==='7days' && 'border-b-2 border-cyan-600 text-cyan-600'}`}>7 Days</span>
                        <span onClick={()=>setTime('30days')} className={`mb-2 mr-3 cursor-pointer text-sm font-medium ${time==='30days' && 'border-b-2 border-cyan-600 text-cyan-600'}`}>30 Days</span>
                    </div>
                </div>
                <div className="block md:grid grid-cols-3 gap-4">
                    {timeFrame.map(user=>(
                        <NftCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
        
        </>

    )
}

export default Latest
