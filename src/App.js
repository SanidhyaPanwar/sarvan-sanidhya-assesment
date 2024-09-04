import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Grid from './components/ui/Grid'
import './App.css'
import Menu from './components/ui/Menu'
import SubMenu from './components/ui/SubMenu'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

  }, [])

  return (
    <>
      <div className='container'>
        <Header />
        {/* <img src={bg}/> */}
        <div className='menu'>
          <Menu />
          <SubMenu />
        </div>
        <Grid isLoading={isLoading} />
      </div>
      <Footer />
    </>
  )
}

export default App
