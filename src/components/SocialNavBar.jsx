import React from "react";

export default function SocialNavBar() {
  return (
    <>
      <div style={containerStyle}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/_kristinyin_"
          className="gray-link"
        >
          instagram
        </a>
        <a
          className="gray-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kristin-yin-347b60110/"
        >
          linkedin
        </a>
        <a
          className="gray-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kristing400"
        >
          github
        </a>
      </div>
    </>
  );
}

const containerStyle = {
  transform: "rotate(-90deg) translateX(-100%)",
  transformOrigin: "left top ",
  position: "fixed",
  left: 0,
  marginTop: "245px",
  display: "flex",
  marginLeft: "40px",
  marginRight: "40px",
  fontSize: "18px",
};
