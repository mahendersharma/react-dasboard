import React from 'react'

export default function General() {
    return (
        <div>
         <div className="dashboard-wrapper">
  <div className="container-fluid  dashboard-content">
    {/* ============================================================== */}
    {/* pageheader */}
    {/* ============================================================== */}
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="page-header">
          <h2 className="pageheader-title">General Tables </h2>
          <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Tables</a></li>
                <li className="breadcrumb-item active" aria-current="page">General Tables</li>
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
      {/* basic table */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Basic Table</h5>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end basic table */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* striped table */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Striped Table</h5>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end striped table */}
      {/* ============================================================== */}
    </div>
    <div className="row">
      {/* ============================================================== */}
      {/* bordered table */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Bordered Table</h5>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end bordered table */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* hoverable table */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Hoverable Table</h5>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end hoverable table */}
      {/* ============================================================== */}
    </div>
    <div className="row">
      {/* ============================================================== */}
      {/* contextual table */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Contextual classes</h5>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-primary">
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr className="table-success">
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr className="table-secondary">
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end contextual table */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* responsive table */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Responsive Table</h5>
          <div className="card-body">
            <div className="table-responsive ">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end responsive table */}
      {/* ============================================================== */}
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
