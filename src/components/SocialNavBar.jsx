import React from 'react';

export default function SocialNavBar() {
    return (
        <>
            <div style={containerStyle}>
                <div style={navItemStyle}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_kristinyin_">instagram</a>
                </div>
                <div style={navItemStyle}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kristin-yin-347b60110/">linkedin</a>
                </div>
                <div style={navItemStyle}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/kristing400">github</a>
                </div>
            </div>
        </>
    );
}

const containerStyle = {
    transform: 'rotate(-90deg) translateX(-100%)',
    transformOrigin: 'left top ',
    position: 'fixed',
    left: 0,
    display: 'flex',
    marginTop: '245px',
    marginLeft: '40px',
    marginRight: '40px',
    fontSize: '18px'
}

const navItemStyle = {
    paddingLeft: '32px',
    paddingRight: '32px',
}
