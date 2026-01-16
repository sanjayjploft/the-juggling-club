"use client";
import Parentsidebar from "../../../components/dashboard/Parentsidebar";

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
      <div className="msar-dashboard-wrapper">
        <Parentsidebar />
        <main className="msar-main">
          <div className="msar-top-bar d-flex justify-content-between align-items-start">
            <div className="top-heading">
              <h4>Billing </h4>
            </div>
            <button className="btn admin-btn-primary">+ Add Player</button>
          </div>
          <div className="container-fluid">
          <div className="content-card">
            <div className="billing-card">
            <h2 className="billing-title">BILLING & INVOICES</h2>

            <div className="table-wrapper">
              <table className="billing-table">
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
                      <td className={`status ${item.subscription.toLowerCase()}`}>
                        {item.subscription}
                      </td>

                      <td className="paid">{item.payment}</td>

                      <td className="download"><img src="/assets/image/document-dwd.svg" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
          </div>
        </main>
      </div>
    </>
  );
}
