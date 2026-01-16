import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Blog() {
  return (
    <>
      <section className="section our-blog">
        <div className="container">
          <Row>
            <Col lg={"4"}>
              <div className="blog-box">
                <img className="blog-img" src="/assets/image/blog-1.png" />
                <div className="blog-info">
                  <div>
                    <h3>Parents</h3>
                    <p>Track your child’s progress.</p>
                  </div>
                  <a href="#">
                    <img src="/assets/image/arrow-link.svg" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={"4"}>
              <div className="blog-box">
                <img className="blog-img" src="/assets/image/blog-2.png" />
                <div className="blog-info">
                  <div>
                    <h3>Coaches</h3>
                    <p>Motivate, guide, and reward your players.</p>
                  </div>
                  <a href="#">
                    <img src="/assets/image/arrow-link.svg" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={"4"}>
              <div className="blog-box">
                <img className="blog-img" src="/assets/image/blog-3.png" />
                <div className="blog-info">
                  <div>
                    <h3>Clubs</h3>
                    <p>
                      Build your branded player development development
                      program..
                    </p>
                  </div>
                  <a href="#">
                    <img src="/assets/image/arrow-link.svg" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
