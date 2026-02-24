"use client";

import { Button } from "react-bootstrap";
import Parentsidebar from "../../../components/dashboard/Parentsidebar";
import Link from "next/link";

export default function page() {
  const invoices = [
    {
      date: "Dec 26, 2025",
      plan: "Annual Plan",
      child: "Leo Smith",
      amount: "$199.99",
      subscription: "Active",
      payment: "Paid",
    },
    {
      date: "Nov 22, 2025",
      plan: "Annual Plan",
      child: "Leo Smith",
      amount: "$199.99",
      subscription: "Trial",
      payment: "Paid",
    },
    {
      date: "Oct 15, 2025",
      plan: "Monthly Plan",
      child: "Mia",
      amount: "$19.99",
      subscription: "Expired",
      payment: "Paid",
    },
  ];

  return (
    <>
      <div className="juggling-dashboard-wrapper">
        <Parentsidebar />
        <main className="juggling-main">
          <div className="juggling-top-bar d-flex justify-content-between align-items-start">
            <div className="top-heading">
              <div>
                <h4>
                  Subscription
                  <span>
                    Manage your subscription, payment options, and billing
                    history
                  </span>
                </h4>
              </div>
            </div>
            <div className="user-profile">
              <Link href="#">
                <img src="/assets/image/coach-mike.png" />
              </Link>
            </div>
          </div>
          <div className="container-fluid acnt-stng-cl">
            <div className="crnt-plnsec">
              <div className="crt-tag">Current Plan</div>
              <div className="d-flex gap-5">
                <h3>
                  Annual Plan<span>Billed yearly</span>
                </h3>
                <h4>
                  $199.99<span>Save 17%</span>
                </h4>
              </div>
              <div className="renwl-dte">Renews on July 20, 2026</div>
              <div className="gap-5">
                <button className="btn-next-bg me-3">Upgrade</button>
                <button className="btn-cancel-outline">Downgrade</button>
              </div>
            </div>
            <div className="card-cms-heading mt-4 ms-3">
              <h4>Billing & Invoices</h4>
            </div>
            <div className="table-wrapper subsc-rder">
              <table className="billing-table table-responsive">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Plan</th>
                    <th>Child Name</th>
                    <th>Amount</th>
                    <th>Subscription Status</th>
                    <th>Payment Status</th>
                    <th>Invoice</th>
                  </tr>
                </thead>

                <tbody>
                  {invoices.map((item, index) => (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.plan}</td>
                      <td>{item.child}</td>
                      <td>{item.amount}</td>
                      <td
                        className={`status ${item.subscription.toLowerCase()}`}>
                        {item.subscription}
                      </td>

                      <td className="paid">{item.payment}</td>

                      <td className="download">
                        <img src="/assets/image/document-dwd.svg" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
