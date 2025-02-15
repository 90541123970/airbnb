import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
/*  
challenge: build the navbar component.
check the figma file for the design specifics.
*/

export default function App() {
         //<Hero/>
  return (
    <div>
      <Navbar />
      <Hero/>
      <Card
      img="https://i.pinimg.com/originals/c2/03/56/c203561b7afad1a093dc8de90757882f.jpg"
      rating="5.0"
      reviewcount={6}
      country="USA"
      title="Beautiful nature and beautiful lake"
      price={136}
      />
      
    </div>
  )
}