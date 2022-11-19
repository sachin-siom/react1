import { useNavigate } from "react-router-dom";
import React, { Component }  from 'react';

function withNavigation(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

export default withNavigation