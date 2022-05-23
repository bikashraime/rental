import React from 'react'
import './Body.css'
import realestate from '../Images/skyline.png'
import vehicle from '../Images/car.png'
import fashion from '../Images/clothes.png'
import instrument from '../Images/music.png'
import laborer from '../Images/laborer.png'

function Body() {
     return (
          <div className='content'>
               <span className='instruction'>Rent anything online</span>
               <form>
                    <input type='text' placeholder='&#x270e; Enter keyword' />
                    <button type='submit'>Find </button>
               </form>
               <div className='category-list'>
                    <div className='category'>
                         <img src={realestate} />
                         <p>Real Estate</p>
                    </div>
                    <div className='category'>
                         <img src={vehicle}></img>
                         <p>Vehicle</p>
                    </div>
                    <div className='category'>
                         <img src={fashion}></img>
                         <p>Fashion</p>
                    </div>
                    <div className='category'>
                         <img src={instrument}></img>
                         <p>Instruments</p>
                    </div>
                    <div className='category'>
                         <img src={laborer}></img>
                         <p>Laborer</p>
                    </div>
               </div>
          </div>
     )
}

export default Body