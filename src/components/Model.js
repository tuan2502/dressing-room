import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Model(props) {
  const modelList = useSelector((state) => state.DressingRoomReducer.modelList);
  return (
    <Fragment>
      <div className="contain">
        <div className="body" />
        <div className="model" />
        <div
          id={modelList[5].id}
          className="hairstyle"
          style={{
            width: 1000,
            height: 1000,
            background: `url(${modelList[5].imgSrc_png})`,
            position: "absolute",
            top: "-75%",
            right: "-57%",
            transform: "scale(0.15)",
            zIndex: 4,
          }}
        />
        <div
          id={modelList[4].id}
          className="necklace"
          style={{
            width: 500,
            height: 1000,
            background: `url(${modelList[4].imgSrc_png})`,
            position: "absolute",
            bottom: "-40%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: 4,
          }}
        />
        <div
          id={modelList[0].id}
          className="bikinitop"
          style={{
            width: 500,
            height: 500,
            background: `url(${modelList[0].imgSrc_png})`,
            position: "absolute",
            top: "-9%",
            left: "-5%",
            zIndex: 3,
            transform: "scale(0.5)",
          }}
        />
        <div
          id={modelList[1].id}
          className="bikinibottom"
          style={{
            width: 500,
            height: 1000,
            background: `url(${modelList[1].imgSrc_png})`,
            position: "absolute",
            top: "-30%",
            left: "-5%",
            zIndex: 2,
            transform: "scale(0.5)",
          }}
        />
        <div
          id={modelList[3].id}
          className="handbag"
          style={{
            width: 500,
            height: 1000,
            background: `url(${modelList[3].imgSrc_png})`,
            position: "absolute",
            bottom: "-40%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: 4,
          }}
        />
        <div
          id={modelList[2].id}
          className="feet"
          style={{
            width: 500,
            height: 1000,
            background: `url(${modelList[2].imgSrc_png})`,
            position: "absolute",
            bottom: "-37%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: 1,
          }}
        />
        <div
          id={modelList[6].id}
          className="background"
          style={{
            backgroundImage: `url(${modelList[6].imgSrc_png})`,
          }}
        />
      </div>
    </Fragment>
  );
}
