import React from "react";
// import data from "./module";

// const allData = data();
class Search extends React.Component {
    render() {
      return (
        <div className='search-section'>
          <div className='search-item'>
            <input placeholder="Search"/>
            <button>Search</button> 
            <br/>
            <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" alt="gif"/>
          </div>
        </div>
      );
    }
  }
  
  export default Search;