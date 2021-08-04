import React from 'react'

export default function Carousel() {
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
          <h2 className="pageheader-title">Carousel</h2>
          <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">UI Elements</a></li>
                <li className="breadcrumb-item active" aria-current="page">Carousel</li>
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
      {/*  slides only  */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Slides only</h5>
          <div className="card-body">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="../assets/images/card-img-1.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../assets/images/card-img-2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../assets/images/card-img-3.jpg" alt="Third slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/*  end slides only  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/*  slides with control  */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Slides with Controls</h5>
          <div className="card-body">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="../assets/images/card-img-1.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../assets/images/card-img-2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../assets/images/card-img-3.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span> </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span></a>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/*  end slides with control  */}
      {/* ============================================================== */}
    </div>
    <div className="row">
      {/* ============================================================== */}
      {/*  slides with indicator  */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Slides with Indicators</h5>
          <div className="card-body">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="../assets/images/card-img-1.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../assets/images/card-img-2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../assets/images/card-img-3.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span></a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span></a>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end slides with indicator  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/*  slides with control  */}
      {/* ============================================================== */}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Slides with Captions</h5>
          <div className="card-body">
            <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators1" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators1" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators1" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="../assets/images/card-img-1.jpg" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h3 className="text-white">Heading Title Carousel</h3>
                    <p>Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiat enim ut luctus. Aliquam pellentesque ut tellus ultricies bibendum.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../assets/images/card-img-2.jpg" alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h3 className="text-white">Heading Title Carousel</h3>
                    <p>Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiat enim ut luctus. Aliquam pellentesque ut tellus ultricies bibendum.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../assets/images/card-img-3.jpg" alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h3 className="text-white">Heading Title Carousel</h3>
                    <p>Mauris fermentum elementum ligula in efficitur. Aliquam id congue lorem. Proin consectetur feugiat enim ut luctus. Aliquam pellentesque ut tellus ultricies bibendum.</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span></a>
              <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span></a>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/*  end slides with indicator  */}
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
