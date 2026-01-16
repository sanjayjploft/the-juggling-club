import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Page() {
  return (
    <main className="page">
      <div className="section">
        <div className="container contct-mn">
          <Row>
            <Col md={6}>
              <h1>
                <span>Get Started</span>
                Get in touch with us. <br></br>We're here to assist you.</h1>
            </Col>
            <Col md={6} className="text-end">
              <div className="social-mcn">
                <Link href="">
                  <img  className="" src="/assets/image/facebook.svg" />
                </Link>
                <Link href="">
                  <img  className="" src="/assets/image/instagram.svg" />
                </Link>
                <Link href="">
                  <img  className="" src="/assets/image/twitter-x.svg" />
                </Link>                
              </div>
            </Col>
          </Row>

          <form className="mt-5 inpt-bx">
            <Row>
              <Col md={4} >
                <input type="text" placeholder="Your Name" />
              </Col>
              <Col md={4} >
                <input type="text" placeholder="Email Address" />
              </Col>
              <Col md={4} >
                <select className="">
                  <option value="">Subject</option>
                  <option value="">Subject</option>
                  <option value="">Subject</option>
                </select>
              </Col>
              <Col md={12} >
                <textarea className="" placeholder="Message" />
              </Col>
            </Row>
            
            <button type="submit" className="btn btn--primary mt-5" >
              LEAVE US A MESSAGE
            </button>
          </form>
          
        </div>
        <div className="contct-btm-inf">
          <div className="container">
            <Row>
              <Col md={6} >
                <h2>
                <span>Contact Info</span>
                We are always happy<br></br>
                to assist you</h2>
              </Col>
              <Col md={6} >
                <Row>
                  <Col md={6} >
                    <h4>Email Address</h4>
                    <p>
                      help@thejugglingclub.com
                      <span>Assistance hours: <br></br>
                      Monday - Friday 6 am to 8 pm EST</span>
                    </p>
                  </Col>
                  <Col md={6} >
                    <h4>Number</h4>
                    <p>
                      (808) 998-34256
                      <span>Assistance hours: <br></br>
                      Monday - Friday 6 am to 8 pm EST</span>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </main>
  );
}
