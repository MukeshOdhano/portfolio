import "./Header.css";
import React, { useState, useEffect } from "react"; // added useEffect import

import { TOTAL_SCRN, GET_SCRN_INDEX } from "../../utils/CommanUtil";
import ScrollSrvs from "../../utils/ScrollSrvs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOpts, setShowHeaderOpts] = useState(false);

  const updateCurrentScreen = (currentScrn) => {
    if (!currentScrn || !currentScrn.screenInView) return;

    let screenIndex = GET_SCRN_INDEX(currentScrn.screenInView);
    if (screenIndex < 0) return;

    // Update the selected screen based on the current screen in view
    setSelectedScreen(screenIndex);
  };

  // Subscribe to the current screen observable on mount and unsubscribe on unmount
  useEffect(() => {
    const crntScrnSubs = ScrollSrvs.csbc.subscribe(updateCurrentScreen);
    return () => crntScrnSubs.unsubscribe();
  }, []); // empty dependency array to ensure the effect runs only once

  // get Header Option Classes
  const ghoClass = (index) => {
    let classes = "header-option";

    if (index < TOTAL_SCRN.length - 1) {
      classes += " header-option-separator"; // fixed typo and added space
    }

    if (selectedScreen === index) {
      classes += " selected-header-option"; // added space
    }

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_Name);

    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOpts(false);
  };

  return (
    <div>
      <div
        className="header-container"
        onClick={() => setShowHeaderOpts(!showHeaderOpts)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOpts(!showHeaderOpts)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>

          <div className="header-logo">
            <h1>MK~O</h1>
          </div>

          <div
            className={
              showHeaderOpts
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {/* Render the header options dynamically */}
            {TOTAL_SCRN.map((scrn, i) => (
              <div
                key={scrn.screen_Name}
                className={ghoClass(i)}
                onClick={() => switchScreen(i, scrn)}
              >
                <span>{scrn.screen_Name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
