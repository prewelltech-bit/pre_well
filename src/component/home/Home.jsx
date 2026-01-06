import React from 'react'
import Header from '../../Header'
import Body from './Body'
import Footer from '../../Footer'

const Home = () => {
  return (
    <>
        <main className="m-0 p-0 box-border overflow-x-hidden">
            <Header />
            <Body />
            <Footer />
        </main>
    </>
  )
}

export default Home
