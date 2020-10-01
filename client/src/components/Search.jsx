import React from 'react';
import { FaSearch } from 'react-icons/fa';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <div className="nav-search-container">
          <FaSearch />
          <input type="text" placeholder="Try Yosemite, Napa, Moab..."/>
        </div>
      </form>
    );
  }
}