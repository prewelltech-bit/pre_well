import React from "react";
import "./Gallery.css";
import { Reveal } from "../../components/animations";

export default function GalleryBody() {
    return (
        <>
            <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 mx-auto">
                <div className="gallery-header-section px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 mx-auto">
                    <Reveal direction="up" className="services-header">
                        <h2>Gallery</h2>
                        <h4>
                            <p>Real work. Real impact. Real growth.</p>
                        </h4>
                        <p>
                            At Prewell Digitech, we believe results speak louder than
                            promises. Every project we take on is driven by strategy,
                            creativity, and performance. Below are some of the real-world case
                            studies that show how we help brands grow through design,
                            development, marketing, and video.
                        </p>
                    </Reveal>
                    <div class="parent">
                        <div class="div8">
                            <img src="/public/assets/images/g-1.png" alt="Gallery Image 1" className="grid-column img" />
                        </div>
                        <div class="div9">
                            <img src="/public/assets/images/g-2.png" alt="Gallery Image 1" className="grid-column img" />
                        </div>
                        <div class="div10">
                            <img src="/public/assets/images/g-3.png" alt="Gallery Image 1" className="grid-column img" />
                        </div>
                        <div class="div11">
                            <img src="/public/assets/images/g-4.png" alt="Gallery Image 1" className="grid-column img" />
                        </div>
                        <div class="div12">
                            <img src="/public/assets/images/g-5png" alt="Gallery Image 1" className="grid-column img" />
                        </div>
                        <div class="div13">
                            <img src="/public/assets/images/g-6.png" alt="Gallery Image 1" className="grid-column img" />
                        </div>
                        <div class="div14">
                            <img src="/public/assets/images/g-7ng" alt="Gallery Image 1" className="grid-column img" />
                        </div>
                    </div >
                </div>
            </section>
        </>
    );
}