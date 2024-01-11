import React from 'react'

export default function Contact() {
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
      <button className="material-symbols-outlined">shopping_cart</button>
    </nav>
  </header>
  <main>
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
      <form id="supForm" onsubmit="event.preventDefault(); formSubmit();">
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
</>)
}
