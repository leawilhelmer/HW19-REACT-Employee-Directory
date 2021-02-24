import React from "react";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Link className="navbar-brand" to="/">
          Employees
        </Link> */}
        {/* <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/employee"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Search
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    );
  }
  
  export default Navbar;