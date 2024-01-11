import React from 'react'

export default function Sneakers() {
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
      <button className="material-symbols-outlined">shopping_cart</button>
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
    <section className="grid1">
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
          onclick="addToCart('Jordan 1 Bred Toe', 160.00)"
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
          onclick="addToCart('Jordan 1 Royal Toe', 160.00)"
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
          onclick="addToCart('Jordan 1 Pine Green', 160.00)"
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
          onclick="addToCart('Jordan 1 Court Purple', 160.00)"
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
  <footer id="footer1">
    <p id="f1">StockZ - Retail, Not Resale</p>
    <div id="f2">
      <div className="fBlock">
        <a className="footLinkBold" href="/sneakers">
          Sneakers
        </a>{" "}
        <br />
        <a className="footLink" href="/sneakers">
          Jordan 1
        </a>{" "}
        <br />
        <a className="footLink" href="/sneakers">
          Jordan 4
        </a>{" "}
        <br />
        <a className="footLink" href="/sneakers">
          Dunk
        </a>
      </div>
      <div className="fBlock">
        <a className="footLinkBold" href="/apparel">
          Apparel
        </a>{" "}
        <br />
        <a className="footLink" href="/apparel">
          Supreme
        </a>{" "}
        <br />
        <a className="footLink" href="/apparel">
          Essentials
        </a>{" "}
        <br />
        <a className="footLink" href="/apparel">
          Vlone
        </a>
      </div>
      <div className="fBlock">
        <a className="footLinkBold" href="/electronics">
          Electronics
        </a>{" "}
        <br />
        <a className="footLink" href="/electronics">
          Playstation
        </a>{" "}
        <br />
        <a className="footLink" href="/electronics">
          Xbox
        </a>{" "}
        <br />
        <a className="footLink" href="/electronics">
          Nintendo
        </a>{" "}
        <br />
      </div>
      <div className="fBlock">
        <a className="footLinkBold" href="/collectibles">
          Collectibles
        </a>{" "}
        <br />
        <a className="footLink" href="/collectibles">
          Skatebaords
        </a>{" "}
        <br />
        <a className="footLink" href="/collectibles">
          Figures
        </a>{" "}
        <br />
        <a className="footLink" href="/collectibles">
          Lego
        </a>
      </div>
      <div className="fBlock">
        <a className="footLinkBold" href="/contact">
          Contact
        </a>{" "}
        <br />
        <a className="footLink" href="/contact">
          FAQS
        </a>
        <br />
        <a className="footLink" href="/contact">
          Form
        </a>
        <br />
        <a className="footLink" href="/contact">
          Help
        </a>
        <br />
      </div>
    </div>
  </footer>
  <footer id="footer2">
    <div>
      <a href="https://www.facebook.com/">
        <img className="fIcon" src="images/FB.png" alt="Facebook Logo" />
      </a>
      <a href="https://www.instagram.com/">
        <img className="fIcon" src="images/IG.png" alt="Instagram Logo" />
      </a>
      <a href="https://twitter.com/">
        <img className="fIcon" src="images/X.png" alt="Twitter Logo" />
      </a>
      <a href="https://www.youtube.com/">
        <img className="fIcon" src="images/YT.png" alt="Youtube Logo" />
      </a>
    </div>
    <div className="f3">
      <p>©2023 StockZ. All Rights Reserved.</p>
    </div>
  </footer>
</>
  )
}
