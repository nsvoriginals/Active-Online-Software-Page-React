import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Active Online Software Page</title>
        <meta property="og:title" content="Active Online Software Page" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-no9b-1500h.png"
                  className="home-logo1"
                />
                <div className="home-links1">
                  <span className="Link">Solutions</span>
                  <span className="Link">How it works</span>
                  <span className="Link">Prices</span>
                </div>
              </div>
              <div className="home-right">
                <span className="home-sign-in Link">Sign in</span>
                <div className="home-get-started">
                  <span className="home-text006">Get started</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
            ></DangerousHTML>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text007">Take Control of Your Social Media</h1>
          <p className="home-text008">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="home-get-started1">
            <span className="home-text009">Get started</span>
          </div>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-cdo-1000h.png"
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text010">
            <span>
              Let&apos;s grow your social media
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>presence</span>
          </span>
          <span className="home-text014">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>eiusmod tempor incididunt.</span>
          </span>
        </div>
        <div className="home-cards">
          <div className="home-container1">
            <div className="card">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-fii6m-200h.png"
                className="home-icon02"
              />
              <span className="home-text017">Schedule</span>
              <span className="home-text018">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-mimg-200h.png"
                className="home-icon03"
              />
              <span className="home-text019">Publish</span>
              <span className="home-text020">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
              </span>
            </div>
          </div>
          <div className="home-container2">
            <div className="card home-analyze">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-l6p-200h.png"
                className="home-icon04"
              />
              <span className="home-text021">Analyze</span>
              <span className="home-text022">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
            <div className="card">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-vyi5-200h.png"
                className="home-icon05"
              />
              <span className="home-text023">Get leads</span>
              <span className="home-text024">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
            “Scale your content, grew lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.”
          </span>
          <div className="home-author">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-avatar"
            />
            <span className="home-quote1">
              <span className="home-text025">—  Peter McPau</span>
              <span>, Founder and CEO, Active</span>
            </span>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-container3">
          <ActiveUsers Caption="— Active users" Statistic="3.5M"></ActiveUsers>
          <ActiveUsers Caption="— Brands" Statistic="50k"></ActiveUsers>
          <ActiveUsers
            Caption="— Accounts Managed"
            Statistic="250K"
          ></ActiveUsers>
          <ActiveUsers Caption="— Active leads" Statistic="30M"></ActiveUsers>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container4">
            <div className="home-left1">
              <span className="sub-title">Content Management</span>
              <span className="home-text028 title">
                Manage all your platforms in just one place.
              </span>
              <span className="home-text029">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text030">Get started</span>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-wvmq.svg"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/playground_assets/test.svg"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right1">
              <span className="sub-title">
                Reporting Metrics
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <h2 className="home-text032 title">
                Advanced analytics, easy to understand.
              </h2>
              <div className="home-category">
                <span className="home-text033">Power reports</span>
                <span className="home-text034">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <span className="home-text035">Example -&gt;</span>
              </div>
              <div className="home-category1">
                <span className="home-text036">Power reports</span>
                <span className="home-text037">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <span className="home-text038">Example -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container5">
            <div className="home-left2">
              <span className="home-text039">Improve Scheduling</span>
              <h2 className="home-text040 title">
                Powerful scheduler that saves you time
              </h2>
              <span className="home-text041">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="home-get-started3 template-button">
                <span className="home-text042">Get started</span>
              </div>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/playground_assets/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                className="home-cards-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading">
            <span className="sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="home-text045">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container6">
                <YouTube></YouTube>
                <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
              </div>
              <div className="home-container7">
                <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text046">How it works</span>
            <span className="home-text047 title">
              Being social and getting leads has never been easier
            </span>
          </div>
          <div className="home-category2">
            <div className="home-headng">
              <span className="home-text048">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text049">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="home-get-started4 template-button">
                <span className="home-text050">Get started</span>
              </div>
            </div>
            <div className="home-container8">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-k5xi.svg"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category3">
              <div className="home-headng1">
                <span className="home-text051">2 — Act</span>
                <span className="home-text052">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-ibg-1200w.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category4">
              <div className="home-headng2">
                <span className="home-text053">2 — Act</span>
                <span className="home-text054">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-3c4o-1200w.png"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing">
        <div className="home-centered-container3">
          <div className="home-heading2">
            <span className="home-text055 title">
              Pricing for all kind of businesses
            </span>
            <span className="home-text056">
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className="home-selection">
              <span className="home-text057">Monthly</span>
              <span className="home-text058">Yearly</span>
            </div>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text059">Free</span>
              <span className="home-text060">
                Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doliqua.
              </span>
              <div className="home-get-started5 template-button">
                <span className="home-text061">Start for free</span>
              </div>
              <span className="home-text062">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text063">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text064">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text065">Pay as you go</span>
              <span className="home-text066">
                <span>Launch your lorem for $49/mo</span>
                <br></br>
                <span>lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              </span>
              <div className="home-get-started6 template-button">
                <span className="home-text070">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text073">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text074">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text075">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text076">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text077">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text078">Enterprise</span>
              <span className="home-text079">
                <span>
                  Custom-built lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed doliqua.
                </span>
                <br></br>
              </span>
              <div className="home-get-started7 template-button">
                <span className="home-text082">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text085">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text086">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text087">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text088">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon24"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text089">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left3">
          <span className="home-text090">Testimonals</span>
          <span className="home-text091 title">
            What people say about Active
          </span>
        </div>
        <div className="home-right2">
          <div className="home-column">
            <Testimonal
              Quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
              Avatar_src="/playground_assets/image552912-e3yq-200h.png"
            ></Testimonal>
            <Testimonal
              From="Social Club"
              Name="Jessica Smith"
              Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
              Avatar_src="/playground_assets/image312912-mvsg-200h.png"
            ></Testimonal>
            <Testimonal
              From="BeMe"
              Name="Logan Boy"
              Quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
              Avatar_src="/playground_assets/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              From="Hello W."
              Name="Laraine Summers"
              Quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
              Avatar_src="/playground_assets/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              From="Handsly"
              Name="William McPau"
              Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
              Avatar_src="/playground_assets/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              From="Share"
              Name="Mariah Mae"
              Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
              Avatar_src="/playground_assets/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              From="Gather"
              Name="John Finati"
              Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
              Avatar_src="/playground_assets/image102913-x4z8-200h.png"
            ></Testimonal>
            <Testimonal
              From="Zigo"
              Name="Mary Pau"
              Quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
              Avatar_src="/playground_assets/image562913-ycff-200h.png"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text092">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading3">
            <span className="home-text095 title">
              <span>Get leads now </span>
              <br></br>
              <span>with Active!</span>
            </span>
            <span className="home-text099">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className="home-get-started8 template-button">
              <span className="home-text100">
                <span>Start free</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
              className="home-image1"
            />
          </div>
        </div>
      </section>
      <section className="home-f-a-q">
        <div className="home-heading4">
          <span className="home-text103 title">Frequently asked questions</span>
          <span className="home-text104">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text105">
                — What is sit amet, consectetur adipiscing elit, sed do?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text106">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header2">
              <span className="home-text107">
                — Why is dolore magna aliqua excepteur sint
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text108">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header3">
              <span className="home-text109">
                — Is excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text110">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text111">
                — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text112">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header5">
              <span className="home-text113">
                — Is minim veniam quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text114">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left4">
            <span className="home-text115">Subscribe to our newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text116">Subscribe</span>
              </div>
            </div>
            <span className="home-text117">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="home-contact">
              <span className="home-text118">Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="home-link"
              >
                use@active-app.com
              </a>
            </div>
          </div>
          <div className="home-right3">
            <div className="home-category5">
              <span className="home-text119">Solutions</span>
              <div className="home-links2">
                <span className="home-text120">Responsive Web Design</span>
                <span className="home-text121">Responsive Prototypesv</span>
                <span className="home-text122">Design to Code</span>
                <span className="home-text123">Static Website Builder</span>
                <span className="home-text124">Static Website Generator</span>
              </div>
            </div>
            <div className="home-category6">
              <span className="home-text125">Company</span>
              <div className="home-links3">
                <span className="home-text126">About</span>
                <span className="home-text127">Team</span>
                <span className="home-text128">News</span>
                <span className="home-text129">Partners</span>
                <span className="home-text130">Careers</span>
                <span className="home-text131">Press &amp; Media</span>
              </div>
            </div>
            <div className="home-category7">
              <span className="home-text132">Solutions</span>
              <div className="home-links4">
                <span className="home-text133">Twitter</span>
                <span className="home-text134">Linkedin</span>
                <span className="home-text135">Crunchbase</span>
                <span className="home-text136">Instagram</span>
                <span className="home-text137">Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-no9b-1500h.png"
            className="home-branding"
          />
          <span className="home-text138">Copyright © Active - 2022</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
