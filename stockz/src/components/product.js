import React from 'react'

export default function product(props) {
  return (
    <div className="product" id={props.pId}>
    {" "}
    {/* Product */}
    <img className="pImg" src={props.pImg} alt={props.pDesc} />
    <p className="title">{props.pName}</p>
    <p className="disc">{props.pDesc}</p>
    <p className="price">{props.pPrice}</p>
    <button
          className="buy"
        //   onClick = {() => {addToCart('Jordan 1 Bred Toe', 160.00)}}
        >
          Add to Cart
        </button>
  </div>
  )
}
