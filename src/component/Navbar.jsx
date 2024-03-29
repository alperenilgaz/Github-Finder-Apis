import React from 'react'
import PropTypes from 'prop-types'
const Navbar = (props) => {

    return (
        <nav className="navbar navbar-dark bg-primary ">
          <div className="container">

        <a className="navbar-brand">
        <i className={props.icon}></i>
         {props.title}
        </a>
          </div>
       </nav>
    )
  }

Navbar.defaultProps={
    title:"Github Finder",
    icon:"bi bi-github"
}
Navbar.propTypes={
    icon:PropTypes.string.isRequired
}
export default Navbar