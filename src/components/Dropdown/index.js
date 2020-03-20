import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { MdMoreHoriz } from "react-icons/md";

import { Container, ButtonIcon, Menu, Item } from "./styles";

function Dropdown({ options }) {
  const dropRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  function cleanup() {
    document.removeEventListener("click", closeMenu);
  }

  const callbackClean = useCallback(cleanup);

  useEffect(() => {
    return callbackClean;
  }, [callbackClean]);

  function handleToggle(event) {
    event.preventDefault();

    if (event.screenX >= window.screen.width / 2) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }

    setVisible(!visible);
    visible
      ? document.removeEventListener("click", closeMenu)
      : document.addEventListener("click", closeMenu);
  }

  function closeMenu(event) {
    event.preventDefault();

    document.removeEventListener("click", closeMenu);
    setVisible(false);
  }

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
