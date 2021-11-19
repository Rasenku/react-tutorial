import logo from './logo.svg'

function POPOSSpace(props) {
    const { name, image, address } = props
  return (
    <div>
      <img 
        src={`${process.env.PUBLIC_URL}images/${image}`}   
        width="300"
        height="300"
        alt="Hello"
      />
      <h1>{Name}</h1>
      <div>{Address}</div>
    </div>
  )
}

export default POPOSSpace