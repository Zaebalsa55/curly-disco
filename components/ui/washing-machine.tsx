"use client"

import { useEffect, useState } from "react"

export const WashingMachine = () => {
  const [counter, setCounter] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const duration = 3000 // 3 секунды
    const maxCount = 1254
    const increment = maxCount / (duration / 50) // 50ms интервал

    const interval = setInterval(() => {
      setCounter(prev => {
        const next = prev + increment
        return next >= maxCount ? maxCount : next
      })
    }, 50)

    return () => clearInterval(interval)
  }, [mounted])

  const displayCounter = Math.floor(counter)

  return (
    <div className="relative flex items-center justify-center">
      {/* Counter */}
      <div className="absolute -left-80 top-1/4 transform -translate-y-1/2">
        <div className="text-center">
          <p className="text-lg font-medium mb-2" style={{ color: "#1B6568" }}>
            Счетчик отремонтированных
          </p>
          <p className="text-lg font-medium mb-4" style={{ color: "#1B6568" }}>
            стиральных машин
          </p>
          <div className="text-lg font-bold" style={{ color: "#1B6568" }}>
            {displayCounter.toLocaleString()}+
          </div>
        </div>
      </div>

      {/* Washing Machine */}
      <div className="relative w-48 h-64 mx-auto">
        {/* Main Body */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl shadow-2xl border border-gray-300">
          {/* Top Control Panel */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-gray-100 rounded-t-xl border-b border-gray-300">
            {/* Display */}
            <div className="absolute top-4 left-4 w-20 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="text-green-400 font-mono text-xs">
                {displayCounter.toString().padStart(4, '0')}
              </div>
            </div>

            {/* Control Knobs */}
            <div className="absolute top-3 right-4 flex space-x-2">
              <div className="w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border border-gray-500"></div>
              <div className="w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border border-gray-500"></div>
            </div>
          </div>

          {/* Teal Accent Strip */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600"></div>

          {/* Door */}
          <div className="absolute top-24 left-0 right-0 flex justify-center">
            <div className="w-36 h-36 bg-gradient-to-br from-white to-gray-100 rounded-full border-4 border-teal-600 overflow-hidden relative shadow-inner">
              {/* Inner Ring */}
              <div className="absolute inset-2 rounded-full border-2 border-gray-300"></div>

              {/* Water with simple animation */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400 via-blue-300 to-blue-200 opacity-80 transition-all duration-2000 ease-in-out rounded-b-full"
                style={{
                  height: mounted ? '50%' : '30%',
                }}
              />

              {/* Door Handle */}
              <div className="absolute top-1/2 right-2 w-2 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Bottom Base */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-xl">
            {/* Feet */}
            <div className="absolute -bottom-1 left-6 w-4 h-2 bg-gray-400 rounded-b-md"></div>
            <div className="absolute -bottom-1 right-6 w-4 h-2 bg-gray-400 rounded-b-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}