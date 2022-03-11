import React from 'react'
import SideBar from './SideBar'
import Table from './table'

function Admin() {
  return (
    <div className='flex w-screen jusify-center'>

        <SideBar/>
        <div className='w-full p-20 bg-gray-50'>
            <Table/>
        </div>

    </div>
    
  )
}

export default Admin