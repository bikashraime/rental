import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function ComponentOutsideClick() {

  const refOne = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    console.log('useffect run')
  })

  const handleClickOutside = (e) => {
    if(!refOne.current.contains(e.target)){
      console.log('clicked outside...')
    }else{
      console.log('Clicked inside DIV...')
    }
  }



  return (
    <>
      <div>
        <h1>Click outside</h1>
      </div>
      <div
        ref={refOne}
        style={{ width: '5rem', height: '5rem', backgroundColor: 'black' }}
      ></div>
    </>
  )
}
