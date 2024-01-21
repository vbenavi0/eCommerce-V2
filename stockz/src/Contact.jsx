import React, { useEffect } from 'react'
import CartProd from './components/cartProd';
import Footer from './components/footer';
import { createRoot } from 'react-dom/client';

export default function Contact() {
  var uName;
  var uEmail;
  var uQuestion;
  var uComment;
  var warning;
  let url0=('https://stockz-3c3j.onrender.com')
  console.log(url0)
  var subTotal = 0.0;
  var counter = 0;
  var cartRoot = ""
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

  function formSubmit(){ //form validation
    warning = "";
    document.getElementById('warning').innerHTML = ""
    uName = document.getElementById('uName');
    uEmail = document.getElementById('uEmail');
    uQuestion = document.getElementById('uQuestion');
    uComment = document.getElementById('uComment');
    if(document.getElementById('uName').value === ''){ //If no name is entered
        warning += '[Please enter your name] ';
        document.getElementById('warning').innerHTML = warning;
        uName.style.borderColor = 'red';
    }
    else{
        uName.style.borderColor = 'green';
    }

    if(document.getElementById('uEmail').value === '' || document.getElementById('uEmail').value.includes('@') === false || document.getElementById('uEmail').value.includes('.com') === false){ //if email is entered incorrectly
        warning += '[Please enter a valid email] ';
        document.getElementById('warning').innerHTML = warning;
        uEmail.style.borderColor = 'red';
    }
    else{
        uEmail.style.borderColor = 'green';
    }

    if(document.getElementById('uQuestion').value === '' && document.getElementById('uComment').value === ''){
        warning += '[Please enter a question or comment] ';
        document.getElementById('warning').innerHTML = warning;
        uQuestion.style.borderColor = 'orange';
        uComment.style.borderColor = 'orange';
    }
    else{
        uQuestion.style.borderColor = 'green';
        uComment.style.borderColor = 'green';
    }

    if(warning === ""){
        document.getElementById('warning').innerHTML = "";
        document.getElementById('submission').textContent=(`Successfully Submitted: Name: ${uName.value}, Email: ${uEmail.value}, Question: ${uQuestion.value}, Comment: ${uComment.value}`);
        showSubmit();
        setTimeout(hideSubmit, 3000);
    }
}

function showSubmit(){ //Show User Submission
    document.getElementById('submission').style.zIndex ='1';
    document.getElementById('submission').style.width ='80%';
}

function hideSubmit(){ //Hides User Submission
    document.getElementById('submission').style.zIndex ='-1';
    document.getElementById('submission').style.width ='0%';
}

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
  <title>Contact</title>
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
    <h4>Contact</h4>
    <br />
    <section id="faqs">
      <p id="faqHead">FAQS</p>
      <p className="faq">Are there any hidden fees or costs?</p>
      <p className="faqAns">
        Nope, the price you see is the price you pay plus tax if applicable.
      </p>
      <p className="faq">How much does shipping cost?</p>
      <p className="faqAns">
        We provide free shipping to all US addresses, worldwide shipping fees
        may vary.
      </p>
      <p className="faq">How long do orders take to ship?</p>
      <p className="faqAns">Shipping usually takes around 3-8 business days.</p>
      <p className="faq">What is the return window/refund policy?</p>
      <p className="faqAns">
        We allow up to 30 days for returns and refunds take about 3 business
        days to process.
      </p>
      <br />
      <p>
        If you have any other questions or concerns please fill out the support
        form below and we will get back to you as soon as possible.
      </p>
    </section>
    <br />
    <section>
      <form id="supForm" onSubmit={e => {e.preventDefault(); formSubmit()}}>
        <p>Support Form</p>
        <p id="warning" />
        <label htmlFor="uName">Name</label>
        <br />
        <input id="uName" type="text" placeholder="Your Name" />
        <br />
        <label htmlFor="uEmail">Email</label>
        <br />
        <input id="uEmail" type="text" placeholder="email@example.com" />
        <br />
        <label htmlFor="uQuestion">Question</label>
        <br />
        <input id="uQuestion" type="text" placeholder="Question" />
        <br />
        <label htmlFor="uComment">Comment</label>
        <br />
        <input id="uComment" type="text" placeholder="Comment" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </section>
    <p id="submission">Submission</p>
    <br />
  </main>
  <Footer/>
</>)
}