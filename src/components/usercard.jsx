import React from "react";

const Usercard = () => {
    const profilePhoto =
    "https://imageio.forbes.com/specials-images/imageserve/663e595b4509f97fdafb95f5/0x0.jpg?format=jpg&crop=383,383,x1045,y23,safe&height=416&width=416&fit=bounds";
    const name = "Lionel Messi";
    const email = "Messi@gmail.com";
    const phone = "1234567890";
    const address = "Argentina";

    const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid red",
    borderRadius: "10px",
    padding: "15px",
    width: "200px"
    };

    const imgStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
    };

    const textStyle = {
    margin: "5px 0",
    fontSize: "14px",
    textAlign: "center",
    };

    const h2Style = {
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center"
    }

    return (
    <div style={divStyle}>
        <img src={profilePhoto} alt="profile" style={imgStyle} />
        <h2 style={h2Style}>{name}</h2>
        <p style={textStyle}>{email}</p>
        <p style={textStyle}>{phone}</p>
        <p style={textStyle}>{address}</p>
    </div>
    );
};

export default Usercard;
