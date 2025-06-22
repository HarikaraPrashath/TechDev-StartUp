import React from 'react'

type props = {
    children:React.ReactNode;
}

const BoxText = ({children}:props) => {
  return (
    <h1 className=' px-4 w-fit rounded-lg bg-gray-100 py-1  text-[#f68967] font-bold'>{children}</h1>
  )
}

export default BoxText
