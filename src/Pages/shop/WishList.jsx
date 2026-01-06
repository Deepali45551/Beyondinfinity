import React from 'react'
import TextCarousels from './TextCarousels'

const WishList = () => {
    return (
        <div className="bg-[#0b0b0b] min-h-screen text-white py-18">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center pt-12">Wishlist</h1>
            <p className="text-center text-gray-400 mt-2"> BeyondInfinities &gt; Wishlist</p>
            
            {/* Wishlist Content */}
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <p className="text-gray-400 text-lg">
                    There are no products on the Wishlist!
                </p>
            </div>

            {/* Carousel Section */}
            <div className="mt-12 pb-12">
                <TextCarousels />
            </div>
        </div>
    )
}

export default WishList
