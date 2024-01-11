import React from 'react'

export default function Electronics() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Electronics</title>
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
    <h4>Electronics</h4>
    <br />
    <h2 id="addToCart">Added to Cart</h2>
    <section className="grid1">
      {" "}
      {/* Product Grid */}
      <div className="product" id="PS5B">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/PS5B.png"
          alt="PlayStation 5 Blue Ray Edition"
        />
        <p className="title">Sony PlayStation 5</p>
        <p className="disc">Blue Ray Edition</p>
        <p className="price">$500.00</p>
        <button
          className="buy"
          onclick="addToCart('PlayStation 5 Blue Ray Edition', 500.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="PS5D">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/PS5D.png"
          alt="PlayStation 5 Digital Edition"
        />
        <p className="title">Sony PlayStation 5</p>
        <p className="disc">Digital Edition</p>
        <p className="price">$400.00</p>
        <button
          className="buy"
          onclick="addToCart('PlayStation 5 Digital Edition', 400.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="PS5S">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/PS5S.png"
          alt="PlayStation 5 Spiderman 2 Bundle"
        />
        <p className="title">Sony PlayStation 5</p>
        <p className="disc">Spiderman 2 Bundle</p>
        <p className="price">$600.00</p>
        <button
          className="buy"
          onclick="addToCart('PlayStation 5 Spiderman 2 Bundle', 600.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="PS5G">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/PS5G.png"
          alt="PlayStation 5 God of War Rognorok Bundle"
        />
        <p className="title">Sony PlayStation 5</p>
        <p className="disc">God of War Rognorok Bundle</p>
        <p className="price">$560.00</p>
        <button
          className="buy"
          onclick="addToCart('PlayStation 5 God of War Rognorok Bundle', 560.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="MXX">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/MXX.png" alt="Xbox Series X" />
        <p className="title">Microsoft Xbox</p>
        <p className="disc">Series X</p>
        <p className="price">$500.00</p>
        <button className="buy" onclick="addToCart('Xbox Series X', 500.00)">
          Add to Cart
        </button>
      </div>
      <div className="product" id="MXS">
        {" "}
        {/* Product */}
        <img className="pImg" src="images/MXS.png" alt="Xbox Series S" />
        <p className="title">Microsoft Xbox</p>
        <p className="disc">Series S</p>
        <p className="price">$300.00</p>
        <button className="buy" onclick="addToCart('Xbox Series S', 300.00)">
          Add to Cart
        </button>
      </div>
      <div className="product" id="MXD">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/MXD.png"
          alt="Xbox Series X Diable IV Bundle"
        />
        <p className="title">Microsoft Xbox</p>
        <p className="disc">Series X Diablo IV Bundle</p>
        <p className="price">$550.00</p>
        <button
          className="buy"
          onclick="addToCart('Xbox Series X Diable IV Bundle', 550.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="MXH">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/MXH.png"
          alt="Xbox Series X Halo Infinite Bundle"
        />
        <p className="title">Microsoft Xbox</p>
        <p className="disc">Xbox Series X Halo Infinite Bundle</p>
        <p className="price">$550.00</p>
        <button
          className="buy"
          onclick="addToCart('Xbox Series X Halo Infinite Bundle', 550.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="NSW">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/NSW.png"
          alt="Nintendo Switch Oled White"
        />
        <p className="title">Nintendo Switch Oled</p>
        <p className="disc">White</p>
        <p className="price">$350.00</p>
        <button
          className="buy"
          onclick="addToCart('Nintendo Switch Oled White', 350.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="NSRB">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/NSRB.png"
          alt="Nintendo Switch Oled Red and Blue"
        />
        <p className="title">Nintendo Switch Oled</p>
        <p className="disc">Red and Blue</p>
        <p className="price">$350.00</p>
        <button
          className="buy"
          onclick="addToCart('Nintendo Switch Oled Red and Blue', 350.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="NSS">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/NSS.png"
          alt="Nintendo Switch Oled Splatoon 3 Bundle"
        />
        <p className="title">Nintendo Switch Oled</p>
        <p className="disc">Splatoon 3 Bundle</p>
        <p className="price">$360.00</p>
        <button
          className="buy"
          onclick="addToCart('Nintendo Switch Oled Splatoon 3 Bundle', 360.00)"
        >
          Add to Cart
        </button>
      </div>
      <div className="product" id="NSZ">
        {" "}
        {/* Product */}
        <img
          className="pImg"
          src="images/NSZ.png"
          alt="Nintendo Switch Oled Zelda Bundle"
        />
        <p className="title">Nintendo Switch Oled</p>
        <p className="disc">Tears of the Kingdom Bundle</p>
        <p className="price">$360.00</p>
        <button
          className="buy"
          onclick="addToCart('Nintendo Switch Oled Zelda Bundle', 360.00)"
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
