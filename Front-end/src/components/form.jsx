
import { useState } from 'react'

import axios from 'axios'



const Form = () => {

  
    const [CIN, setCIN] = useState('')
    const [Age, setAge] = useState('')
    const [Ville, setVille] = useState('')
    const [Dose, setDose] = useState('')
    const [Email, setEmail] = useState('')
    const [finish, setFinish] = useState(false)
    const Appointment = {
        cin: CIN,
        age: parseInt(Age),
        ville: Ville.toUpperCase(),
        dose: parseInt(Dose),
        email: Email
    }
    const sendData = () => {

        axios.post('http://localhost:4001/api/appointment/makeAppointment', Appointment )
        .then(res => {
            setFinish(true)
        })
        .catch(err => {
            console.log(err);

        })

        
    }
    console.log(Appointment);
    return (
        
        <div className=" h-screen bg-indigo-100 flex justify-center items-center">
            { finish === false &&
                <div className="lg:w-2/5 md:w-1/2 w-2/3">
                    <div className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                        
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Your informations </h1>

                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" for="CIN">CIN:</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" onChange={(e)=>setCIN(e.target.value)} type="text" name="CIN" id="CIN" placeholder="CIN" />
                        </div>

                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" for="Age">Age:</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" onChange={(e)=>setAge(e.target.value)} type="text" name="Age" id="Age" placeholder="Age" />
                        </div>

                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" for="Adresse">Ville:</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" onChange={(e)=>setVille(e.target.value)} type="text" name="ville" id="ville" placeholder="ville" />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" for="dose">Dose:</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" onChange={(e)=>setDose(e.target.value)} type="text" name="dose" id="dose" placeholder="dose" />
                        </div>

                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" for="telephone">Email:</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" onChange={(e)=>setEmail(e.target.value)} type="text" name="Email" id="Email" placeholder="Email" />
                        </div>
                        
                        <button onClick={sendData} className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
                                        
                    </div>
                </div>
            }
            { finish === true &&
                <div className='text-center  text-4xl'>
                    <h1>Thank you for the vaccination, stay safe </h1>
                </div>
            } 
        </div>
        
    )
  }


export default Form