import React from 'react'

export default function Weather() {
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
          <h2 className="pageheader-title">Wheather Icons </h2>
          <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Icons</a></li>
                <li className="breadcrumb-item active" aria-current="page">Wheather Icons</li>
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
      {/* icon weather  */}
      {/* ============================================================== */}
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        {/* ============================================================== */}
        {/* new icons  */}
        {/* ============================================================== */}
        <div className="card">
          <h5 className="card-header">25 icons v2.0 <span className="label label-sm label-success">New </span></h5>
          <div className="card-body">
            <div className="icon-list-demo row">
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy-high" /> wi wi-day-cloudy-high </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moonrise" /> wi wi-moonrise </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-volcano" /> wi wi-volcano </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-light-wind" /> wi wi-day-light-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moonset" /> wi wi-moonset </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-flood" /> wi wi-flood </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-train" /> wi wi-train </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sleet" /> wi wi-day-sleet </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-sleet" /> wi wi-night-sleet </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sandstorm" /> wi wi-sandstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-small-craft-advisory" /> wi wi-small-craft-advisory </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-haze" /> wi wi-day-haze </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-sleet" /> wi wi-night-alt-sleet </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-tsunami" /> wi wi-tsunami </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-gale-warning" /> wi wi-gale-warning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy-high" /> wi wi-night-cloudy-high </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-raindrop" /> wi wi-raindrop </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-earthquake" /> wi wi-earthquake </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-storm-warning" /> wi wi-storm-warning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-partly-cloudy" /> wi wi-night-alt-partly-cloudy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-barometer" /> wi wi-barometer </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-fire" /> wi wi-fire </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hurricane-warning" /> wi wi-hurricane-warning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sleet" /> wi wi-sleet </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-humidity" /> wi wi-humidity </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end new icons */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* daytime icons  */}
        {/* ============================================================== */}
        <div className="card">
          <h5 className="card-header">Daytime icons</h5>
          <div className="card-body">
            <div className="icon-list-demo row">
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sunny" /> wi wi-day-sunny </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy" /> wi wi-day-cloudy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy-gusts" /> wi wi-day-cloudy-gusts </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy-windy" /> wi wi-day-cloudy-windy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-fog" /> wi wi-day-fog </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-hail" /> wi wi-day-hail </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-haze" /> wi wi-day-haze </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-lightning" /> wi wi-day-lightning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-rain" /> wi wi-day-rain </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-rain-mix" /> wi wi-day-rain-mix </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-rain-wind" /> wi wi-day-rain-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-showers" /> wi wi-day-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sleet" /> wi wi-day-sleet </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sleet-storm" /> wi wi-day-sleet-storm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-snow" /> wi wi-day-snow </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-snow-thunderstorm" /> wi wi-day-snow-thunderstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-snow-wind" /> wi wi-day-snow-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sprinkle" /> wi wi-day-sprinkle </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-storm-showers" /> wi wi-day-storm-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-sunny-overcast" /> wi wi-day-sunny-overcast </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-thunderstorm" /> wi wi-day-thunderstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-windy" /> wi wi-day-windy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-solar-eclipse" /> wi wi-solar-eclipse </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hot" /> wi wi-hot </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-cloudy-high" /> wi wi-day-cloudy-high </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-day-light-wind" /> wi wi-day-light-wind </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end dayicons  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* nighttime icon  */}
        {/* ============================================================== */}
        <div className="card">
          <h5 className="card-header">Night Time icons</h5>
          <div className="card-body">
            <div className="icon-list-demo row">
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-clear" /> wi wi-night-clear </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-cloudy" /> wi wi-night-alt-cloudy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-cloudy-gusts" /> wi wi-night-alt-cloudy-gusts </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-cloudy-windy" /> wi wi-night-alt-cloudy-windy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-hail" /> wi wi-night-alt-hail </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-lightning" /> wi wi-night-alt-lightning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-rain" /> wi wi-night-alt-rain </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-rain-mix" /> wi wi-night-alt-rain-mix </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-rain-wind" /> wi wi-night-alt-rain-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-showers" /> wi wi-night-alt-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-sleet" /> wi wi-night-alt-sleet </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-sleet-storm" /> wi wi-night-alt-sleet-storm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-snow" /> wi wi-night-alt-snow </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-snow-thunderstorm" /> wi wi-night-alt-snow-thunderstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-snow-wind" /> wi wi-night-alt-snow-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-sprinkle" /> wi wi-night-alt-sprinkle </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-storm-showers" /> wi wi-night-alt-storm-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-thunderstorm" /> wi wi-night-alt-thunderstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy" /> wi wi-night-cloudy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy-gusts" /> wi wi-night-cloudy-gusts </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy-windy" /> wi wi-night-cloudy-windy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-fog" /> wi wi-night-fog </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-hail" /> wi wi-night-hail </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-lightning" /> wi wi-night-lightning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-partly-cloudy" /> wi wi-night-partly-cloudy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-rain" /> wi wi-night-rain </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-rain-mix" /> wi wi-night-rain-mix </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-rain-wind" /> wi wi-night-rain-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-showers" /> wi wi-night-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-sleet" /> wi wi-night-sleet </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-sleet-storm" /> wi wi-night-sleet-storm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-snow" /> wi wi-night-snow </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-snow-thunderstorm" /> wi wi-night-snow-thunderstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-snow-wind" /> wi wi-night-snow-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-sprinkle" /> wi wi-night-sprinkle </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-storm-showers" /> wi wi-night-storm-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-thunderstorm" /> wi wi-night-thunderstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-lunar-eclipse" /> wi wi-lunar-eclipse </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-stars" /> wi wi-stars </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-storm-showers" /> wi wi-storm-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thunderstorm" /> wi wi-thunderstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-cloudy-high" /> wi wi-night-alt-cloudy-high </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-cloudy-high" /> wi wi-night-cloudy-high </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-night-alt-partly-cloudy" /> wi wi-night-alt-partly-cloudy </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end nighttime icons  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* natural icons  */}
        {/* ============================================================== */}
        <div className="card">
          <h5 className="card-header">Nautral icons</h5>
          <div className="card-body">
            <div className="icon-list-demo row">
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloud" /> wi wi-cloud </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloudy" /> wi wi-cloudy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloudy-gusts" /> wi wi-cloudy-gusts </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloudy-windy" /> wi wi-cloudy-windy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-fog" /> wi wi-fog </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hail" /> wi wi-hail </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-rain" /> wi wi-rain </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-rain-mix" /> wi wi-rain-mix </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-rain-wind" /> wi wi-rain-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-showers" /> wi wi-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sleet" /> wi wi-sleet </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-snow" /> wi wi-snow </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sprinkle" /> wi wi-sprinkle </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-storm-showers" /> wi wi-storm-showers </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thunderstorm" /> wi wi-thunderstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-snow-wind" /> wi wi-snow-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-snow" /> wi wi-snow </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-smog" /> wi wi-smog </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-smoke" /> wi wi-smoke </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-lightning" /> wi wi-lightning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-raindrops" /> wi wi-raindrops </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-raindrop" /> wi wi-raindrop </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-dust" /> wi wi-dust </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-snowflake-cold" /> wi wi-snowflake-cold </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-windy" /> wi wi-windy </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-strong-wind" /> wi wi-strong-wind </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sandstorm" /> wi wi-sandstorm </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-earthquake" /> wi wi-earthquake </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-fire" /> wi wi-fire </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-flood" /> wi wi-flood </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-meteor" /> wi wi-meteor </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-tsunami" /> wi wi-tsunami </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-volcano" /> wi wi-volcano </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hurricane" /> wi wi-hurricane </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-tornado" /> wi wi-tornado </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-small-craft-advisory" /> wi wi-small-craft-advisory </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-gale-warning" /> wi wi-gale-warning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-storm-warning" /> wi wi-storm-warning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-hurricane-warning" /> wi wi-hurricane-warning </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-wind-direction" /> wi wi-wind-direction </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end natural icons  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* moon phase icons  */}
        {/* ============================================================== */}
        <div className="card">
          <h5 className="card-header">Moon Phase icons</h5>
          <div className="card-body">
            <div className="icon-list-demo row">
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-new" /> wi wi-moon-new </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-1" /> wi wi-moon-waxing-cresent-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-2" /> wi wi-moon-waxing-cresent-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-3" /> wi wi-moon-waxing-cresent-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-4" /> wi wi-moon-waxing-cresent-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-5" /> wi wi-moon-waxing-cresent-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-cresent-6" /> wi wi-moon-waxing-cresent-6 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-first-quarter" /> wi wi-moon-first-quarter </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-1" /> wi wi-moon-waxing-gibbous-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-2" /> wi wi-moon-waxing-gibbous-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-3" /> wi wi-moon-waxing-gibbous-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-4" /> wi wi-moon-waxing-gibbous-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-5" /> wi wi-moon-waxing-gibbous-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waxing-gibbous-6" /> wi wi-moon-waxing-gibbous-6 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-full" /> wi wi-moon-full </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-1" /> wi wi-moon-waning-gibbous-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-2" /> wi wi-moon-waning-gibbous-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-3" /> wi wi-moon-waning-gibbous-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-4" /> wi wi-moon-waning-gibbous-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-5" /> wi wi-moon-waning-gibbous-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-gibbous-6" /> wi wi-moon-waning-gibbous-6 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-third-quarter" /> wi wi-moon-third-quarter </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-1" /> wi wi-moon-waning-crescent-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-2" /> wi wi-moon-waning-crescent-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-3" /> wi wi-moon-waning-crescent-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-4" /> wi wi-moon-waning-crescent-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-5" /> wi wi-moon-waning-crescent-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-waning-crescent-6" /> wi wi-moon-waning-crescent-6 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-new" /> wi wi-moon-alt-new </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-1" /> wi wi-moon-alt-waxing-cresent-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-2" /> wi wi-moon-alt-waxing-cresent-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-3" /> wi wi-moon-alt-waxing-cresent-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-4" /> wi wi-moon-alt-waxing-cresent-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-5" /> wi wi-moon-alt-waxing-cresent-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-cresent-6" /> wi wi-moon-alt-waxing-cresent-6 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-first-quarter" /> wi wi-moon-alt-first-quarter </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-1" /> wi wi-moon-alt-waxing-gibbous-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-2" /> wi wi-moon-alt-waxing-gibbous-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-3" /> wi wi-moon-alt-waxing-gibbous-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-4" /> wi wi-moon-alt-waxing-gibbous-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-5" /> wi wi-moon-alt-waxing-gibbous-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-6" /> wi wi-moon-alt-waxing-gibbous-6 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-full" /> wi wi-moon-alt-full </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-1" /> wi wi-moon-alt-waning-gibbous-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-2" /> wi wi-moon-alt-waning-gibbous-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-3" /> wi wi-moon-alt-waning-gibbous-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-4" /> wi wi-moon-alt-waning-gibbous-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-5" /> wi wi-moon-alt-waning-gibbous-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-gibbous-6" /> wi wi-moon-alt-waning-gibbous-6 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-third-quarter" /> wi wi-moon-alt-third-quarter </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-1" /> wi wi-moon-alt-waning-crescent-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-2" /> wi wi-moon-alt-waning-crescent-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-3" /> wi wi-moon-alt-waning-crescent-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-4" /> wi wi-moon-alt-waning-crescent-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-5" /> wi wi-moon-alt-waning-crescent-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moon-alt-waning-crescent-6" /> wi wi-moon-alt-waning-crescent-6 </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end moonphase icons  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* other icons  */}
        {/* ============================================================== */}
        <div className="card">
          <h5 className="card-header">Other icons</h5>
          <div className="card-body">
            <div className="icon-list-demo row">
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-alien" /> wi wi-alien </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-celsius" /> wi wi-celsius </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-fahrenheit" /> wi wi-fahrenheit </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-degrees" /> wi wi-degrees </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thermometer" /> wi wi-thermometer </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thermometer-exterior" /> wi wi-thermometer-exterior </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-thermometer-internal" /> wi wi-thermometer-internal </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloud-down" /> wi wi-cloud-down </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloud-up" /> wi wi-cloud-up </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-cloud-refresh" /> wi wi-cloud-refresh </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-horizon" /> wi wi-horizon </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-horizon-alt" /> wi wi-horizon-alt </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sunrise" /> wi wi-sunrise </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-sunset" /> wi wi-sunset </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moonrise" /> wi wi-moonrise </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-moonset" /> wi wi-moonset </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-refresh" /> wi wi-refresh </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-refresh-alt" /> wi wi-refresh-alt </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-umbrella" /> wi wi-umbrella </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-barometer" /> wi wi-barometer </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-humidity" /> wi wi-humidity </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-na" /> wi wi-na </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-train" /> wi wi-train </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi " /> wi </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* other icons  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* time icons  */}
        {/* ============================================================== */}
        <div className="card">
          <h5 className="card-header">Time icons</h5>
          <div className="card-body">
            <div className="icon-list-demo row">
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-1" /> wi wi-time-1 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-2" /> wi wi-time-2 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-3" /> wi wi-time-3 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-4" /> wi wi-time-4 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-5" /> wi wi-time-5 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-6" /> wi wi-time-6 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-7" /> wi wi-time-7 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-8" /> wi wi-time-8 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-9" /> wi wi-time-9 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-10" /> wi wi-time-10 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-11" /> wi wi-time-11 </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-time-12" /> wi wi-time-12 </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end time icons  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* directional icons  */}
        {/* ============================================================== */}
        <div className="card">
          <h5 className="card-header">Directional Arrows</h5>
          <div className="card-body">
            <div className="icon-list-demo row">
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-up" /> wi wi-direction-up </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-up-right" /> wi wi-direction-up-right </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-right" /> wi wi-direction-right </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-down-right" /> wi wi-direction-down-right </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-down" /> wi wi-direction-down </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-down-left" /> wi wi-direction-down-left </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-left" /> wi wi-direction-left </div>
              <div className="col-sm-6 col-md-4 col-lg-3 w-icon"> <i className="wi wi-direction-up-left" /> wi wi-direction-up-left </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* end directional icons  */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* end icon weather  */}
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
