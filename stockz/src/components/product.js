import React from 'react'

export default function product(props) {
  let url0=('http://localhost:5000')
  return (
    <div className="product" id={props.pId}>
    {" "}
    {/* Product */}
    <img className="pImg" src={props.pImg} alt={props.pDesc} />
    <p className="title">{props.pName}</p>
    <p className="disc">{props.pDesc}</p>
    <p className="price">{props.pPrice}</p>
    <button
      className="buy" id = {"buy"+props.pId}
      onClick = {() => {fetch(url0+'/addToCart?pId='+props.pId)
      const event = new Event('add');
      document.dispatchEvent(event);
    }}>
        Add to Cart
    </button>
  </div>
  )
}
