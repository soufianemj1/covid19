import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useCookies } from 'react-cookie';

function Table() {
  const [data, setData] = useState([]);
  const [cookies, setCookie] = useCookies([]);
  const getData = () => {
    axios 
    .get("http://localhost:4001/api/appointment/getAppointement")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const region = cookies.region.toUpperCase();

  return (
    <div>
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
                  { data &&
                    data.map((el, index) => 
                    el.Ville.toUpperCase() === region && (

                     
                      
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
                      
                      )
                      
                    )} 
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
