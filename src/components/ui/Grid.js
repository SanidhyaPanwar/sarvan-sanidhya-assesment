import React from 'react'
// import Spinner from './Spinner'
import artwork_1 from '../../img/artwork_1.png'
import artwork_2 from '../../img/artwork_2.png'
import artwork_3 from '../../img/artwork_3.png'
import artwork_4 from '../../img/artwork_4.png'
import Cards from './Cards'

const Grid = ({ items, isLoading }) => {
  // isLoading ? (
  //   <Spinner />
  // ) : 
  return (
    <>
    <section className='grid'>
      <Cards order='Artwork1' artwork={artwork_1} title={'Somnia, 2010'} subtitle={'Painting'} color={'#F3BD00'}/>
      <Cards order='Artwork2' artwork={artwork_2} title={'Solar Serenity, 2022'} subtitle={'Drawing'} color={'#F30000'}/>
      <Cards order='Artwork3' artwork={artwork_3} title={'The Shipwrecked, 2013'} subtitle={'Video'} color={'#00E4F3'}/>
      <Cards order='Artwork4' artwork={artwork_4} title={'Mirage, 2022'} subtitle={'Sculpture'} color={'#05F300'}/>
    </section>
    <footer className='innerFooter'>explore</footer>
    </>
  )
}

export default Grid
