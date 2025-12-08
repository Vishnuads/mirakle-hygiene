import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDownNarrowWideIcon, Star } from 'lucide-react'
import { UserCircle } from 'phosphor-react'

const ReviewList = () => {

    return (
        <>
            <section className='mt-4'>
                {/* <p className='mt-4'>Review List</p> */}
                <div className="flex items-center justify-between my-2">
                    <p className='text-gray-400 mb-0 md:text-md text-sm '>Showing 1-4 of 24 Results</p>
                    <div className='flex gap-2 items-center'>
                        <DropdownMenu className='md:text-md text-sm '>
                            <DropdownMenuTrigger className='border px-3 py-1 rounded-4 flex items-center gap-2'>Newest <ArrowDownNarrowWideIcon size={20} /> </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Oldest</DropdownMenuItem>
                                <DropdownMenuItem>Highest</DropdownMenuItem>
                                <DropdownMenuItem>Lowest</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* review start */}
                <div className=' pb-3'>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <UserCircle size={30}/>
                            <p className='mb-0 font-bold'>Johnny Depp</p>
                        </div>
                        <p className='mb-0 text-gray-400'>1 month ago</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2 mt-2">
                        {[1, 2, 3, 4, 5].map((id) => (
                            <Star key={id} size={18} className="text-yellow-400 fill-amber-400" />
                        ))}
                        <p className='mb-0'>5.0</p>
                    </div>
                    <p className='text-gray-500 mb-2'>I use Mirakle Garlic Powder almost every day, it gives instant flavor to pasta, soups, and marinades. The aroma is so fresh and natural, unlike most store brands.</p>
                    {/* <div className="grid md:grid-cols-12 grid-cols-3 gap-3">
                         {images.map((img, idx) => (
                                <div key={idx}  className='rounded-3  transition-all overflow-hidden '>
                                    <img
                                        src={img}
                                        alt={`Garlic Powder view ${idx + 1}`}
                                        className="w-full h-22 object-cover"
                                    />
                                </div>
                            ))}
                    </div> */}
                </div>
            </section>

        </>
    )
}

export default ReviewList
