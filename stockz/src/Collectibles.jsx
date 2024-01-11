import React from 'react'

export default function Collectibles() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Collectibles</title>
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
    <h4>Collectibles</h4>
    <br />
    <h2 id="addToCart">Added to Cart</h2>
    <section className="grid1">
      {" "}
      {/* Product Grid */}
      <div className="product" id="SDS">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/SDS.png" alt="Palace Striped Deck" />
        <p className="title">Palace</p>
        <p className="disc">Striped Skate Deck</p>
        <p className="price">$60.00</p>
        <button
          className="buy"
          onclick="addToCart('Palace Striped Deck', 60.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="SDM">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/SDM.png"
          alt="Palace McDonald's Deck"
        />
        <p className="title">Palace</p>
        <p className="disc">McDonald's Skate Deck</p>
        <p className="price">$60.00</p>
        <button
          className="buy"
          onclick="addToCart('Palace McDonalds Deck', 60.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="SDA">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/SDA.png" alt="Palace AMG Deck" />
        <p className="title">Palace</p>
        <p className="disc">AMG Skate Deck</p>
        <p className="price">$60.00</p>
        <button className="buy" onclick="addToCart('Palace AMG Deck', 60.00)">
          Add to Cart
        </button>
      </div>
      <div className="product" id="SDI">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/SDI.png" alt="Palace Infinity Deck" />
        <p className="title">Palace</p>
        <p className="disc">Infinity Skate Deck</p>
        <p className="price">$60.00</p>
        <button
          className="buy"
          onclick="addToCart('Palace Infinity Deck', 60.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="HTTH">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/HTTH.png"
          alt="Hot Toys Endgame Thanos Figure"
        />
        <p className="title">Hot Toys</p>
        <p className="disc">Endgame Thanos Figure</p>
        <p className="price">$415.00</p>
        <button
          className="buy"
          onclick="addToCart('Hot Toys Endgame Thanos Figure', 415.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="HTI">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/HTI.png"
          alt="Hot Toys Endgame Iron Man Figure"
        />
        <p className="title">Hot Toys</p>
        <p className="disc">Endgame Iron Man Figure</p>
        <p className="price">$415.00</p>
        <button
          className="buy"
          onclick="addToCart('Hot Toys Endgame Iron Man Figure', 415.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="HTC">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/HTC.png"
          alt="Hot Toys Endgame Captain America Figure"
        />
        <p className="title">Hot Toys</p>
        <p className="disc">Endgame Captain America Figure</p>
        <p className="price">$275.00</p>
        <button
          className="buy"
          onclick="addToCart('Hot Toys Endgame Captain America Figure', 275.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="HTT">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/HTT.png"
          alt="Hot Toys Endgame Thor Figure"
        />
        <p className="title">Hot Toys</p>
        <p className="disc">Endgame Thor Figure</p>
        <p className="price">$275.00</p>
        <button
          className="buy"
          onclick="addToCart('Hot Toys Endgame Thor Figure', 275.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="LSM">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/LSM.png"
          alt="LEGO Star Wars Millennium Falcon Set"
        />
        <p className="title">LEGO</p>
        <p className="disc">Star Wars Millennium Falcon Set</p>
        <p className="price">$800.00</p>
        <button
          className="buy"
          onclick="addToCart('LEGO Star Wars Millennium Falcon Set', 800.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="LSA">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/LSA.png"
          alt="LEGO Star Wars AT-AT Set"
        />
        <p className="title">LEGO</p>
        <p className="disc">Star Wars AT-AT Set</p>
        <p className="price">$800.00</p>
        <button
          className="buy"
          onclick="addToCart('LEGO Star Wars AT-AT Set', 800.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="LSI">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/LSI.png"
          alt="LEGO Star Wars Star Destroyer Set"
        />
        <p className="title">LEGO</p>
        <p className="disc">Star Wars Star Destroyer Set</p>
        <p className="price">$700.00</p>
        <button
          className="buy"
          onclick="addToCart('LEGO Star Wars Star Destroyer Set', 700.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="LSX">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/LSX.png"
          alt="LEGO Star Wars X-Wing Set"
        />
        <p className="title">LEGO</p>
        <p className="disc">Star Wars X-Wing Set</p>
        <p className="price">$240.00</p>
        <button
          className="buy"
          onclick="addToCart('LEGO Star Wars X-Wing Set', 240.00)"
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
