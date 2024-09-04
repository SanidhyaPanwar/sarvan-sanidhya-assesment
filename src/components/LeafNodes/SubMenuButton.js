import React from 'react'

const SubMenuButton = (props) => {
  return (
    <div className='subMenuButton'>
        <button>{props.menuItem}</button>
    </div>
  )
}

export default SubMenuButton