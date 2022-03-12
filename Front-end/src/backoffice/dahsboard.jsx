import Table from './table'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
import axios from 'axios';
import { useEffect, useState } from 'react';
import SideBar from './SideBar';
import React from 'react';
import { useCookies } from 'react-cookie';



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
    const [cookies, setCookie] = useCookies([]);
    const region = cookies.region.toUpperCase();
    

    data1.forEach(el=>{
            console.log(el.Ville, region);
            if ( el.Dose == 1 && el.Ville.toUpperCase() === region ) {
                Dose1++;
            }else if(el.Dose == 2  && el.Ville.toUpperCase() === region  ){
                Dose2++;
            }else if(el.Dose == 3 && el.Ville.toUpperCase() === region ){
                Dose3++;
            }
        
    })

    const data = {
        labels: ['Dose1','Dose2','Dose3'],
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
      <div className='flex jusify-center'>
        <SideBar/>
    
        <div className=' w-full p-20 bg-gray-50 pl-80 '>
            <div >
                <div >
                    <div className='w-[100%] flex justify-center gap-20 mb-10 '>
                        <div className="flex flex-col justify-center items-center	">
                            <div className="flex my-2 mx-2">
                                <div class="w-5 h-5 bg-blue-200 rounded-full mr-2 mt-1"></div>
                                <p className='mb-1'>Dose 1</p>
                            </div>
                            <div className="flex my-2 mx-2">
                                <div class="w-5 h-5 bg-red-200 rounded-full mr-2 mt-1"></div>
                                <p className='mb-1'>Dose 2</p>
                            </div>
                            <div className="flex my-2 mx-2">
                                <div class="w-5 h-5 bg-yellow-200 rounded-full mr-2 mt-1"></div>
                                <p className='mb-1'>Dose 3</p>
                            </div>
                        </div>
                        <div>
                        <Doughnut data={data} />
                        </div>
                        
                    </div>

                </div>
               
            </div>
            < Table />

        </div>
    </div>
  )
}

export default Dahsboard