import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import doctor from '../images/doctor.png'


const Test = () => {
  const [age , setAge] = useState(0)
  const [disease , setDisease] = useState('')
  const navigate = useNavigate();


  return (
    <div className='flex text-lg w-screen min-h-screen items-center justify-center ' >

      <div className='flex-1 '>
        <div className='flex bg-indigo-100 rounded-lg py-20 mx-20 flex-col items-center justify center gap-8 '>
          <div className='flex items-center justify-center '>
            <label htmlFor="age"> Enter your Age :</label>
            <input type="number" onChange={(e) => setAge(e.target.value)} className='rounded-md focus:ring  border-gray-300 outline-none' />
          </div>
          <div className='flex items-center justify-center'>
            {
              age >= 14 &&  <div className='flex-col items-center justify-center'>
                <h2> do you have any diabete or allergy or any disease ?</h2>
                <div className='flex items-center justify-center gap-1'>
                  <button class="flex mx-auto mt-6 text-white bg-indigo-700 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" value="yes" onClick={(e)=>setDisease(e.target.value)}>Yes</button>
                  <button class="flex mx-auto mt-6 text-white bg-indigo-700 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" value="no" onClick={(e)=>{
                    setDisease(e.target.value)
                    navigate("/form");

                    
                  } }>No</button>
                </div> 
              </div> 
            }
        
          </div>
          {
            disease === 'yes' && <div> <h2>For your safety, you cant have the vaaccine now ! <a href="https://www.cdc.gov/coronavirus/2019-ncov/php/index.html">more info</a></h2> </div>
          }

        </div>

      </div>
      <div className='flex-1 flex justify-center'>
        <img src={doctor} alt="" />
      </div>
    

    </div>
  )
}

export default Test