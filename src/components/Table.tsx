import React, { useState } from 'react'
import smallTable from '../assets/small-table.png'
import mediumTable from '../assets/medium-table.png'
import largeTable from '../assets/large-table.png'

const Table = () => {

    const [focus, setFocus] = useState(false)

  return (
    <div className='tableContainer'>
        <div className="top">

            <input type="radio" name='table' id='table1'/>
            <label htmlFor="table1" className='table'>
                <img src={smallTable} alt="small table" />
            </label>

            <input type="radio" name='table' id='table2'/>
            <label htmlFor="table2" className='table'>
                <img src={smallTable} alt="small table" />
            </label>

            <input type="radio" name='table' id='table3'/>
            <label htmlFor="table3" className='table'>
                <img src={smallTable} alt="small table" />
            </label>

        </div>

        <div className="middle">
            <input type="radio" name='table' id='table4'/>
            <label htmlFor="table4" className='table'>
                <img src={mediumTable} alt="small table" />
            </label>

            <input type="radio" name='table' id='table5'/>
            <label htmlFor="table5" className='table'>
                <img src={largeTable} alt="small table" />
            </label>

            <input type="radio" name='table' id='table6'/>
            <label htmlFor="table6" className='table'>
                <img src={mediumTable} alt="small table" />
            </label>

        </div>

        <div className="bottom">
            <input type="radio" name='table' id='table7'/>
            <label htmlFor="table7" className='table'>
                <img src={smallTable} alt="small table" />
            </label>

            <input type="radio" name='table' id='table8'/>
            <label htmlFor="table8" className='table'>
                <img src={smallTable} alt="small table" />
            </label>

            <input type="radio" name='table' id='table9'/>
            <label htmlFor="table9" className='table'>
                <img src={smallTable} alt="small table" />
            </label>
        </div>
        
    </div>
  )
}

export default Table