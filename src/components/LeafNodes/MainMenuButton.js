import React from 'react'

const MainMenuButton = (props) => {
  return (
    <div className='mainMenuButton'>
        <button>{props.menuItem}</button>
    </div>
  )
}

export default MainMenuButton