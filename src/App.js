import './index.css';
import { useState } from 'react';

function App() {
  /* To do List sử dụng useState() */
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() =>{
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }

  const enterSubmit = (event) => {
    if (event.key === 'Enter') {
      setJobs(prev => {
        const newJobs = [...prev, job]
  
        const jsonJobs = JSON.stringify(newJobs)
        localStorage.setItem('jobs', jsonJobs)
  
        return newJobs
      })
      setJob('')
    }
    
  }
  return (
    <div className="p-12 bg-purple-200 h-full min-h-screen w-full text-center flex flex-row divide-x divide-violet-500">
      <div className='w-3/5 basis-2/3'>
        <h1 className='text-6xl border-l mb-24 italic'>What's the plan for today?</h1>
        <input 
          value={job} 
          onChange={e => setJob(e.target.value)}
          onKeyDown={enterSubmit}
          placeholder='Need to do?'
          className="h-20 w-1/2 mr-3 bg-purple-300 text-5xl text-center rounded-full"
        />
        <button 
          onClick={handleSubmit}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-20 w-1/3 bg-purple-400 text-5xl mb-12 border-sky-500 rounded-full max-w-full ml-4"
        >
          Add Todo      
        </button>
        
        <table className="w-full table-auto text-5xl font-medium divide-y divide-violet-500">
          <thead>
            <tr>
              <th className='text-start p-5'>Jobs</th>
              <th className=''>Edit</th>
              <th className=''>Remove</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-violet-500'>
            {
            jobs.map((job, index) =>
            <tr key={index} className='max-w-full '>
              <td className='m-3 p-2 text-start'>{job}</td>
              <td> <button className='h-12 p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </button></td>
              <td> <button className='h-12 p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </button></td>
            </tr>
            )}
            
          </tbody>
        </table>
      </div>
      <div className='basis-1/3'>
          <h1 className='text-6xl mb-24 italic text-center'>Had done!</h1>
      </div>
    </div>
  );
}

export default App;
