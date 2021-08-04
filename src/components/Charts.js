import React from 'react'

export default function Charts() {
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
          <h2 className="pageheader-title">Multiselect </h2>
          <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Forms</a></li>
                <li className="breadcrumb-item active" aria-current="page">Multiselect</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* end pageheader */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* multiselects  */}
    {/* ============================================================== */}
    <div className="row">
      {/* ============================================================== */}
      {/* boxed multiselect  */}
      {/* ============================================================== */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Boxed Multiselect</h5>
          <div className="card-body">
            <select multiple="multiple" id="my-select" name="my-select[]">
              <option value="elem_1">Elements 1</option>
              <option value="elem_2">Elements 2</option>
              <option value="elem_3">Elements 3</option>
              <option value="elem_4">Elements 4</option>
            </select>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end boxed multiselect  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* pre multiselectd options  */}
      {/* ============================================================== */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Pre-selected options</h5>
          <div className="card-body">
            <select id="pre-selected-options" multiple="multiple">
              <option value="elem_1" selected>Elements 1</option>
              <option value="elem_2">Elements 2</option>
              <option value="elem_3">Elements 3</option>
              <option value="elem_4" selected>Elements 4</option>
            </select>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end pre multiselectd options  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* callbacks multiselectd  */}
      {/* ============================================================== */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Callbacks</h5>
          <div className="card-body">
            <select id="callbacks" multiple="multiple">
              <option value="elem_1">Elements 1</option>
              <option value="elem_2">Elements 2</option>
              <option value="elem_3">Elements 3</option>
              <option value="elem_4">Elements 4</option>
            </select>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end callbacks multiselectd  */}
      {/* ============================================================== */}
    </div>
    <div className="row">
      {/* ============================================================== */}
      {/* keep over multiselectd  */}
      {/* ============================================================== */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Keep Over</h5>
          <div className="card-body">
            <select id="keep-order" multiple="multiple">
              <option value="elem_1">Elements 1</option>
              <option value="elem_2">Elements 2</option>
              <option value="elem_3">Elements 3</option>
              <option value="elem_4">Elements 4</option>
              <option value="elem_5">Elements 5</option>
              <option value="elem_6">Elements 6</option>
              <option value="elem_7">Elements 7</option>
              <option value="elem_8">Elements 8</option>
              <option value="elem_9">Elements 9</option>
              <option value="elem_10">Elements 10</option>
              <option value="elem_11">Elements 11</option>
              <option value="elem_12">Elements 12</option>
            </select>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end keep over multiselectd  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* optgroup multiselectd  */}
      {/* ============================================================== */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Optgroup</h5>
          <div className="card-body">
            <select id="optgroup" multiple="multiple">
              <optgroup label="Friends">
                <option value={1}>Yoda</option>
                <option value={2} selected>Obiwan</option>
              </optgroup>
              <optgroup label="Enemies">
                <option value={3}>Palpatine</option>
                <option value={4} disabled>Darth Vader</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end optgroup multiselectd  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* disabled multiselectd  */}
      {/* ============================================================== */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Disabled attribute</h5>
          <div className="card-body">
            <select id="disabled-attribute" disabled="disabled" multiple="multiple">
              <option value="elem_1">Elements 1</option>
              <option value="elem_2">Elements 2</option>
              <option value="elem_3">Elements 3</option>
              <option value="elem_4">Elements 4</option>
              <option value="elem_5">Elements 5</option>
            </select>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* disabled multiselectd  */}
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
