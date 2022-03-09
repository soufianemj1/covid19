import Table from './table'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
import axios from 'axios';
import { useEffect, useState } from 'react';





const Dahsboard = () => {

   let [data1,setData] = useState([]);

    const getData = () => {

        axios
        .get("http://localhost:4001/api/appointment/getAppointement")
        .then(res =>{ 

           setData(res.data)

        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    let Dose1 = 0;
    let Dose2 = 0;
    let Dose3  = 0;

    data1.forEach(el=>{
        if (el.Dose == 1) {
            Dose1++;
        }else if(el.Dose == 2){
            Dose2++;
        }else if(el.Dose == 3){
            Dose3++;
        }
    })

    const data = {
        labels: ['Dose1', 'Dose2', 'Dose3'],
        datasets: [{
            data: [Dose1, Dose2, Dose3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
     
            ],
            borderWidth: 1,
        }],
    };
    

  return (
      <div className='flex  w-screen jusify-center'>
    <div>
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
    <div class=" flex flex-col h-screen  w-64 bg-gray-900 shadow-lg">
        <div class="flex items-center pl-6 h-20 border-b border-gray-800">
            <div class="ml-1">
                <p class="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">Hello,</p>
                <div class="badge">
                       <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">Admin</span>
                </div>
            </div>
        </div>
        <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-6 space-y-1">
            <li class="px-5">
                <div class="flex flex-row items-center h-8">
                    <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard</div>
                </div>
            </li>
            <li>
                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </span>
                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Home</span>
                </a>
            </li>
           
        </ul>
        </div>
    </div>
    </div>
    </div>
    
    <div className=' w-full p-20 bg-gray-50'>

        <div className='w-[25em]'>
            <Doughnut  data={data} />
        </div>
        < Table />

    </div>
    </div>
  )
}

export default Dahsboard