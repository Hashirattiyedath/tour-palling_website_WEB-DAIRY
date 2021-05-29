import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import cardData from "./components/CardData";
import { FaTimesCircle } from 'react-icons/fa';
import "./index.css";

const App = () => {

  const [favImages, setfavImages] = useState([])
  function getFavImages(image) {
    setfavImages([...favImages, image])
  }

  // add images
  let userFavImages = favImages.map((imgSrc, currentId)=> {
    return (
      <div className="favImage">
        <FaTimesCircle onClick={ ()=> {removeFavImages(imgSrc)} } className="icon"/>
        <img src={imgSrc} alt="" />
      </div>
    )
  })
  
  const removeFavImages = (imgSrc)=> {
    setfavImages([...favImages].filter((currentImg)=> {
      return currentImg != imgSrc
    }))
  }

  let card = cardData.map((cardItems) => {
    return (
      <Card cardContent={{
        imgSrc: cardItems.imgSrc,
        name: cardItems.name,
        mobile: cardItems.mobile,
        email: cardItems.email
      }}
      cardFun={ getFavImages}
      />
    )
  })

  return (
    <>
      <Header />
      <div className="card_container container">
        
        <div className="container-flex">
          <div className="card-flex">
            {card}
          </div>
          <aside>
            <h2>Favourite</h2>  
            {userFavImages}
          </aside>
        </div>
        
      </div>
      <Hero />
      <Footer />
    </>
  );
};

export default App;
