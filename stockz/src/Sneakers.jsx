import React, { useEffect } from 'react'
import Product from './components/product';
import CartProd from './components/cartProd';
import Footer from './components/footer';
import { createRoot } from 'react-dom/client';

// import MapProds from './components/mapProds';
// import ReactDOM from 'react-dom'

export default function Sneakers() {
  let url0=('https://stockz-3c3j.onrender.com')
  console.log(url0)
  var subTotal = 0.0;
  var counter = 0;
  var root = ''
  var cartRoot = ""
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

document.addEventListener('add', function() {
  showCartAdd();
  setTimeout(hideCartAdd, 2000);
})

document.addEventListener('remove', function() {
  let cartItems = document.getElementById('cartItems')
  subTotal=0
  if(subTotal===0)document.getElementById('removeAll').style.visibility='hidden'
  cartRoot = createRoot(cartItems)
        if(cartRoot === ''){
          cartRoot = createRoot(cartItems)
        }
  fetch(url0+'/getCart')
          .then(response=>
          response.json())
          .then((data)=>{
          data.forEach(product => {
            subTotal+=parseFloat(product.prod_price)
          });
          cartRoot.render(data.map((product) => <CartProd key = {product.prod_id} pId = {product.prod_id} pName = {product.prod_name} pDesc = {product.prod_desc} pImg = {product.prod_img} pPrice = {product.prod_price} pCat = {product.prod_cat}/>))
          if(subTotal!==0)document.getElementById('removeAll').style.visibility='visible'
          document.getElementById('subTotal').innerText=('Subtotal: '+USDollar.format(subTotal))})
})

function showCartAdd(){ //Show pop-up for adding item to cart
    document.getElementById('addToCart').style.zIndex ='1';
    document.getElementById('addToCart').style.width ='80%';
}

function hideCartAdd(){ //Hide pop-up
    document.getElementById('addToCart').style.zIndex ='-1';
    document.getElementById('addToCart').style.width ='0%';
}

function showCart(){ //shows or hides cart
  let cart = document.getElementById('cart')
  let cartItems = document.getElementById('cartItems')
    if(counter%2 === 0){
        cart.style.zIndex ='1';
        cart.style.width ='90%';
        counter++
        subTotal=0
        if(cartRoot === ''){
          cartRoot = createRoot(cartItems)
          cartItems.innerHTML=''
        }
        else{
          cartRoot.render()
        }
        fetch(url0+'/getCart')
          .then(response=>
          response.json())
          .then((data)=>{
          data.forEach(product => {
            subTotal+=parseFloat(product.prod_price)
          });
          cartRoot.render(data.map((product) => <CartProd key = {product.prod_id} pId = {product.prod_id} pName = {product.prod_name} pDesc = {product.prod_desc} pImg = {product.prod_img} pPrice = {product.prod_price} pCat = {product.prod_cat}/>))
          if(subTotal!==0)document.getElementById('removeAll').style.visibility='visible'
          document.getElementById('subTotal').innerText=('Subtotal: '+USDollar.format(subTotal))})
    }
    else if(counter%2 === 1){
        cart.style.zIndex =-'1';
        cart.style.width ='0%';
        counter++
    }
}

function clearCart(){ //shows or hides cart
  let cartItems = document.getElementById('cartItems')
  subTotal=0.0
    if(cartRoot === ''){
      cartRoot = createRoot(cartItems)
      cartItems.innerHTML=''
    }
    else{
      cartRoot.render()
    }
    fetch(url0+'/clearCart')
    document.getElementById('subTotal').innerText=('Subtotal: '+USDollar.format(subTotal))
    document.getElementById('removeAll').style.visibility='hidden'
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

function sortFilter(){
  const prodGrid = document.getElementById('prodGrid')
  if(root === ''){
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
  console.log(url0+'/sneakers?sort='+sortBy+'&filter='+filterBy)
  fetch(url0+'/sneakers?sort='+sortBy+'&filter='+filterBy)
  .then(response=>
    response.json())
  .then((data)=>{
      root.render(data.map((product) => <Product key = {product.prod_id} pId = {product.prod_id} pName = {product.prod_name} pDesc = {product.prod_desc} pImg = {product.prod_img} pPrice = {product.prod_price} pCat = {product.prod_cat}/>))
      prodGrid.style.visibility = 'visible'
      loadMsg.style.visibility = 'hidden'
      loadMsg.style.height = '0'
      clearInterval(loadAni)
    })
}
useEffect(()=>{
  sortFilter();
}, [])
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
      <button id = 'close' onClick={showCart}>X</button>
      <h2>Shopping Cart:</h2>
      <div id = "cartItems"></div>
      <button id="removeAll" onClick={()=>clearCart()}>Remove All</button>
      <h3 id="subTotal">Subtotal: $0.00</h3>  
    </section>
    <br />
    <h4>Sneakers</h4>
    <br />
    <h2 id="addToCart">Added to Cart</h2>
    <div id = 'filters'>
      <div className = 'filter'>
        <label>Sort by: </label>
        <select id = "sort" onChange={()=>{sortFilter()}}>
          <option value="DEF">Featured</option>
          <option value="LTH">Price: Low To High</option>
          <option value="HTL">Price: High To Low</option>
        </select>
      </div>
      <div className = 'filter'>
        <label>Filter: </label>
        <select id = "filter" onChange={()=>{sortFilter()}}>
          <option value="ALL">All</option>
          <option value="DL">Dunk</option>
          <option value="J1">Jordan 1</option>
          <option value="J4">Jordan 4</option>
        </select>
      </div>
    </div>
    <p id = 'loading'>Loading</p>
    <section className="grid1" id='prodGrid'>
    </section>
  </main>
  <Footer/>
</>
  )
}
