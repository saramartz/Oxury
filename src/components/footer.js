import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo2.png"
import "../css/footer.scss"

const Footer = () => {
  return (
    <>
      <footer className="footerbs mt-5">
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft">
            <div className="mb-3">
              <img src={Logo} width="90px" alt='logo' />
            </div>
            <p style={{ textAlign: "justify" }}>
              Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
              porttitor vitae orci nec ultricies. Curabitur vehicula, libero
              eget faucibus faucibus, purus erat eleifend enim, porta
              pellentesque ex mi ut sem. <br />
              <br />© 2021 Oxury, All rights reserved
            </p>
          </div>
          <div className="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu —</h4>
            <div className="d-flex justify-content-around">
              <div className="col-md-5">
                <ul className="pages">
                  <li>
                    <Link to={"/"}>Category</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Category</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Category</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Category</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Category</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-5">
                <ul className="list">
                  <li>
                    <Link to={"/"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Terms</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <Link to={"/"}>Facebook</Link>
              </li>
              <li>
                <Link to={"/"}>Twitter</Link>
              </li>
              <li>
                <Link to={"/"}>Instagram</Link>
              </li>
              <li>
                <Link to={"/"}>RSS</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>
              Suscribe to our weekly newsletter chalked full of recommendations.
            </p>
            <p>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control p-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                  />
                </div>
              </form>
            </p>
          </div>
        </div>
      </footer>
      <section
        className="m-0 p-5 text-center copyright"
        style={{ backgroundColor: "#151414" }}
      >
        © 2021 Copyright
        <a
          className="p-4"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sara-mart%C3%ADnez-vega/"
        >
          Sara Martínez Vega
        </a>
      </section>
    </>
  )
}

export default Footer
