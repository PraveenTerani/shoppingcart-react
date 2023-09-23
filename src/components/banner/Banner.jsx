import React from 'react'

const Banner = ({heading , subheading}) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-violet-600 text-white py-12 text-center mb-8">
        <h1 className="text-3xl xl:text-5xl font-extrabold mb-4">
          {heading} 
        </h1>
        <p className="xl:text-xl text-sm">
          {subheading}
        </p>
      </div>
  )
}

export default Banner
