import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

import Sidebar from "../../components/Sidebar";

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      {children}
    </Wrapper>
  );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
