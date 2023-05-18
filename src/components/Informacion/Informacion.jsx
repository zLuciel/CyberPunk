import React from 'react'
import Colmn1 from './Colmn1'
import Colmn2 from './Colmn2'
import "./css/Informacion.css"
const Informacion = () => {
  return (
    <section className='grid-information'>
        <div className='bgpuntos'></div>
      <Colmn1/>
      <Colmn2/>
    </section>
  )
}

export default Informacion
