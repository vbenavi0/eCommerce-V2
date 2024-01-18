import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Product from './components/product';
import Footer from './components/footer';
import MapProds from './components/mapProds';
import { createRoot } from 'react-dom/client';

export default function Sneakers() {
  let url = window.location.href
  console.log(url)
  let url0=('http://localhost:5000')
  console.log(url0)
  var subTotal = 0;
  var counter = 0;
  var prodGrid
  var root = ''
  function addToCart(item, price){ //Adds items to cart
    console.log(item+' has been added to cart');
    // alert('Added to shopping cart.');
    let docCart = document.getElementById('cart');
    let newItem = document.createElement('p');
    newItem.textContent = item + " : $" +price;
    console.log(newItem);
    docCart.appendChild(newItem);
    subTotal += price;
    document.getElementById('subTotal').textContent = 'Subtotal: $'+ subTotal;
    showCartAdd();
    setTimeout(hideCartAdd, 2000);
}

function showCartAdd(){ //Show pop-up for adding item to cart
    document.getElementById('addToCart').style.zIndex ='1';
    document.getElementById('addToCart').style.width ='80%';
}

function hideCartAdd(){ //Hide pop-up
    document.getElementById('addToCart').style.zIndex ='-1';
    document.getElementById('addToCart').style.width ='0%';
}

function showCart(){ //shows or hides cart
    console.log('show')
    if(counter%2 === 0){
        document.getElementById('cart').style.zIndex ='1';
        document.getElementById('cart').style.width ='80%';
        counter++
    }
    else if(counter%2 === 1){
        document.getElementById('cart').style.zIndex =-'1';
        document.getElementById('cart').style.width ='0%';
        counter++
    }
}

function loadAnimation(){
  var loadMsg = document.getElementById('loading')
  loadMsg.style.visibility = 'visible'
  loadMsg.style.width = '25%'
  loadMsg.style.height = 'auto'
    loadMsg.textContent+='.'
    if(loadMsg.textContent === 'Loading....'){
      loadMsg.textContent = 'Loading'
    }
}

useEffect(()=>{
  console.log('loaded')
  sortFilter();
}, [])

function sortFilter(){
  const prodGrid = document.getElementById('prodGrid')
  if(root == ''){
    root = createRoot(prodGrid)
    prodGrid.innerHTML=''
  }
  else{
    root.render()
  }
  var loadMsg = document.getElementById('loading')
  let loadAni = setInterval(loadAnimation, 500)
  var sortBy = document.getElementById('sort').value
  var filterBy = document.getElementById('filter').value
  prodGrid.style.visibility = 'hidden'
  console.log(sortBy)
  console.log('http://localhost:5000/sneakers?sort='+sortBy+'&filter='+filterBy)
  fetch(url0+'/sneakers?sort='+sortBy+'&filter='+filterBy)
  .then(response=>
    response.json())
  .then((data)=>{
    console.log(data);
      root.render(data.map((product) => <Product key = {product.prod_id} pName = {product.prod_name} pDesc = {product.prod_desc} pImg = {product.prod_img} pPrice = {'$'+product.prod_price}/>))
      prodGrid.style.visibility = 'visible'
      loadMsg.style.visibility = 'hidden'
      clearInterval(loadAni)
    })
}
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sneakers</title>
  <link rel="icon" type="image/x-icon" href="images/z.png" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <header>
    <a id="stockz" href="/">
      StockZ
    </a>
    <nav>
      <a className="navLink" href="/sneakers">
        Sneakers
      </a>
      <a className="navLink" href="/apparel">
        Apparel
      </a>
      <a className="navLink" href="/electronics">
        Electronics
      </a>
      <a className="navLink" href="/collectibles">
        Collectibles
      </a>
      <a className="navLink" href="/contact">
        Contact
      </a>
      <button className="material-symbols-outlined" onClick={showCart}>shopping_cart</button>
    </nav>
  </header>
  <main>
    <section id="cart">
      <h2>Shopping Cart:</h2>
      <h3 id="subTotal">Subtotal: $0</h3>
      <br />
      <br />
    </section>
    <br />
    <h4>Sneakers</h4>
    <br />
    <h2 id="addToCart">Added to Cart</h2>
    <div id = 'filters'>
      <div class = 'filter'>
        <label>Sort by: </label>
        <select id = "sort" onChange={()=>{sortFilter()}}>
          <option value="DEF">Featured</option>
          <option value="LTH">Low To High</option>
          <option value="HTL">High To Low</option>
        </select>
      </div>
      <div class = 'filter'>
        <label>Filter: </label>
        <select id = "filter" onChange={()=>{sortFilter()}}>
          <option value="ALL">All</option>
          <option value="J1">Jordan 1</option>
          <option value="J4">Jordan 4</option>
          <option value="DL">Dunk</option>
        </select>
      </div>
    </div>
    <p id = 'loading'>Loading</p>
    <section className="grid1" id='prodGrid'>
    <Product pName = "Jordan 1 Retro High" pDesc = "Bred Toe" pImg = "images/J1R.png" pPrice = "$200"></Product>
      {" "}
      {/* Product Grid */}
      <div className="product" id="J1R">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/J1R.png" alt="Jordan 1 Bred Toe" />
        <p className="title">Jordan 1 Retro High</p>
        <p className="disc">Bred Toe</p>
        <p className="price">$160.00</p>
        <button
          className="buy"
          onClick = {() => {addToCart('Jordan 1 Bred Toe', 160.00)}}
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="J1B">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/J1B.png" alt="Jordan 1 Royal Toe" />
        <p className="title">Jordan 1 Retro High</p>
        <p className="disc">Royal Toe</p>
        <p className="price">$160.00</p>
        <button
          className="buy"
          onClick = {() => {addToCart('Jordan 1 Royal Toe', 160.00)}}
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="J1G">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/J1G.png" alt="Jordan 1 Pine Green" />
        <p className="title">Jordan 1 Retro High</p>
        <p className="disc">Pine Green</p>
        <p className="price">$160.00</p>
        <button
          className="buy"
          onClick = {() => {addToCart('Jordan 1 Pine Green', 160.00)}}
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="J1P">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/J1P.png"
          alt="Jordan 1 Court Purple"
        />
        <p className="title">Jordan 1 Retro High</p>
        <p className="disc">Court Purple</p>
        <p className="price">$160.00</p>
        <button
          className="buy"
          onClick = {() => {addToCart('Jordan 1 Court Purple', 160.00)}}
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="J4B">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/J4B.png"
          alt="Jordan 4 Black Canvas"
        />
        <p className="title">Jordan 4 Retro</p>
        <p className="disc">Black Canvas</p>
        <p className="price">$210.00</p>
        <button
          className="buy"
          onclick="addToCart('Jordan 4 Black Canvas', 210.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="J4T">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/J4T.png" alt="Jordan 4 Thunder" />
        <p className="title">Jordan 4 Retro</p>
        <p className="disc">Thunder</p>
        <p className="price">$210.00</p>
        <button className="buy" onclick="addToCart('Jordan 4 Thunder', 210.00)">
          Add to Cart
        </button>
      </div>
      <div className="product" id="J4W">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/J4W.png" alt="Jordan 4 White Oreo" />
        <p className="title">Jordan 4 Retro</p>
        <p className="disc">White Oreo</p>
        <p className="price">$210.00</p>
        <button
          className="buy"
          onclick="addToCart('Jordan 4 White Oreo', 210.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="J4R">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/J4R.png" alt="Jordan 4 Fire Red" />
        <p className="title">Jordan 4 Retro</p>
        <p className="disc">Fire Red</p>
        <p className="price">$210.00</p>
        <button
          className="buy"
          onclick="addToCart('Jordan 4 Fire Red', 210.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="DLP">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/DLP.png" alt="Dunk Low Panda" />
        <p className="title">Dunk Low Retro</p>
        <p className="disc">Panda</p>
        <p className="price">$110.00</p>
        <button className="buy" onclick="addToCart('Dunk Low Panda', 110.00)">
          Add to Cart
        </button>
      </div>
      <div className="product" id="DLW">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/DLW.png"
          alt="Dunk Low Pure Platinum"
        />
        <p className="title">Dunk Low Retro</p>
        <p className="disc">Pure Platinum</p>
        <p className="price">$110.00</p>
        <button
          className="buy"
          onclick="addToCart('Dunk Low Pure Platinum', 110.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="DLR">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/DLR.png"
          alt="Dunk Low University Red"
        />
        <p className="title">Dunk Low Retro</p>
        <p className="disc">University Red</p>
        <p className="price">$110.00</p>
        <button
          className="buy"
          onclick="addToCart('Dunk Low University Red', 110.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="DLB">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/DLB.png"
          alt="Dunk Low Hyper Cobalt"
        />
        <p className="title">Dunk Low Retro</p>
        <p className="disc">Hyper Cobalt</p>
        <p className="price">$110.00</p>
        <button
          className="buy"
          onclick="addToCart('Dunk Low Hyper Cobalt', 110.00)"
        >
          Add to Cart
        </button>
      </div>
    </section>
  </main>
  <Footer/>
</>
  )
}
