import React from 'react'

export default function Widgets() {
    return (
        <div>
            <div className="dashboard-wrapper">
  <div className="container-fluid dashboard-content">
    {/* ============================================================== */}
    {/* pageheader */}
    {/* ============================================================== */}
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="page-header">
          <h2 className="pageheader-title">Widgets </h2>
          <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                <li className="breadcrumb-item active" aria-current="page">Widgets</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* end pageheader */}
    {/* ============================================================== */}
    <div className="row">
      {/* ============================================================== */}
      {/* four widgets   */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* total views   */}
      {/* ============================================================== */}
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Total Views</h5>
              <h2 className="mb-0"> 10,28,056</h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
              <i className="fa fa-eye fa-fw fa-sm text-info" />
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end total views   */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* total followers   */}
      {/* ============================================================== */}
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Total Followers</h5>
              <h2 className="mb-0"> 24,763</h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
              <i className="fa fa-user fa-fw fa-sm text-primary" />
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end total followers   */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* partnerships   */}
      {/* ============================================================== */}
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Partnerships</h5>
              <h2 className="mb-0">14</h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
              <i className="fa fa-handshake fa-fw fa-sm text-secondary" />
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end partnerships   */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* total earned   */}
      {/* ============================================================== */}
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">Total Earned</h5>
              <h2 className="mb-0"> $149.00</h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
              <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand" />
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end total earned   */}
      {/* ============================================================== */}
    </div>
    <div className="row">
      {/* ============================================================== */}
      {/* sales  */}
      {/* ============================================================== */}
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="card border-3 border-top border-top-primary">
          <div className="card-body">
            <h5 className="text-muted">Sales</h5>
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">$12099</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
              <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">5.86%</span>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end sales  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* new customer  */}
      {/* ============================================================== */}
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="card border-3 border-top border-top-primary">
          <div className="card-body">
            <h5 className="text-muted">New Customer</h5>
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">1245</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
              <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">10%</span>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end new customer  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* visitor  */}
      {/* ============================================================== */}
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="card border-3 border-top border-top-primary">
          <div className="card-body">
            <h5 className="text-muted">Visitor</h5>
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">13000</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
              <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">5%</span>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end visitor  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* total orders  */}
      {/* ============================================================== */}
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="card border-3 border-top border-top-primary">
          <div className="card-body">
            <h5 className="text-muted">Total Orders</h5>
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">1340</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-danger font-weight-bold">
              <span className="icon-circle-small icon-box-xs text-danger bg-danger-light bg-danger-light "><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1">4%</span>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end total orders  */}
      {/* ============================================================== */}
    </div>
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="text-muted">Total Revenue</h5>
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">$12099</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
              <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
            </div>
          </div>
          <div id="sparkline-revenue" />
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="text-muted">Affiliate Revenue</h5>
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">$12099</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
              <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
            </div>
          </div>
          <div id="sparkline-revenue2" />
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="text-muted">Refunds</h5>
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">0.00</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-primary font-weight-bold">
              <span>N/A</span>
            </div>
          </div>
          <div id="sparkline-revenue3" />
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="text-muted">Avg. Revenue Per User</h5>
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">$28000</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
              <span>-2.00%</span>
            </div>
          </div>
          <div id="sparkline-revenue4" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Total Income</h5>
          <div className="card-body">
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">$5,79,000</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
              <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">25%</span>
            </div>
          </div>
          <div className="card-body bg-light p-t-40 p-b-40">
            <div id="sparkline-1" />
          </div>
          <div className="card-footer text-center bg-white">
            <a href="#" className="card-link">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Total Expences</h5>
          <div className="card-body">
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">$1,79,000</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
              <span className="icon-circle-small icon-box-xs text-danger bg-danger-light"><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1">15%</span>
            </div>
          </div>
          <div className="card-body text-center bg-light p-t-40 p-b-40">
            <div id="sparkline-2" />
          </div>
          <div className="card-footer text-center bg-white">
            <a href="#" className="card-link">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Cash on Hand</h5>
          <div className="card-body">
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">$79,000</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
              <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">25%</span>
            </div>
          </div>
          <div className="card-body bg-light p-t-40 p-b-40">
            <div id="sparkline-3" />
          </div>
          <div className="card-footer text-center bg-white">
            <a href="#" className="card-link">View Details</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Net Profit Margin</h5>
          <div className="card-body">
            <div className="metric-value d-inline-block">
              <h1 className="mb-1">$92,000</h1>
            </div>
            <div className="metric-label d-inline-block float-right text-success font-weight-bold">
              <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span> <span className="ml-1">25%</span>
            </div>
          </div>
          <div className="card-body bg-light p-b-40 p-t-40">
            <div id="sparkline-4" />
          </div>
          <div className="card-footer text-center bg-white">
            <a href="#" className="card-link">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ============================================================== */}
  {/* footer */}
  {/* ============================================================== */}
  <div className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="text-md-right footer-links d-none d-sm-block">
            <a href="javascript: void(0);">About</a>
            <a href="javascript: void(0);">Support</a>
            <a href="javascript: void(0);">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ============================================================== */}
  {/* end footer */}
  {/* ============================================================== */}
</div>

        </div>
    )
}
