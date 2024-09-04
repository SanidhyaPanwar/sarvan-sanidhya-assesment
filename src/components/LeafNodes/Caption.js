import React from 'react'

const Caption = (props) => {
  return (
    <div className='caption'>
        <h3 className='title'>{props.title}</h3>
        <h4 className='subtitle'>{props.subtitle}</h4>
    </div>
  )
}

export default Caption