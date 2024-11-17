'use client'

import { useState } from "react"

const Home = () => {
  const [isOn, setInOn] = useState(false);

  const toggleSwitch = () => {
    setInOn(!isOn);
  };

  return (
    <div className="flex flex-col items-center justify-center
        min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4">
          {/* Bulb Display */}
    
      <div className={`w-40 h-40 md:w-60 md:h-60 rounded-full mb-8 transition-all duration-500 shadow-lg ${
          isOn ? 'bg-yellow-400 shadow-yellow-500/50' : 'bg-gray-100 shadow-md'
        }`}>
      </div>

      {/* Switch Button */}

      <button onClick={toggleSwitch}
        className={`px-8 py-4 md:px-12 md:py-6 text-lg md: text-xl
        font-semibold rounded-full shadow-md focus:outline-none active:scale-95
        ${isOn ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}>
          {isOn ? 'Turn OFF' : 'Turn On'}
      </button>
    </div>

  )
}

export default Home;