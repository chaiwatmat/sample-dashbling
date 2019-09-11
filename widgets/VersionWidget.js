import React from "react";
import { Widget, LargeLabel, MediumLabel } from "@dashbling/client/Widget";

// const bgColor = props => {
//   return props.outcome === "success" ? "#429c6a" : "#dd1506";
// };

export const VersionWidget = (json) => {
  console.log(json);
  return (
    <Widget style={{ backgroundColor: json.bgColor || "#00865A" }}>
      <MediumLabel>{json.appname}</MediumLabel>
      <MediumLabel>{json.environment}</MediumLabel>
      <LargeLabel>{json.appversion}</LargeLabel>
    </Widget>
  );
};
