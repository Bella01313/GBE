import React from 'react'
export default function Topbar() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
        <div className="relative">
        <input type="text" placeholder='search...' className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4" />
        <span className="text-neutral-100 text-lg"></span>
        </div>
    </div>
  )
}
