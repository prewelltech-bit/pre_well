import React from 'react'
import './DetailOfVideoEditing.css'

const DetailOfVideoEditing = () => {
  return (
    <>
    <h1 className='page-title-videoediting'>Video Editing</h1>
    <section className='videoediting-hero'>
        <div className='videoediting-hero-img'>
            <img src="/assets/portfolio/13.jpg" alt="Video Editing" />
        </div>
        <div className='videoediting-hero-text'>
            <h1>Video Editing</h1>
            <p className='hero-desc'>In today’s digital world, a well-edited video can make all the difference in capturing attention and conveying your message effectively. I specialize in transforming raw footage into visually stunning, engaging videos that tell your story with clarity and impact. My approach combines technical expertise with creative storytelling, ensuring that every project resonates with its audience.</p>

            <ul>
                <li>Cutting and trimming footage for a smooth flow</li>
                <li>Color correction and grading for cinematic visuals</li>
                <li>Motion graphics and visual effects</li>
            </ul>

            <button>Start Your Video Editing</button>
        </div>
    </section>
    </>
  )
}

export default DetailOfVideoEditing