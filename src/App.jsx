import './App.css'

import QRcode from './assets/QRcode.png'

const App = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-blue-200 '>
      <div className='bg-white rounded-2xl text-center overflow-hidden h-200 w-64 px-4 py-8'>
        <img
          className='rounded-xl object-scale-down h-50 w-60 mt-[-15px] mb-6'
          src={QRcode}
          alt='Scanner'
        />
        <p className='text-lg font-bold text-gray-900 leading-6	'>
          Improve your front-end skills by building projects
        </p>
        <p className='text-sm mt-2 text-gray-600 leading-4'>
          Scan the QR code to visit Frontend Mentor and take your code skills to
          the next level.
        </p>
      </div>
    </div>
  )
}

export default App
