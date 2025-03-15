import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function Home() {

  return (
    <>
      <Header />
      <div className="home">


        {/* <div class="slogan">
        <h1>Your legacy, ticking every second</h1>
      </div> */}
        <section class="heroBanner">
          <div class="slider-container">
            <div class="slider">
              <div class="slide">
                <img src="/image/slider/imgcn0.jpg" alt="Image" />

              </div>
              <div class="slide">
                <img src="image/slider/imgcn1.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="image/slider/imgcn2.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="image/slider/imgcn3.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/image/slider/imgcn4.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/image/slider/imgcn5.jpg" alt="" />
              </div>
              <div class="slide">
                <img src="/image/slider/imgcn6.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section class="brands">
          <div class="info">
            <h1>Shop By Brands</h1>
            <Link to="/Brands">VIEW ALL</Link>
          </div>
          <div class="imgs">
            <a href="#">
              <img src="image/brands/brand1.jpg" alt="" class="Rolex" />
            </a>
            <a href="#">
              <img src="image/brands/brand2.jpg" alt="" />
            </a>
            <a href="#">
              <img src="image/brands/brand3.jpg" alt="" />
            </a>
            <a href="#">
              <img src="image/brands/brand4.jpg" alt="" />
            </a>
          </div>
        </section>
        <section class="mensSec">
          <div class="parent">
            {/*  First child  */}
            <div class="child-first-child">
              <img src="image/brands/man.jpg" alt="" />
              <div class="centered-text">WATCHES FOR MEN</div>
              <Link to="MensWatches" class="btn">
                <div class="center-text">VIEW ALL</div>
              </Link>
            </div>
            <div class="grid-container">
              <div class="grid-box">
                <a href="https://youtu.be/l335MX1_uOc?si=lx1hU_gdgytSKQIz">
                  <img src="image/menwtch1.jpg" alt="Product 1" />
                </a>
                <p>ETA Watches</p>
                <p class="description">Rolex Submariner Two Tone Blue Dial Swiss ETA Automatic Men's Watch</p>
                <span class="prices">
                  <span class="orgprice">60,000.00
                  </span>
                  <span class="finlprice">45,000.00
                  </span>
                </span>
              </div>
              <div class="grid-box">
                <a href="">
                  <img src="image/menwtch2.jpg" alt="Product 1" />
                </a>
                <p>ETA Watches</p>
                <p class="description">Rolex Submariner Two Tone Blue Dial Swiss ETA Automatic Men's Watch</p>
                <span class="prices">
                  <span class="orgprice">60,000.00
                  </span>
                  <span class="finlprice">45,000.00
                  </span>
                </span>
              </div>
              <div class="grid-box">
                <a href="">
                  <img src="image/menwtch3.jpg" alt="Product 1" />
                </a>
                <p>ETA Watches</p>
                <p class="description">Rolex Submariner Two Tone Blue Dial Swiss ETA Automatic Men's Watch</p>
                <span class="prices">
                  <span class="orgprice">60,000.00
                  </span>
                  <span class="finlprice">45,000.00
                  </span>
                </span>
              </div>
              <div class="grid-box">
                <a href="">
                  <img src="image/menwtch4.jpg" alt="Product 1" />
                </a>
                <p>ETA Watches</p>
                <p class="description">Rolex Submariner Two Tone Blue Dial Swiss ETA Automatic Men's Watch</p>
                <span class="prices">
                  <span class="orgprice">60,000.00
                  </span>
                  <span class="finlprice">45,000.00
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section class="womensSec">
          <div class="parent">
            {/* First child  */}
            <div class="child-first-child">
              <img src="image/brands/woman.jpg" alt="" />
              <div class="centered-text">WATCHES FOR WOMEN</div>
              <a href="" class="btn">
                <div class="center-text">VIEW ALL </div>
              </a>
            </div>
            <div class="grid-container">
              <div class="grid-box">
                <a href="">
                  <img src="image/womenwtch1.jpg" alt="Product 1" />
                </a>
                <p>ETA Watches</p>
                <p class="description">Rolex Submariner Two Tone Blue Dial Swiss ETA Automatic Men's Watch</p>
                <span class="prices">
                  <span class="orgprice">60,000.00
                  </span>
                  <span class="finlprice">45,000.00
                  </span>
                </span>
              </div>
              <div class="grid-box">
                <a href="">
                  <img src="image/womenwtch2.jpg" alt="Product 1" />
                </a>
                <p>ETA Watches</p>
                <p class="description">Rolex Submariner Two Tone Blue Dial Swiss ETA Automatic Men's Watch</p>
                <span class="prices">
                  <span class="orgprice">60,000.00
                  </span>
                  <span class="finlprice">45,000.00
                  </span>
                </span>
              </div>
              <div class="grid-box">
                <a href="">
                  <img src="image/womenwtch3.jpg" alt="Product 1" />
                </a>
                <p>ETA Watches</p>
                <p class="description">Rolex Submariner Two Tone Blue Dial Swiss ETA Automatic Men's Watch</p>
                <span class="prices">
                  <span class="orgprice">60,000.00
                  </span>
                  <span class="finlprice">45,000.00
                  </span>
                </span>
              </div>
              <div class="grid-box">

                <a href="">
                  <img src="image/womenwtch4.jpg" alt="Product 1" />
                </a>
                <p>ETA Watches</p>
                <p class="description">Rolex Submariner Two Tone Blue Dial Swiss ETA Automatic Men's Watch</p>
                <span class="prices">
                  <span class="orgprice">60,000.00
                  </span>
                  <span class="finlprice">45,000.00
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
export default Home