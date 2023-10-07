import React, { useState } from "react";
import { StyledPopup } from "./stylePopup.style";

export function Popup({ textcomponent, PopupComponent, closePopop, onYes }) {
  return (
    <StyledPopup>
      <PopupComponent />
      <div className="popup-footer">
        <button onClick={closePopop} className="no">
          {textcomponent.no ? textcomponent.no : "Yes"}
        </button>
        <button onClick={onYes} className="yes">
          {textcomponent.yes ? textcomponent.yes : "No"}
        </button>
      </div>
    </StyledPopup>
  );
}

export default Popup;
