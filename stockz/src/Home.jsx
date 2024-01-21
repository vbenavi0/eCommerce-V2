import React, { useEffect } from 'react'
import CartProd from './components/cartProd';
import Footer from './components/footer';
import { createRoot } from 'react-dom/client';

export default function Home() {
  let url0=('https://stockz-3c3j.onrender.com')
  console.log(url0)
  var subTotal = 0.0;
  var counter = 0;
  var cartRoot = ""
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  var index = 1;
  var heroId;
  function changeHero(){//change hero img
    document.getElementById('hiddenImg').style.opacity = 0;
    heroId = 'hero' + index;
    document.getElementById(heroId).style.opacity = 0;
    if (index === 4){
        index = 1;
    }
    else {
        index++;
    }
    heroId = 'hero' + index;
    document.getElementById(heroId).style.opacity = 1;
  }
  setInterval(changeHero, 3000);

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
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home</title>
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
    <section id="about">
      <h2>About</h2>
      <p>We believe in selling at MSRP instead of upcharging our products.</p>
      <p>
        Buy the hottest sneakers, apparel, electronics, collectibles, trading
        cards and accessories at retail price.
      </p>
    </section>
    <section id="hero">
      <img id="hiddenImg" src="images/hero1.png" alt="Jordans" />
      <img
        id="hero1"
        className="heroImg"
        src="images/hero1.png"
        alt="Jordan 1 Green"
      />
      <img
        id="hero2"
        className="heroImg"
        src="images/hero2.png"
        alt="Jordan 1 Blue"
      />
      <img
        id="hero3"
        className="heroImg"
        src="images/hero3.png"
        alt="Jordan 4 White"
      />
      <img
        id="hero4"
        className="heroImg"
        src="images/hero4.png"
        alt="Jordan 4 Black"
      />
    </section>
    <section id="prods">
      <img src="images/prods.png" alt="Products Layout" />
      <p>
        Our products consist of the trendiest and most coveted apparel and items
        including Jordans, Essentials, Consoles, Collectibles and much more.
      </p>
    </section>
  </main>
  <Footer/>
</>
  )
}
