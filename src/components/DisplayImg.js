import Image from "next/image";
import React from "react";
import ListItem from "./ListItem";

const DisplayImg = ({ uploadedImg, colorPalette }) => {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };
  return (
    <div>
      <div
        className="image"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        {uploadedImg ? (
          <Image src={uploadedImg} alt="" height={100} width={100} />
        ) : (
          <h1>Upload Img</h1>
        )}
      </div>
      <div className="color">
        {colorPalette && (
          <ul>
            {colorPalette.map((color, index) => {
              // const rgb = `rgb( ${color[0]}, ${color[1]},${color[2]},${color[3]} ,${color[4]},${color[5]},)`;
              const rgb = `rgb(${color.join(",")})`;
              const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
                color[2]
              )}`;
              return <ListItem key={index} rgb={rgb} hex={hex} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DisplayImg;
