import React from 'react'

const WhyChose = () => {
  return (
    <>
        <div className="why-choose-us-section bg-gray-50 py-12 sm:py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">
                    Why Choose Prewell Digitech?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
                    At Prewell Digitech, we combine innovation, expertise, and a client-centric approach to deliver exceptional digital solutions that drive real business results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="why-choose-card p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                        <p className="text-gray-600">
                            We believe in delivering more than just services—we deliver value.
                        </p>
                    </div>  
                    <div className="why-choose-card p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
                        <p className="text-gray-600">
                            Our team works closely with clients to understand their goals and craft solutions that are strategic, creative, and future-ready.
                        </p>
                    </div>  
                    <div className="why-choose-card p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
                        <p className="text-gray-600">
                             With a focus on quality, innovation, and results, Prewell helps businesses build a strong digital presence and achieve sustainable growth.
                        </p>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChose
