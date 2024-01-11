import React from 'react'

export default function Home() {
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
      <button className="material-symbols-outlined">shopping_cart</button>
    </nav>
  </header>
  <main>
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
