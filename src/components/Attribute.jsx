import React from 'react'

const Attribute = ({ src, onClick }) => {
    return (
        <div>
            <button className='p-1 hover:animate-pulse' onClick={onClick}><img src={src} alt="" width="75%"/></button>
        </div>
    )
}

export default Attribute