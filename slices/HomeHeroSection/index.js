import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'

const HomeHeroSection = ({ slice, color }) => {


  const [Selected, setSelected] = useState({ selectedHeading: '' });

  useEffect(() => {
    
  }, [setSelected]);
  
  // I need to when the mouse hover 

  return (
  <section className="w-full h-screen grid justify-center items-center bg-lightDark text-center">
    <div>
      {slice.primary.subHeading 
        ? <h2 className="text-6xl font-sans text-white font-bold pb-12">{RichText.asText(slice.primary.subHeading)} </h2>
        : null
      }
      { slice?.items?.map((item, i) =>
            <h1 
              className="text-8xl font-CenturyGothic font-bold text-transparent hover:text-white" 
              style={{ WebkitTextStroke: " 2px #fff", }}
              key={i}
              > 
              <button className=""> 
                {RichText.asText(item.heading)} 
              </button> 
            </h1> 
        ) 
      }
    </div>
  </section>
)}

export default HomeHeroSection