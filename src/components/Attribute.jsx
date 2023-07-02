import React from 'react'

const Attribute = ({ src, onClick, filtered }) => {
    return (
        <div className=''>
            <button className='p-1' onClick={onClick}><img src={src} alt="" width="75%" className={`${filtered ? 'shadow-myShadow' : 'hover:shadow-myShadow'} rounded-full duration-200`} /></button>
        </div>
    )
}

export default Attribute