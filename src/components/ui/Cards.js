import React from 'react'
import Caption from '../LeafNodes/Caption'
import Dot from '../LeafNodes/Dot'
import SelectButton from '../LeafNodes/SelectButton'
import AlbumArt from '../LeafNodes/AlbumArt'

const CharacterItem = (props) => {
  return (
    <div className='card'>
      <div className='cardInner'>
        <div className='cardFront'>
        <AlbumArt artwork={props.artwork}/>
        <div className='cardDetails'>
        <Caption title={props.title} subtitle={props.subtitle}/>
        <Dot color={props.color}/>
          </div>
        <SelectButton/>
        </div>
        {/* <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default CharacterItem
