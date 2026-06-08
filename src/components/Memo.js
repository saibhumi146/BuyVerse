import React,{useState} from 'react'
import { nthPrime } from '../Utilities/Constant';

const Memo = () => {
    const[num,setNum] = useState(10);
    const ans = nthPrime(10);
    console.log(ans);
  return (
    <div className='flex justify-center items-center '>
      <h1 className='text-2xl font-bold'> use memo</h1>
      <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} className='border-2 border-gray-300 rounded-md p-2 m-4'/>
      <h1 className='text-xl font-bold'> {nthPrime(num)}</h1>
    </div>
  )
}

export default Memo;
