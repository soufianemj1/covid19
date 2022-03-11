import { NavLink } from "react-router-dom";
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { GrUserManager } from 'react-icons/gr';


function SideBar() {
  return (
    <div>
        <div class="min-h-screen  flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div class="fixed flex flex-col h-screen  w-64 bg-gray-900 shadow-lg">
                <div className="flex items-center h-20 border-b border-gray-800 flex justify-center">
                    <div className="mr-5">
                        {/* <p class="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">Hello,</p> */}
                        <img src="https://img.icons8.com/external-filled-outline-wichaiwi/64/000000/external-vaccinated-reopening-country-filled-outline-wichaiwi.png"/>                    
                    </div>
                </div>
                <div class="overflow-y-auto overflow-x-hidden flex-grow ">
                    <ul class="flex flex-col py-6 space-y-1">

                        <li class="px-5">
                            <div class="flex flex-row items-center h-8">
                                <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard</div>
                            </div>
                        </li>

                        <li>
                            <NavLink to={'/admin'} className={ ({ isActive }) => isActive ?" relative flex flex-row items-center h-11 focus:outline-none bg-gray-700 text-gray-200 border-l-4 border-blue-500 pr-6":"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"}>
                                <span class="inline-flex justify-center items-center ml-4 ">
                                    <MdOutlineSupervisorAccount/>
                                </span>
                                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">National Supervisor</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/dashboard'} className={ ({ isActive }) => isActive ?" relative flex flex-row items-center h-11 focus:outline-none bg-gray-700 text-gray-200 border-l-4 border-blue-500 pr-6":"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"}>
                                <span class="inline-flex justify-center items-center ml-4">
                                    <GrUserManager />
                                </span>
                                <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Manager</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar