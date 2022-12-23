import React from 'react'
import './SecondSection.css'

function SecondSection() {
    return (
        <div className='second-section'>
            <div className='transbox'>
                <span className='second-section-title'>One Stop for all that you NEED!!!</span>
                <div className='second-section-contents'>
                    <div className='left-side'>
                        My Secret Recipe to get exactly what you need.
                    </div>
                    <div className='right-side'>
                        <ul className='right-side-list'>
                            <li>One on one interaction to understand your requirement.</li><hr />
                            <li>Suggestions to guide with technicals you need.</li><hr />
                            <li>Alien Design! Not an issue, Get a meet setup with in demand designers in industry</li><hr />
                            <li>Backend needs... Leave it to me!!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection
