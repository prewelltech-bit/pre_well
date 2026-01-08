import React from 'react'
import { Flame } from './Flame'

const Vision = () => {
    return (
        <>
            <div className="vision-section bg-white py-12 sm:py-16 md:py-20 lg:py-24 flex gap-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">
                        Our Vision
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
                        To be a global leader in digital innovation, empowering businesses to thrive in the digital age through cutting-edge technology and creative solutions.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">
                        Our Mission
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
                        to deliver complete end to end digital solutions from one place, combining strategy, creativity, and design to help brands/businesses to build strong and stand out to grow in today's competitive digital world.
                    </p>
                    <Flame className='h-10' />
                </div>
            </div>
        </>
    )
}

export default Vision
