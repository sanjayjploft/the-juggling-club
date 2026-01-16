"use client";

import { Button, Col, Form, Row } from "react-bootstrap";
import Parentsidebar from "../../../components/dashboard/Parentsidebar";
import Link from "next/link";

export default function page() {

  return (
    <>
      <div className="msar-dashboard-wrapper">
        <Parentsidebar />
        <main className="msar-main">
          <div className="msar-top-bar d-flex justify-content-between align-items-start">
            <div className="top-heading">
              <h4>Parent Account Settings
                <span>Manage your account, players and preferences</span>
              </h4>
            </div>
            <button className="btn admin-btn-primary">+ Add Player</button>
          </div>
          <div className="container-fluid acnt-stng-cl">
          <div className="content-card ">
            <h4>Profile Information</h4>
            <Row>
              <Col md={2}>
                <img className="img-fluid" src="/assets/image/prnt=pf-pictr.png" />
              </Col>
              <Col md={8}>
              <Row>
                <Col md={6}>
                  <Form.Floating>
                      <Form.Control placeholder="" value={"Sarah"} />
                      <label>First Name</label>
                  </Form.Floating>
                </Col>
                <Col md={6}>
                  <Form.Floating>
                      <Form.Control placeholder="" value={"Jonson"} />
                      <label>Last Name</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col md={6}>
                  <Form.Floating>
                      <Form.Control placeholder="" value={"sarah.jonson@mail.com"} />
                      <label>Email</label>
                  </Form.Floating>
                </Col>
                <Col md={6}>
                  <Button className="btn-next-bg">Save Changes </Button>
                </Col>
              </Row>
              </Col>
            </Row>
          </div>
          
            <Row className="px-3 mt-4">
              <Col md={6}>
                <div className="player-card">
                  <h4>Linked Players</h4>
                  <div className="notification-card plyr-crdin">
                    <img src="/assets/image/leo-img.png" />
                    <div className="player-card-in">
                      <h3>Leo Messi
                        <span>U12 Academy</span>
                      </h3>
                      <Button className="btn-primary-sml">Manage</Button>
                    </div>
                  </div>
                  <div className="notification-card plyr-crdin">
                    <img src="/assets/image/mia-img.png" />
                    <div className="player-card-in">
                      <h3>Mia Hamm
                        <span>U12 Academy</span>
                      </h3>
                      <Button className="btn-primary-sml">Manage</Button>
                    </div>
                  </div>
                  <Link href="" className="btn-cancel-outline-sml d-block mb-3">+ Link a Player</Link>
                </div>
              </Col>
              <Col md={6}>
                <div className="player-card">
                  <h4 className="mb-1">Guardians</h4>
                  <p>Invite a parent or guardian to manage this account.</p>
                  <div className="invite-grgn">                  
                    <Form.Floating>
                        <Form.Control placeholder="Email"/>
                        <label>Email</label>                        
                    </Form.Floating>
                    <Button className="btn-primary-sml ivntr-bt">Invite</Button>
                  </div>

                  <div className="notification-card plyr-crdin">
                    <img src="/assets/image/david-im.png" />
                    <div className="player-card-in">
                      <h3>David Johnson
                        <span>Primary Guardian</span>
                      </h3>
                      <Button className="btn-cancel-outline-sml d-block">Remove</Button>
                    </div>
                  </div>
                  <div className="notification-card plyr-crdin">
                    <img src="/assets/image/michelle-im.png" />
                    <div className="player-card-in">
                      <h3>Michelle Stevens
                        <span>Secondary Guardian</span>
                      </h3>
                      <Button className="btn-cancel-outline-sml d-block">Remove</Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="px-3 mt-4">
              <Col md={6}>
                <div className="player-card text-center p-4">
                  <img className="mb-3" src="/assets/image/alert-rd.svg" />
                  <p>Delete Account Warning: This will permanently delete your <br></br>account and all data.</p>
                  <Button className="btn-next-bg">Delete Account</Button>
                </div>
              </Col>
              <Col md={6}>
                <div className="player-card comni-perf">
                  <h4 className="mb-1">Communication Preferences</h4>
                  <div className="notification-card plyr-crdin justify-content-between">
                    <h3>Support Messages</h3>
                    <input class="switch mt-0" type="checkbox" />
                  </div>
                  <div className="notification-card plyr-crdin justify-content-between">
                    <h3>Club Announcements</h3>
                    <input class="switch mt-0" type="checkbox" />
                  </div>
                  <div className="notification-card plyr-crdin justify-content-between">
                    <h3>Progress Updates </h3>
                    <input class="switch mt-0" type="checkbox" />
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
