import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "../App.css";

const DraggableContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [containerPosition, setContainerPosition] = useState({ x: 0, y: 0 });

  const handleOptionChange = (e) => {
    setSelectedOption(Number(e.target.value));
    setContainerPosition({ x: 0, y: 0 });
  };

  const style1 = {
    top: "10px",
    left: "10px",
  };

  const style2 = {
    top: "10px",
    right: "10px",
  };

  const style3 = {
    bottom: "10px",
    left: "10px",
  };

  const style4 = {
    bottom: "10px",
    right: "10px",
  };

  const style5 = {
    top: "40%",
    left: "40%",
    transform: "translate(-50%, -50%)",
  };

  const getContainerStyle = () => {
    switch (selectedOption) {
      case 0:
        return { ...style1, position: "fixed" };
      case 1:
        return { ...style2, position: "fixed" };
      case 2:
        return { ...style3, position: "fixed" };
      case 3:
        return { ...style4, position: "fixed" };
      case 4:
        return { ...style5, position: "fixed" };
      default:
        return { position: "fixed" };
    }
  };

  const handleDragStart = () => {
    setIsOpen(true);
  };

  const handleDrag = (e, ui) => {
    setContainerPosition({ x: ui.x, y: ui.y });
  };

  const handleDragStop = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "m") {
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Draggable
          handle=".draggable-handle"
          onStart={handleDragStart}
          onDrag={handleDrag}
          onStop={handleDragStop}
          position={containerPosition}
        >
          <div
            style={{ ...getContainerStyle() }}
            className="draggable-container"
          >
            <button className="draggable-handle">Drag me!</button>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value={0}>Top-Left</option>
              <option value={1}>Top-Right</option>
              <option value={2}>Bottom-Left</option>
              <option value={3}>Bottom-Right</option>
              <option value={4}>Center</option>
            </select>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default DraggableContainer;
