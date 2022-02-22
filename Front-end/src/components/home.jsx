import vaccination from '../images/vaccination.png'
import { Link } from "react-router-dom";

import Button from './button'

const Home = () => {
  let test =  <Link to="test">Get your vaccine</Link>
  return (
    <div className='flex items-center justify-center h-screen mx-20' >
        <div className='flex-1 text-justify px-28 text-blue-900 leading-7	'	>
            <h1 className=' text-4xl font-bold	'>Get your vaccin,<br/>Save your health</h1>
            <p className='my-2'>I think the darkest days of the pandemic are yet to come, and I share that because of the new variants, these new mutated viruses that are surely causing a challenge.
              preserve your health and get your vaccine.
            </p>
            <Button button={test} />
        </div>
        <div className='flex-1'	>
            <img src={vaccination} alt="" />
        </div>
    </div>
  )
}

export default Home