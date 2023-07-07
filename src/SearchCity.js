import React from "react";

export default function SearchCity() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
