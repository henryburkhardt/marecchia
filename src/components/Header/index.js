import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <a href="mailto:themarecchia@gmail.com">themarecchia@gmail.com</a>
        <FontAwesomeIcon icon={faMessage} />
      </div>
    </div>
  );
};

export default Header;
