import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./Navbar.module.css";

const Navbar = ({ total }) => {
  return (
    <nav className={`navbar ${styles.customNavbar}`}>
      <div className="container">
        <span className={`navbar-brand fs-3 ${styles.brand}`}>
          📝 Todo App
        </span>

        <button className={`btn btn-light ${styles.taskCount}`}>
          Tasks: {total}
        </button>
      </div>
    </nav>
    
  );
};

export default Navbar;