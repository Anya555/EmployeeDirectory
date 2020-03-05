import React from "react";
import "../styles/style.css"


function SearchForm(props) {


  return (
    <form>
      <div className="form-group">
        <input 
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for employee"
          id="search"
        />
        <br /><br/>
      </div>
    </form>
  );
}

export default SearchForm;
