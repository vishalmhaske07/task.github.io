import axios from 'axios';
import React, { useState } from 'react'

export default function Dropdown() {
    const employee = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
    const [values, setvalues] = useState([])
    console.log(values);
    const postData = async () => {
        console.log("posting");
        await axios.post("http://localhost:5000/employee", { ...values })
    }
    return (
        <div className='container h-100 d-flex flex-column justify-content-center align-items-center'>
            <h3>Select employee</h3>

            <div className="container text-center mb-5">
                <h3>
                    {
                        values.map(item => <span> {item}, </span>
                        )
                    }
                </h3>
            </div>
            <select class="form-select w-50" aria-label="Default select example" onChange={e => setvalues([...values, e.target.value])} >
                <option selected><input type="search" placeholder='select employee' name="" id="" /></option>
                <button >All Practitioners  </button>
                <hr />
                {
                    employee.map(item => <option value={item}>
                        <i class="bi bi-person-fill"></i>
                        {item}
                        <input type="checkbox" name="" id="" />
                    </option>)
                }
            </select>
            <button className='btn btn-outline-info mt-5' onClick={e => postData()}>Add Selected Data</button>
        </div>
    )
}
