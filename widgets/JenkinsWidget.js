import React from "react";
import { Widget, LargeLabel, MediumLabel } from "@dashbling/client/Widget";

const bgColor = json => {
    return json.color === "blue" ? "#429c6a" : "#dd1506";
};

export const JenkinsWidget = (json) => {
    return (
        <Widget style={{ backgroundColor: bgColor(json) }}>
            <MediumLabel>{json.name}</MediumLabel>
            <MediumLabel>{json.environment}</MediumLabel>
            <LargeLabel>{json.lastBuild || '---'}</LargeLabel>
        </Widget>
    );
};
