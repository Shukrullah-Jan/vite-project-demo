import React from 'react'


import "../sass/main.scss"

const Header = () => {
  return (
    <div className='header'>Header {import.meta.env.VITE_API_URL}</div>
  )
}

export default Header