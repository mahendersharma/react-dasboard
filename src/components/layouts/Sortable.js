import React from 'react'

export default function Sortable() {
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
          <h2 className="pageheader-title">Sortable Nestable Lists</h2>
          <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                <li className="breadcrumb-item active" aria-current="page">Sortable Nestable Lists</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* end pageheader */}
    {/* ============================================================== */}
    <div className="dashboard-short-list">
      <div className="row">
        {/* ============================================================== */}
        {/* shortable list  */}
        {/* ============================================================== */}
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
          <section className="card card-fluid">
            <h5 className="card-header drag-handle"> Shortable List </h5>
            <ul className="sortable-lists list-group list-group-flush list-group-bordered" id="items">
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div> Item one </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div> Item two </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div>Item three</div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div> Item four </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div> Item five </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
          <section className="card card-fluid">
            <h5 className="card-header drag-handle">Shortable List </h5>
            <ul className="sortable-lists list-group list-group-flush list-group-bordered" id="item-2">
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div> Item one </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div> Item two </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div> Item three </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div>Item four </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
              <li className="list-group-item align-items-center drag-handle">
                <span className="drag-indicator" />
                <div> Item five </div>
                <div className="btn-group ml-auto">
                  <button className="btn btn-sm btn-outline-light">Edit</button>
                  <button className="btn btn-sm btn-outline-light">
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end shortable list  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* nestable list  */}
      {/* ============================================================== */}
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
          <section className="card card-fluid">
            <h5 className="card-header drag-handle"> Nestable List </h5>
            <div className="dd" id="nestable">
              <ol className="dd-list">
                <li className="dd-item" data-id={13}>
                  <div className="dd-handle"> <span className="drag-indicator" />
                    <div> Item one</div>
                    <div className="dd-nodrag btn-group ml-auto">
                      <button className="btn btn-sm btn-outline-light">Edit</button>
                      <button className="btn btn-sm btn-outline-light">
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                </li>
                <li className="dd-item" data-id={2}>
                  <div className="dd-handle"> <span className="drag-indicator" />
                    <div> Item two</div>
                    <div className="dd-nodrag btn-group ml-auto">
                      <button className="btn btn-sm btn-outline-light">Edit</button>
                      <button className="btn btn-sm btn-outline-light">
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                  <ol className="dd-list">
                    <li className="dd-item" data-id={3}>
                      <div className="dd-handle"> <span className="drag-indicator" />
                        <div> Item three</div>
                        <div className="dd-nodrag btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Edit</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="dd-item" data-id={4}>
                      <div className="dd-handle"> <span className="drag-indicator" />
                        <div> Item four </div>
                        <div className="dd-nodrag btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Edit</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="dd-item" data-id={5}>
                      <div className="dd-handle"> <span className="drag-indicator" />
                        <div> Item five </div>
                        <div className="dd-nodrag btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Edit</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                      <ol className="dd-list">
                        <li className="dd-item" data-id={6}>
                          <div className="dd-handle"> <span className="drag-indicator" />
                            <div> Item six </div>
                            <div className="dd-nodrag btn-group ml-auto">
                              <button className="btn btn-sm btn-outline-light">Edit</button>
                              <button className="btn btn-sm btn-outline-light">
                                <i className="far fa-trash-alt" />
                              </button>
                            </div>
                          </div>
                        </li>
                        <li className="dd-item" data-id={7}>
                          <div className="dd-handle"> <span className="drag-indicator" />
                            <div> Item seven </div>
                            <div className="dd-nodrag btn-group ml-auto">
                              <button className="btn btn-sm btn-outline-light">Edit</button>
                              <button className="btn btn-sm btn-outline-light">
                                <i className="far fa-trash-alt" />
                              </button>
                            </div>
                          </div>
                        </li>
                        <li className="dd-item" data-id={8}>
                          <div className="dd-handle"> <span className="drag-indicator" />
                            <div> Item eight </div>
                            <div className="dd-nodrag btn-group ml-auto">
                              <button className="btn btn-sm btn-outline-light">Edit</button>
                              <button className="btn btn-sm btn-outline-light">
                                <i className="far fa-trash-alt" />
                              </button>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li className="dd-item" data-id={9}>
                      <div className="dd-handle"> <span className="drag-indicator" />
                        <div> Item nine</div>
                        <div className="dd-nodrag btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Edit</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="dd-item" data-id={10}>
                      <div className="dd-handle"> <span className="drag-indicator" />
                        <div> Item ten </div>
                        <div className="dd-nodrag btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Edit</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                    </li>
                  </ol>
                </li>
                <li className="dd-item" data-id={11}>
                  <div className="dd-handle"> <span className="drag-indicator" />
                    <div> Item eleven </div>
                    <div className="dd-nodrag btn-group ml-auto">
                      <button className="btn btn-sm btn-outline-light">Edit</button>
                      <button className="btn btn-sm btn-outline-light">
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                </li>
                <li className="dd-item" data-id={12}>
                  <div className="dd-handle"> <span className="drag-indicator" />
                    <div> Item twelve </div>
                    <div className="dd-nodrag btn-group ml-auto">
                      <button className="btn btn-sm btn-outline-light">Edit</button>
                      <button className="btn btn-sm btn-outline-light">
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
          <section className="card card-fluid">
            <h5 className="card-header drag-handle">Nestable List </h5>
            <div className="dd" id="nestable2">
              <ol className="dd-list">
                <li className="dd-item" data-id={13}>
                  <div className="dd-handle"> <span className="drag-indicator" />
                    <div> Item one </div>
                    <div className="dd-nodrag btn-group ml-auto">
                      <button className="btn btn-sm btn-outline-light">Edit</button>
                      <button className="btn btn-sm btn-outline-light">
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                </li>
                <li className="dd-item" data-id={14}>
                  <div className="dd-handle"> <span className="drag-indicator" />
                    <div> Item two </div>
                    <div className="dd-nodrag btn-group ml-auto">
                      <button className="btn btn-sm btn-outline-light">Edit</button>
                      <button className="btn btn-sm btn-outline-light">
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                </li>
                <li className="dd-item" data-id={15}>
                  <div className="dd-handle"> <span className="drag-indicator" />
                    <div> Item three </div>
                    <div className="dd-nodrag btn-group ml-auto">
                      <button className="btn btn-sm btn-outline-light">Edit</button>
                      <button className="btn btn-sm btn-outline-light">
                        <i className="far fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                  <ol className="dd-list">
                    <li className="dd-item" data-id={16}>
                      <div className="dd-handle"> <span className="drag-indicator" />
                        <div> Item four </div>
                        <div className="dd-nodrag btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Edit</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="dd-item" data-id={17}>
                      <div className="dd-handle"> <span className="drag-indicator" />
                        <div> Item five </div>
                        <div className="dd-nodrag btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Edit</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="dd-item" data-id={18}>
                      <div className="dd-handle"> <span className="drag-indicator" />
                        <div> Item six </div>
                        <div className="dd-nodrag btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Edit</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end nestable list  */}
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
