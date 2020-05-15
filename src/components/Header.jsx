import React from 'react';
import Pdf from '../assets/resume.pdf';
export default function Header() {
    return (
        <>
            <header style={containerStyle}>
                <h1 style={titleStyle}>Kristin Yin</h1>
                <div style={navContainerStyle}>
                    <div style={navItemStyle}>
                        <a href={Pdf} rel="noopener noreferrer" target="_blank">resume</a>
                    </div>
                    <div style={navItemStyle}>
                        <a style={selectedNavStyle} href="#">hackathons</a>
                    </div>
                    <div style={navItemStyle}>
                        <a href="#">interactive art</a>
                    </div>
                    <div style={navItemStyle}>
                        <a href="#">mixed media</a></div>
                    <div style={navItemStyle}>
                        <a href="#">watercolors</a></div>
                </div>
            </header>
            <hr />
        </>
    );
}

const selectedNavStyle = {
    paddingBottom: '8px',
    borderBottomColor: '#94C5CC',
    borderBottomWidth: '2px',
    borderBottomStyle: "solid",
}

const navItemStyle = {
    paddingLeft: '32px',
    paddingRight: '32px',
}

const navContainerStyle = {
    paddingTop: '24px',
    paddingBottom: '24px',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center'
}

const containerStyle = {
    paddingTop: '56px',
    paddingBottom: '32px',
};

const titleStyle = {
    fontFamily: "Julius Sans One",
    fontSize: "36px",
    fontWeight: "normal",
    textAlign: "center",
    letterSpacing: "0.1em",
    color: "#000100"
}