import { Button, Col, Form, Row } from "react-bootstrap";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import Link from "next/link";

export default function Page() {
  return (
    <div className="juggling-dashboard-wrapper">
      <ClubSidebar />

      <main className="juggling-main">
        {/* HEADER */}

        <div className="juggling-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Players
                <span>View and manage club players</span>
              </h4>
            </div>
          </div>
          <div className="user-profile">
            <Link href="#">
              <img src="/assets/image/club-logo.png" />
            </Link>
          </div>
        </div>
        {/* CONTENT */}
        <div className="container-fluid">
          <div className="tbl-fltr">
            <Row className="px-3">
              <Col md={6} className="d-flex align-items-center mb-3 gap-3">
                <input
                  className="search-inp w-75"
                  type="text"
                  placeholder="Search players by name..."></input>
                <Button className="small-btn-admin">Search</Button>
              </Col>
              <Col md={6}>
                <div className="tbl-fltr-rgt">
                  <Form.Floating className="form-floating w-100">
                    <Form.Select>
                      <option>Age group</option>
                    </Form.Select>
                    <label>Age group</label>
                  </Form.Floating>
                  <Form.Floating className="form-floating w-100">
                    <Form.Select>
                      <option>Activity status</option>
                    </Form.Select>
                    <label>Activity status</label>
                  </Form.Floating>
                  <Link href="#" className="">
                    <img src="/assets/image/export.svg" />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>

          <div className="card-grid-box billing-card">
            <div className="table-wrapper">
              <table className="billing-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skills</th>
                    <th>Points</th>
                    <th>Badges</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="/assets/image/rank1.svg" />
                    </td>
                    <td>Alex Johnson</td>
                    <td>U14</td>
                    <td>45/110</td>
                    <td>3,200</td>
                    <td>15</td>
                    <td>
                      <span className="act-sts">Active</span>
                    </td>
                    <td>
                      <Link href="/clubplayer-details" className="">
                        <img src="/assets/image/view.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank2.svg" />
                    </td>
                    <td>Maria Garcia</td>
                    <td>U12</td>
                    <td>38/110</td>
                    <td>2,800</td>
                    <td>12</td>
                    <td>
                      <span className="act-sts">Active</span>
                    </td>
                    <td>
                      <Link href="/clubplayer-details" className="">
                        <img src="/assets/image/view.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank3.svg" />
                    </td>
                    <td>James Smith</td>
                    <td>U16</td>
                    <td>52/110</td>
                    <td>4,100</td>
                    <td>18</td>
                    <td>
                      <span className="inact-sts">Inactive</span>
                    </td>
                    <td>
                      <Link href="/clubplayer-details" className="">
                        <img src="/assets/image/view.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank4.svg" />
                    </td>
                    <td>James Smith</td>
                    <td>U16</td>
                    <td>38/110</td>
                    <td>2,800</td>
                    <td>10</td>
                    <td>
                      <span className="act-sts">Active</span>
                    </td>
                    <td>
                      <Link href="/clubplayer-details" className="">
                        <img src="/assets/image/view.svg" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
