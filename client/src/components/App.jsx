import React from 'react';
import Search from './Search.jsx';
import NearMeDropdown from './NearMeDropdown.jsx';
import AboutDropdown from './AboutDropdown.jsx';
import HostButton from './HostButton.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="nav-navbar-container">
          <div className="nav-container-left">
            <div className="nav-logo-container">
              <img className="nav-logo" src="https://timcamp-image-storage.s3-us-west-1.amazonaws.com/logos/TimCamp_Logo-01.png" alt="TimCamp Logo"/>
            </div>
            <Search />
          </div>
          <ul className="nav-container-right">
            <NearMeDropdown />
            <AboutDropdown />
            <li className="nav-timcash">Earn Timcash</li>
            <li className="nav-login">Log in</li>
            <li className="nav-signup">Sign up</li>
            <HostButton />
          </ul>
        </div>
        {/* -- Delete this stuff between this comment -- */}
        <div className="someotherstuff">
          <div className="childstuff1"></div>
          <div className="childstuff2"></div>
        </div>
        {/* -- and this one -- */}
      </div>
    );
  }
}