import React from "react";

export default function LinkImg({
  photo,
  onClick,
  direction,
  margin,
  left,
  top,
  title,
  description,
}) {
  let cont = {
    // background:
    //   "#linear-gradient(180deg, #B4D2E7 0%, rgba(255, 255, 255, 0) 100%), #94C5CC;",
    // backgroundColor: "#94C5CC",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
  };

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  return (
    <div
      className="gradient-background"
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
    >
      <div className="overlay">
        <div className="overlay-text">
          <h4 style={titleStyle}>{title}</h4>
          <p style={descriptionStyle}>{description}</p>
        </div>
        <img {...photo} alt={photo.alt} onClick={onClick} />
      </div>
    </div>
  );
}

const titleStyle = {
  fontFamily: "Julius Sans One",
  fontSize: "18px",
  margin: 0,
  marginBottom: "16px",
  fontWeight: "normal",
  lineHeight: 1.4,
};

const descriptionStyle = {
  fontSize: "16px",
  fontWeight: 400,
};
