import React from "react";

export default function SearchCity() {
  return (
    <div className="clear-fix">
      <form id="search-form" className="mb-3 float-left">
        <div class="input-group">
          <input
            type="search"
            placeholder="Type a city..."
            class="form-control"
            id="city-input"
          />
          <button class="btn btn-primary" type="button">
            Search
          </button>
          <button class="btn btn-success" type="button">
            Current
          </button>
        </div>
      </form>
    </div>
  );
}
