import React from 'react'

function GhostButton({text, className}) {
  return (
    <button className={`flex-center rounded-md bg-transparent border border-transparent duration-150 hover:border-primary2 py-[0.625rem] w-[8rem] text-sm ${className}`}>{text}</button>
  )
}

export default GhostButton