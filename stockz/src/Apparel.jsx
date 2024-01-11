import React from 'react'

export default function Apparel() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apparel</title>
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
    <h4>Apparel</h4>
    <br />
    <h2 id="addToCart">Added to Cart</h2>
    <section className="grid1">
      {" "}
      {/* Product Grid */}
      <div className="product" id="SS">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/SS.png" alt="Supreme Skeleton Tee" />
        <p className="title">Supreme</p>
        <p className="disc">Skeleton Tee</p>
        <p className="price">$48.00</p>
        <button
          className="buy"
          onclick="addToCart('Supreme Skeleton Tee', 48.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="SMD">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/SMD.png" alt="Supreme MF DOOM Tee" />
        <p className="title">Supreme</p>
        <p className="disc">MF DOOM Tee</p>
        <p className="price">$48.00</p>
        <button
          className="buy"
          onclick="addToCart('Supreme MF DOOM Tee', 48.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="SF">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/SF.png" alt="Supreme Fighter Tee" />
        <p className="title">Supreme</p>
        <p className="disc">Fighter Tee</p>
        <p className="price">$44.00</p>
        <button
          className="buy"
          onclick="addToCart('Supreme Fighter Tee', 44.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="SMB">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/SMB.png"
          alt="Supreme Mont Blanc Tee"
        />
        <p className="title">Supreme</p>
        <p className="disc">Mont Blanc Tee</p>
        <p className="price">$44.00</p>
        <button
          className="buy"
          onclick="addToCart('Supreme Mont Blanc Tee', 44.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="EHB">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/EHB.png"
          alt="Essentials Hoodie Black"
        />
        <p className="title">Essentials</p>
        <p className="disc">Black Hoodie</p>
        <p className="price">$100.00</p>
        <button
          className="buy"
          onclick="addToCart('Essentials Hoodie Black', 100.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="EHD">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/EHD.png"
          alt="Essentials Hoodie Dark Oatmeal"
        />
        <p className="title">Essentials</p>
        <p className="disc">Dark Oatmeal Hoodie</p>
        <p className="price">$90.00</p>
        <button
          className="buy"
          onclick="addToCart('Essentials Hoodie Dark Oatmeal', 90.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="EHL">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/EHL.png"
          alt="Essentials Hoodie Light Oatmeal"
        />
        <p className="title">Essentials</p>
        <p className="disc">Light Oatmeal Hoodie</p>
        <p className="price">$90.00</p>
        <button
          className="buy"
          onclick="addToCart('Essentials Hoodie Light Oatmeal', 90.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="EHS">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/EHS.png"
          alt="Essentials Hoodie Sycamore"
        />
        <p className="title">Essentials</p>
        <p className="disc">Sycamore Hoodie</p>
        <p className="price">$100.00</p>
        <button
          className="buy"
          onclick="addToCart('Essentials Hoodie Sycamore', 100.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="VA">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/VA.png" alt="Vlone After Hours Tee" />
        <p className="title">Vlone</p>
        <p className="disc">After Hours Blood Drip Tee</p>
        <p className="price">$44.00</p>
        <button
          className="buy"
          onclick="addToCart('Vlone After Hours Tee', 44.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="V9">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/V9.png" alt="Vlone 999 T-shirt" />
        <p className="title">Vlone</p>
        <p className="disc">999 T-shirt</p>
        <p className="price">$75.00</p>
        <button className="buy" onclick="addToCart('Vlone 999 T-shirt', 75.00)">
          Add to Cart
        </button>
      </div>
      <div className="product" id="VW">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/VW.png" alt="Vlone The Woo T-shirt" />
        <p className="title">Vlone</p>
        <p className="disc">The Woo T-shirt</p>
        <p className="price">$65.00</p>
        <button
          className="buy"
          onclick="addToCart('Vlone The Woo T-shirt', 65.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="VT">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/VT.png" alt="Vlone TOP Tee" />
        <p className="title">Vlone</p>
        <p className="disc">TOP Tee</p>
        <p className="price">$65.00</p>
        <button className="buy" onclick="addToCart('Vlone TOP Tee', 65.00)">
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
