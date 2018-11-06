import React from 'react'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Search from './components/search'
import AddPost from './components/addPost'

const App = () =>{
  return(

    <div>
      <h1>Frank Mwesigwa</h1>
      <h2>James Runner</h2>
      <Header/>
      <Navbar/>
      <Footer/>
      <Search/>
      <AddPost/>
    </div>

  )

}

export default App