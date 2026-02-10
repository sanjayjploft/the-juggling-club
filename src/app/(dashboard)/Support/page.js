"use client";

import { Button, Col, Form, Row } from "react-bootstrap";
import Parentsidebar from "../../../components/dashboard/Parentsidebar";
import Link from "next/link";
import FaqAccordion from "../../../components/FaqAccordion";

export default function page() {
  return (
    <>
      <div className="msar-dashboard-wrapper">
        <Parentsidebar />
        <main className="msar-main">
          <div className="msar-top-bar d-flex justify-content-between align-items-start">
            <div className="top-heading">
              <h4>
                Support
                <span>
                  We're here to help. Find answers to common questions or
                  contact us for further assistance.
                </span>
              </h4>
            </div>
            <button className="btn admin-btn-primary">+ Add Player</button>
          </div>
          <div className="container-fluid acnt-stng-cl">
            <Row className="px-3 mt-4">
              <Col md={6} className="sprt-faq">
                <FaqAccordion />
                <div className="ai-assct">
                  <img src="/assets/image/chat-bot.svg" /> AI Assistant Coming
                  Soon
                </div>
              </Col>
              <Col md={6}>
                <div className="player-card">
                  <h4 className="mb-1">24/7 Support</h4>
                  <p>Our support team is available to help anytime.</p>
                  <Form.Floating className="mb-4">
                    <Form.Control placeholder="Name" />
                    <label>Name</label>
                  </Form.Floating>
                  <Form.Floating className="mb-4">
                    <Form.Control placeholder="Email" />
                    <label>Email</label>
                  </Form.Floating>
                  <Form.Floating className="mb-4">
                    <Form.Select>
                      <option>Subject</option>
                    </Form.Select>
                    <label>Subject</label>
                  </Form.Floating>
                  <textarea className="mb-4" placeholder="Message"></textarea>
                  <Button className="btn-next-bg">Send Message</Button>
                  <div className="tandcpp">
                    <Link href="/" className="">
                      Terms of Use
                    </Link>
                    <small>|</small>
                    <Link href="/" className="">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </main>
      </div>
    </>
  );
}
