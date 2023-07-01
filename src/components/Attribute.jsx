import React from 'react'

const Attribute = ({ src, onClick }) => {
    return (
        <div className=''>
            <button className='p-1' onClick={onClick}><img src={src} alt="" width="75%" className='hover:shadow-myShadow rounded-full duration-200'/></button>
        </div>
    )
}

export default Attribute