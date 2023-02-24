import React from 'react'
import { useLocation } from 'react-router-dom'

const TempSection = () => {
    let location = useLocation();
    let section = location?.pathname?.slice(1);
    let sectionFormat = section?.charAt(0)?.toUpperCase() + section?.slice(1);

    return (

        <div className='home-section'>
            <div className="section-content">This is { sectionFormat } Section</div>
        </div>

    )
}

export default TempSection
