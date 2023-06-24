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
    <div className="app p-12 bg-purple-200 h-full min-h-screen w-full text-center">
    <h1 className='text-6xl border-l mb-24'>Nhập vào những việc cần làm</h1>
      <input 
        value={job} 
        onChange={e => setJob(e.target.value)}
        onKeyDown={enterSubmit}
        placeholder='Việc cần làm?'
        className="h-20 w-2/3 mr-16 bg-purple-300 text-5xl text-center"
      />
      <button 
        onClick={handleSubmit}
        className="h-20 w-1/4 bg-purple-400 text-5xl mb-12 border-double border-4 border-sky-500"
      >
        ADD      
      </button>
      
      <ul className='text-5xl font-medium text-left'>
        {
          jobs.map((job, index) => 
            <li key={index} className='m-3 inset-y-0 left-0 min-h-max'>
            {job} 
            </li>
          )
        }
      </ul>
      <div className='text-right'>
        <button className="h-20 w-1/5 bg-purple-400 text-5xl border-double border-4 border-sky-500">Done</button>
      </div>
    </div>
  );
}

export default App;
