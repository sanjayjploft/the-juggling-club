import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

export default function Blog() {
  return (
    <section className="section our-blog">
      <div className="container">
        <Row>
          <Col lg={"4"}>
            <div className="blog-box">
              <Image
                className="blog-img"
                src="/assets/image/blog-1.png"
                alt="Parents section"
                width={400}
                height={265}
              />
              <div className="blog-info">
                <div>
                  <h3>Parents</h3>
                  <p>Track your child&apos;s progress.</p>
                </div>
                <Link href="/Parents">
                  <Image
                    src="/assets/image/arrow-link.svg"
                    alt="Go to Parents"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={"4"}>
            <div className="blog-box">
              <Image
                className="blog-img"
                src="/assets/image/blog-2.png"
                alt="Coaches section"
                width={400}
                height={265}
              />
              <div className="blog-info">
                <div>
                  <h3>Coaches</h3>
                  <p>Motivate, guide, and reward your players.</p>
                </div>
                <Link href="/Coaches">
                  <Image
                    src="/assets/image/arrow-link.svg"
                    alt="Go to Coaches"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={"4"}>
            <div className="blog-box">
              <Image
                className="blog-img"
                src="/assets/image/blog-3.png"
                alt="Clubs section"
                width={400}
                height={265}
              />
              <div className="blog-info">
                <div>
                  <h3>Clubs</h3>
                  <p>Build your branded player development program.</p>
                </div>
                <Link href="/Clubs">
                  <Image
                    src="/assets/image/arrow-link.svg"
                    alt="Go to Clubs"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
