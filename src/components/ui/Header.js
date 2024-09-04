import React from 'react'
import Search from './Search'
import send_a_message from '../../img/send_a_message.svg'


const Header = () => {
  // const [query, setQuery] = useState('')

  return (<>
    <header className='navbar'>
      <div className='welcomeSection'>
      <img src={send_a_message} alt='send a message'/>
      <h1 className='welcomeText'>Welcome, Name</h1>
      </div>
      <div className='searchBox'>
          <Search/>
          {/* <Search getQuery={(q) => setQuery(q)} /> */}
      </div>
    </header>
          </>
  )
}

export default Header
