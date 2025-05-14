import React,{useState , useEffect} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Counter() {
   const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount) : 0;
  });
    useDocumentTitle(`Count: ${count}`)
    useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-800'>
        <h1 className='text-4xl font-bold mb-6'>Counter: {count}</h1>
        <div className='flex gap-4'>
        <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition' onClick={() => setCount(count +1)}> Increment</button>
        <button className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition' onClick={() => setCount(count -1)}> Decrement</button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition" onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>
  )
}
 