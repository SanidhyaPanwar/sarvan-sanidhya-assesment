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

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     setIsLoading(true)
  //     const content = ["Somnia, 2010","Solar Serenity, 2022","The Shipwrecked, 2013","Mirage, 2022"];
  //     setItems(content.map(()=>{

  //     }))
  //     setIsLoading(false)
  //   }

  //   fetchItems()
  // }, [query])

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
        {/* <Grid isLoading={isLoading} items={items}/> */}
      </div>
      <Footer />
    </>
  )
}

export default App
