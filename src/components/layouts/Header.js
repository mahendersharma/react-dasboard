import {
   
    Link
  } from "react-router-dom";
function Header() {
    return (
        <>
  <div className="dashboard-main-wrapper dashboard-header">
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <Link className="navbar-brand" to="/">Concept</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right-top">
          <li className="nav-item">
            <div id="custom-search" className="top-search-bar">
              <input className="form-control" type="text" placeholder="Search.." />
            </div>
          </li>
          <li className="nav-item dropdown notification">
            <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell" /> <span className="indicator" /></a>
            <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
              <li>
                <div className="notification-title"> Notification</div>
                <div className="notification-list">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                      <div className="notification-info">
                        <div className="notification-list-user-img"><img src="assets/images/avatar-2.jpg" alt="" className="user-avatar-md rounded-circle" /></div>
                        <div className="notification-list-user-block"><span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="notification-info">
                        <div className="notification-list-user-img"><img src="assets/images/avatar-3.jpg" alt="" className="user-avatar-md rounded-circle" /></div>
                        <div className="notification-list-user-block"><span className="notification-list-user-name">John Abraham </span>is now following you
                          <div className="notification-date">2 days ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="notification-info">
                        <div className="notification-list-user-img"><img src="assets/images/avatar-4.jpg" alt="" className="user-avatar-md rounded-circle" /></div>
                        <div className="notification-list-user-block"><span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="notification-info">
                        <div className="notification-list-user-img"><img src="assets/images/avatar-5.jpg" alt="" className="user-avatar-md rounded-circle" /></div>
                        <div className="notification-list-user-block"><span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="list-footer"> <a href="#">View all notifications</a></div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown connection">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-fw fa-th" /> </a>
            <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
              <li className="connection-list">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a href="#" className="connection-item"><img src="assets/images/github.png" alt="" /> <span>Github</span></a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a href="#" className="connection-item"><img src="assets/images/dribbble.png" alt="" /> <span>Dribbble</span></a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a href="#" className="connection-item"><img src="assets/images/dropbox.png" alt="" /> <span>Dropbox</span></a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a href="#" className="connection-item"><img src="assets/images/bitbucket.png" alt="" /> <span>Bitbucket</span></a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a href="#" className="connection-item"><img src="assets/images/mail_chimp.png" alt="" /><span>Mail chimp</span></a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                    <a href="#" className="connection-item"><img src="assets/images/slack.png" alt="" /> <span>Slack</span></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="conntection-footer"><a href="#">More</a></div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown nav-user">
            <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/avatar-1.jpg" alt="" className="user-avatar-md rounded-circle" /></a>
            <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
              <div className="nav-user-info">
                <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
                <span className="status" /><span className="ml-2">Available</span>
              </div>
              <a className="dropdown-item" href="#"><i className="fas fa-user mr-2" />Account</a>
              <a className="dropdown-item" href="#"><i className="fas fa-cog mr-2" />Setting</a>
              <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2" />Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  
  <div className="nav-left-sidebar sidebar-dark">
    <div className="menu-list">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column">
            <li className="nav-divider">
              Menu
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Dashboard <span className="badge badge-success">6</span></a>
              <div id="submenu-1" className="collapse submenu" style={{}}>
                <ul className="nav flex-column">
                  
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/form-elements">Form Elements</Link>
                  </li>
                
                  
                </ul>
              </div>
            </li>


            <li class="nav-item">
                                <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i class="fa fa-fw fa-rocket"></i>UI Elements</a>
                                <div id="submenu-2" class="collapse submenu">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/cards">Cards</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/general">general</Link>
                                        
                                        </li>
                                        <Link className="nav-link" to="/carousel">Carousel</Link>
                                        
                                        <li class="nav-item">
                                
                                            <Link className="nav-link" to="/listgroup">List Group</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/typography">Typography</Link>
                                           
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/accordions">Accordions</Link>
                                           
                                        </li>
                                      
                                    </ul>
                                </div>
                            </li>
            
            
            
                            <li class="nav-item">
                                <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i class="fas fa-fw fa-chart-pie"></i>Chart</a>
                                <div id="submenu-3" class="collapse submenu">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                           
                                            <Link className="nav-link" to="/chart-c3">C3 Charts</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/chart-charts">Chart</Link>
                                           
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/chart-chartist">Chartist Charts</Link>
                                           
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-divider">
                                Features
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6"><i class="fas fa-fw fa-file"></i>Pages</a>
                                <div id="submenu-6" class="collapse submenu" >
                                    <ul class="nav flex-column">
                                      
                                     
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/pricing">Pricing Tables</Link>
                                        </li>
                                        
                                       
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/sortable">Sortable/Nestable List</Link>
                                        </li>
                                       <li class="nav-item">
                                       <Link className="nav-link" to="/widgets">Widgets</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/media">Media Objects</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/cropper">Cropper</Link>
                                          
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
            
                            <li class="nav-item">
                                <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8"><i class="fas fa-fw fa-columns"></i>Icons</a>
                                <div id="submenu-8" class="collapse submenu">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/fontAwesome">FontAwesome Icons</Link>
                                           
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/means">Material Icons</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/lineicon">Simpleline Icons</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/themify">Themify Icon</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/flag">Flag Icons</Link>
                                        </li>
                                        <li class="nav-item">
                                        <Link className="nav-link" to="/weather">Weather Icon</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  </div>

  </>
 );
}

export default Header;