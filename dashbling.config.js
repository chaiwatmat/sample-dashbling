const { createFileHistory } = require("@dashbling/core/history");
const eventHistoryPath = require("path").join(
    process.cwd(),
    "dashbling-events"
);

module.exports = {
    webpackConfig: config => {
        // return modified config
        // or even completely custom config.
        //
        // Example:
        // config.module.rules.push({
        //   test: /\.jpg$/,
        //   loader: "file-loader"
        // });
        return config;
    },
    onStart: sendEvent => {
        // start custom code that sends events here,
        // for example listen to streams etc.
    },
    configureServer: async hapiServer => {
        // Configure the Hapi server here.
        // See https://hapijs.com/api/17.1.1 docs for details.
        // This is only needed for more advanced use cases.
        hapiServer.route({
            method: "GET",
            path: "/ping",
            handler: (_request, _h) => {
                return "pong";
            }
        });
    },
    eventHistory: createFileHistory(eventHistoryPath),
    forceHttps: false,
    jobs: [
        {
            schedule: "* * * * *",
            fn: require("./jobs/apiVersion")("bemore-api-version")
        },
        {
            schedule: "* * * * *",
            fn: require("./jobs/jenkinsVersion")("jenkins-build-version")
        }
    ]
};
