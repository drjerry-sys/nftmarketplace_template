import { FavoriteBorderOutlined, ChatBubbleOutlineOutlined, ExitToAppOutlined, CallMissedOutgoingOutlined } from '@material-ui/icons';

const NftCard = ({ user }) => {
    return (
        <div className="border-2 rounded">
            <div className="h-8 px-3 flex items-center text-sm font-bold text-slate-700">
                <div className='rounded-full bg-pink-900 h-4 w-4 mr-1'></div>
                <span>
                    {user.id}
                </span>
            </div>
            <div className="h-80 bg-zinc-600">
                <img src={`/images/${user.img}`} alt="art2" className='object-contain h-full w-full' />
            </div>
            <div className='block'>
                <h1 className='font-bold leading-10 px-3 text-base'>{user.name}</h1>
                <h1 className='px-3 text-sm text-slate-500'>{user.details}</h1>
                <div className="text-slate-600 text-sm mt-5 mb-2 ml-3">
                    0<FavoriteBorderOutlined className="text-sm mr-3" />
                    0<ChatBubbleOutlineOutlined className="text-sm mr-3" />
                    <ExitToAppOutlined className="text-sm" />
                </div>
                <div className='px-3 py-2 border-y-2'>
                    <span className="text-sm text-slate-500">owned by</span>
                    <div className='flex w-full justify-between'>
                        <div className="flex items-center ">
                            <div className="h-4 w-4 bg-yellow-600 mr-2 rounded-full"></div>
                            <span className='text-base'>{user.owner}</span>
                        </div>
                        <div>
                            <span>Bid</span>
                            <CallMissedOutgoingOutlined className="ml-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftCard
