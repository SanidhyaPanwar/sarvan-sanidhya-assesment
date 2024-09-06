import React from 'react'
import Caption from '../LeafNodes/Caption'
import Dot from '../LeafNodes/Dot'
import SelectButton from '../LeafNodes/SelectButton'
import AlbumArt from '../LeafNodes/AlbumArt'

const CharacterItem = (props) => {
  var className = 'cardInner'+props.order
  return (
    <div className='card'>
      <div className='cardFront'>
        <div className={className}>
        <AlbumArt artwork={props.artwork}/>
        <div className='cardDetails'>
        <Caption title={props.title} subtitle={props.subtitle}/>
        <Dot color={props.color}/>
          </div>
        <SelectButton/>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
