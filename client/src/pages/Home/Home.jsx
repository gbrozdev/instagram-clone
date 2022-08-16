import React from 'react'
import Blogcards from '../../components/Blogcards/Blogcards'
import Longcard from '../../components/Blogcards/Longcard'
import Bloglist from '../../components/Bloglist/Bloglist'
import Calltoaction from '../../components/Calltoaction/Calltoaction'
// import Feature from '../../components/Feature/Feature'
// import Hero from '../../components/Hero/Hero'

function Home() {
  return (
    <>
    <Blogcards />
    <Bloglist />
    <Calltoaction />
    <Longcard />
    <Longcard />
    <Longcard />
    </>
  )
}

export default Home