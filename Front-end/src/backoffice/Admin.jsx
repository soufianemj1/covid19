import SideBar from './SideBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import dayjs from "dayjs";


function Admin() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [region,setRegion] = useState('');
  const [managers,setManagers] = useState();
  const [patients,setPatients] = useState();

  // ------------------ post ------------------

  const postData = () =>{

    axios.post('http://localhost:4001/api/manager/addManager',{
      name: name,
      email: email,
      region: region
    })
    .then(res=>( ManagersData() ))
    .catch(err=>console.log(err))
    
}

  // ------------------ fetch ------------------

  const ManagersData = () => {

    axios('http://localhost:4001/api/manager/Managers')
     .then(res=> setManagers(res.data))
     .catch(err => console.warn(err))

  }
  
  const PatientsData = () => {
    axios 
    .get("http://localhost:4001/api/appointment/getAppointement")
    .then((res) => setPatients(res.data))
    .catch((err) => console.log(err));
  };

  useEffect(()=>{
    PatientsData();
    ManagersData();
  },[]);
  

  // ------------------ delete ------------------

  const delete_row = (id) => {
        
    if (window.confirm("Are you sure you want to delete this Manager ?")){
    
      axios.delete(`http://localhost:4001/api/manager/deleteManager/${id}`)
      .then(res => ManagersData())
      .catch(err=> console.log(err))

    }

  }



  return (
    <div className='flex w-screen jusify-center'>

      <SideBar/>
      <div className='w-full ml-64 p-20 bg-gray-50'>

        {/* ------------------------------- Form ------------------------------- */}

        <div class="bg-white shadow rounded-lg p-6 mx-5">

          <div class="grid lg:grid-cols-2 gap-6">
              <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                  <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                      <p>
                          <label for="name" class="bg-white text-gray-600 px-1">Name</label>
                      </p>
                  </div>
                  <p>
                      <input onChange={(e)=>{setName(e.target.value)}} id="name"  tabindex="0" value={name} type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                  </p>
              </div>
              <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                  <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                      <p>
                          <label for="email" class="bg-white text-gray-600 px-1">Email </label>
                      </p>
                  </div>
                  <p>
                      <input onChange={(e)=>{setEmail(e.target.value)}} id="email" value={email}  tabindex="0" type="email" class="py-1 px-1 outline-none block h-full w-full"/>
                  </p>
              </div>
          </div>

          <div class="grid lg:grid-cols-1 gap-6">
              <div class="w-1/2 m-auto mt-5 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                  <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                      <p>
                          <label for="region" class="bg-white text-gray-600 px-1">region</label>
                      </p>
                  </div>
                  <p>
                      <input onChange={(e)=>{setRegion(e.target.value)}} id="region"  value={region} tabindex="0" type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                  </p>
              </div>
          </div>

          <div class="border-t mt-6 pt-3 text-center">
              <button onClick={postData} class="bg-blue-700 hover:bg-blue-400 text-white text-sm px-20 py-3 hover:text-blue-900 border rounded-full text-base" type='submit'>
                  Save
              </button>
              {/* <button onClick={update_row} class="bg-blue-700 hover:bg-blue-400 text-white text-sm px-20 py-3 hover:text-blue-900 border rounded-full text-base" type='submit'>
                  Update
              </button> */}
          </div>
            
        </div>

        {/* ------------------------------- Managers Table ------------------------------- */}
        <h2 className='text-center'> Patients </h2>
        <div className="flex flex-col">
          <div className="overflow-x-auto ">
            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700 text-center	">
                    <tr>
                      <th
                        scope="col"
                        className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Email
                      </th>
                      
                      <th
                        scope="col"
                        className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Region
                      </th>
                      
                      <th
                        scope="col"
                        className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    { managers && managers.map((el, index) =>

                      <tr key={index}>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.Name}
                          
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.Email}
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.Region.toUpperCase()}
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          <button class="m-1 py-3 px-5 rounded-full bg-red-500 hover:bg-red-600 text-white hover:text-black" onClick={ () => delete_row(el._id) }><MdDelete/></button>
                        </td>
                      </tr>
                        
                    )} 
                      
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------- Patients Table ------------------------------- */}
        <h2 className='text-center'> Managers </h2>
                
        <div className="flex flex-col mt-5">
        <div className="overflow-x-auto ">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700 text-center	">
                  <tr>
                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      CIN
                    </th>
                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Age
                    </th>
                    
                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Ville
                    </th>
                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Dose
                    </th>
                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Email 
                    </th>
                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Date
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  { patients &&
                    patients.map((el, index) => 
                      
                      <tr key={index}>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.CIN}
                          
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.Age}
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.Ville.toUpperCase()}
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.Dose}
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.Email}
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {dayjs(el.Date).format('DD/MM/YYYY')}
                        </td>
                      </tr>
                      
                    )} 
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>

      </div>

    </div>
    
  )
}

export default Admin