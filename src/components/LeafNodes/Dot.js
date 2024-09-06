import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Dot = (props) => {
    var color = props.color
  return (
    <div className='dot'>
        <FontAwesomeIcon icon={faCircle} style={{color:color}} />
    </div>
  )
}

export default Dot