import React from 'react'


const AlbumArt = (props) => {
  return (
    <div className='albumArt'>
        <img src={props.artwork}/>
    </div>
  )
}

export default AlbumArt