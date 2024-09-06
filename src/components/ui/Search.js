import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    // getQuery(q)
  }

  return (
    <section className='search'>
      <form>
        <div className="left-inner-addon">
          <input type="text"
            placeholder='search by artwork, artist name ...'
            value={text}
            onChange={(e) => onChange(e.target.value)}
            autoFocus />
        </div>
        {/* <input
          type='text'
          className='form-control'
          placeholder="search by artwork, artist name ...&#xF002;"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        /> */}
      </form>
    </section>
  )
}

export default Search
