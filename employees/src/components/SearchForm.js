import React from "react";

const styles ={
input:{
 height: "30px",
 width: "200px",
//  display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
}
}
function SearchForm(props) {
  return (
    <form>
      <div className="form-group" style={styles.input}>
        <input 
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for employee"
          id="search"
        />
        <br />
      </div>
    </form>
  );
}

export default SearchForm;
