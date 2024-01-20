import React from 'react'

export default function cartProd(props) {
  let url0=('http://localhost:5000')
  return (
    <div className="cartProd" id={props.pId}>
    {" "}
    {/* Product */}
    <img className="pImg" src={props.pImg} alt={props.pDesc} />
    <p className="title">{props.pName}</p>
    <p className="disc">{props.pDesc}</p>
    <p className="price">{props.pPrice}</p>
    <button
      className="remove" id = {"remove"+props.pId}
      onClick = {() => {fetch(url0+'/removeFromCart?pId='+props.pId)
      const event = new Event('remove');
      document.dispatchEvent(event);}}>
        Remove
    </button>
  </div>
  )
}
