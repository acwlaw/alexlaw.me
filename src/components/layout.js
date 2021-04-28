/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import "./layout.css";
import "@fontsource/roboto";
import NavigationBar from "../pages/NavigationBar";

const Layout = ({ children }) => {

  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
