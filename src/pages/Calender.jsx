import React, { useState } from 'react'

export default function Calender() {
    const [date, setdate] = useState()

    return (



        <div className='container h-100 d-flex flex-column justify-content-center align-items-center ' onChange={e => setdate(e.target.value)}>
            <h2>Date Picker</h2>
            <div className="container text-center mb-5">
                <h3>{date}</h3>
            </div>
            <input type="date" name="" id="" className='w-50 calender-input' />
        </div>
    )
}
