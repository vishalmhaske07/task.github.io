import React from 'react'
import Calender from './Calender'
import Dropdown from './Dropdown'

export default function Home() {
    return (
        <div className='d-flex home vh-100'>
            <div className="container h-100">
                <Dropdown />
            </div>
            <div className="container h-100">
                <Calender />
            </div>
        </div>
    )
}
