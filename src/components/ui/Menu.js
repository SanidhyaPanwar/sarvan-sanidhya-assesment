import React from 'react'
import MainMenuButton from '../LeafNodes/MainMenuButton'

const Menu = () => {
  return (
    <div className='mainMenu'>
        <MainMenuButton menuItem={'Home'}/>
        <MainMenuButton menuItem={'Explore'}/>
        <MainMenuButton menuItem={'Create'}/>
        <MainMenuButton menuItem={'Settings'}/>
    </div>
  )
}

export default Menu