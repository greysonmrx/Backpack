import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { MdMoreHoriz } from "react-icons/md";

import { Container, ButtonIcon, Menu, Item } from "./styles";

function Dropdown({ options }) {
  const dropRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  function handleToggle(event) {
    event.preventDefault();
    if (event.screenX - 280 >= window.innerWidth) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }

    setVisible(!visible);
    visible
      ? document.removeEventListener("click", closeMenu)
      : document.addEventListener("click", closeMenu);
  }

  const closeMenu = useCallback(event => {
    event.preventDefault();

    document.removeEventListener("click", closeMenu);
    setVisible(false);
  }, []);

  useEffect(() => {
    return function cleanup() {
      document.removeEventListener("click", closeMenu);
    };
  }, [closeMenu]);

  return (
    <Container>
      <ButtonIcon onClick={handleToggle}>
        <MdMoreHoriz />
      </ButtonIcon>
      <Menu ref={dropRef} visible={visible} showLeft={showLeft}>
        {options.map(option => (
          <Item key={Math.random()} onClick={() => option.action()}>
            {option.children}
          </Item>
        ))}
      </Menu>
    </Container>
  );
}

export default Dropdown;

Dropdown.propType = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired
};
