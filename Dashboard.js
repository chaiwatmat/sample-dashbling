import React from "react";

import { connect } from "@dashbling/client/dashbling";
import { Dashboard } from "@dashbling/client/components";
import { Clock } from "@dashbling/client/widgets";
import { JenkinsWidget } from "./widgets/JenkinsWidget";
import { VersionWidget } from "./widgets/VersionWidget";

const DashblingVersion = connect("bemore-api-version")(VersionWidget);
const DashblingJenkins = connect("hello-build-version")(JenkinsWidget);
const DashblingJenkinsJob = connect("jenkins-jobs")(JenkinsWidget);

export default props => {
    return (
        <Dashboard>
            <Clock
                tzdata={require("timezone/Asia/Bangkok")}
                timezone="Asia/Bangkok"
                backgroundColor="#24292e"
            />
            <DashblingVersion />
            <DashblingJenkins />
            <DashblingJenkinsJob />
        </Dashboard>
    );
};
