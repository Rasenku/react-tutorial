import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'
import React from 'react';


function POPOSList() {

// takes from our JSON database
const spaces = data.map(( { title, address, images, hours }, i ) => {

    return (
      <POPOSSpace
        id={i} // Gives us the index of our objects
        key={title} // Each child in the list gain a unique "key" prop.
        name={title} // takes titles from db
        address={address} // takes addresses from db
        image={images[0]} // takes images from db
        hours={hours} // takes hours from db
      />
    )
  })
  
    return (
      <div className="POPOSList">
        { spaces }
      </div>
    )
  }
  
  export default POPOSList