import { useState } from 'react'
import './App.css'
// import studyImg from './assets/study01.jpg';
import StudyVideo from './assets/video.mp4';
import Data from './data.jsx';
console.log(Data);

function App() {

  return (
    <div className='h-screen flex flex-col items-center gap-4'>
      {/* <img src={studyImg} alt="study image" className='w-[300px] rounded-full' /> */}
      <video loop autoPlay muted className='mt-4 w-[500px]'>
        <source src={StudyVideo} type="video/mp4" />
      </video>
      <div>
        <table>
          <thead>
            <tr>
              <th className='border border-gray-400 px-8 py-2'>Month</th>
              <th className='border border-gray-400 px-8 py-2'>Day</th>
              <th className='border border-gray-400 px-8 py-2'>Time</th>
              <th className='border border-gray-400 px-8 py-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            { Data.map((data, index) => (
              <tr key={index}>
                <td className='border border-gray-400 px-8 py-2'>{data.month}</td>
                <td className='border border-gray-400 px-8 py-2'>{data.day}</td>
                <td className='border border-gray-400 px-8 py-2'>{data.time}</td>
                <td className='border border-gray-400 px-8 py-2'>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
