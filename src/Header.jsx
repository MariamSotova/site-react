import React, { useState } from "react";

export const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState("false");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}>about</div>
          <div className={burger_class}>me</div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <p className="burger-text">
          {" "}
          Hi, my name is Mariam Yan, and I am Front End Developer based in
          Rotterdam, Netherlands. I love creating interactive digital
          experiences on the web.
        </p>
      </div>
    </div>
  );
};

export default Header;
