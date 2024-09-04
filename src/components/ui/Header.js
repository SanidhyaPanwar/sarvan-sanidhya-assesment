import React, { useState } from 'react'
import Search from './Search'
import send_a_message from '../../img/send_a_message.svg'


const Header = () => {
  const [query, setQuery] = useState('')

  return (<>
    <header className='navbar'>
      <div className='welcomeSection'>
      <img src={send_a_message}/>
      <h1 className='welcomeText'>Welcome, Name</h1>
      </div>
      <div className='searchBox'>
          <Search getQuery={(q) => setQuery(q)} />
      </div>
    </header>
          </>
  )
}

export default Header
