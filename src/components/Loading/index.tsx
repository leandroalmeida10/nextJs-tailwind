import React from 'react'
import LogoControl from '../../../public/Control-361.png'
import Image from 'next/image'

interface propsLoading {
  isVisible: boolean
}

export default function Loading({ isVisible }: propsLoading) {
  return (
    <div>
      {isVisible && (
        <div className="w-full h-full fixed z-10 bg-dark bg-opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div>
            <Image
              src={LogoControl}
              alt="Logo Control 361"
              width={100}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse duration-1000 delay-500"
            />
            <div className="w-full h-full fixed z-11 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
          </div>
        </div>
      )}
    </div>
  )
}
