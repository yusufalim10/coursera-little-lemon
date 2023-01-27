import React from 'react'
import Table from './Table'

const Form = () => {

    const onSubmit = (e: any) => {
        alert("Booking Success")
    }

  return (
    <div className='form'>

        <form onSubmit={onSubmit}>

            <Table />

            <div className='formInput'>

                <div className='input'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name'/>
                </div>
                <div className='input'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name='phone' id='phone'/>
                </div>
                <div className='input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email'/>
                </div>
                <div className='input'>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />
                </div>

                <button type='submit'>Book Now!</button>

            </div>

            
            
        </form>

    </div>
  )
}

export default Form