import POPOSSpace from './POPOSSpace';
import './POPOSList.css';

function POPOSList() {
    return (
    <div className="POPOSList">
      <POPOSSpace 
      name="50 California Street"
      address="50 California St."
      image="50-california-st.jpg"
      />
      <POPOSSpace />
      <POPOSSpace />
      <POPOSSpace />
        <h1>Keep your eye on this space for future content...</h1>
      </div>
    )
  }
  
  export default POPOSList