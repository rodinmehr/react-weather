import React from "react";

export default function Overview() {
  return (
    <div className="overview">
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated: <span id="date">Wednesday 13:41</span>
        </li>
        <li id="description">Few clouds</li>
      </ul>
    </div>
  );
}
