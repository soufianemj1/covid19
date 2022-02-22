import React from 'react'

function Button(props) {
  return (
    <div>
        <button type="button" class=" bg-blue-100 my-4 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">{props.button}</button>
    </div>
  )
}

export default Button