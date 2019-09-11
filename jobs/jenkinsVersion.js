const fetch = require("node-fetch");

module.exports = (eventId) =>
    async function jenkinsVersion(sendEvent) {
        try {

            var username = "admin";
            var secret = "114103c3f9df3056f97e3cc460a1390d3b";

            var options = {
                method: 'get',
                headers: {
                    "Content-Type": "text/plain",
                    'Authorization': 'Basic ' + Buffer.from(username + ":" + secret).toString('base64')
                }
            };

            // ==================
            const helloResponse = await fetch(`http://localhost:8080/job/my jobs/job/hello/api/json?pretty=true`, options);
            const helloJson = await helloResponse.json();

            const helloResult = {
                name: helloJson.displayName,
                color: helloJson.color,
                environment: "PROD",
                lastBuild: helloJson.lastBuild.number
            };

            // ==================
            const jobResponse = await fetch(`http://localhost:8080/job/my jobs/api/json?pretty=true`, options);
            const jobJson = await jobResponse.json();

            const jobResult = {
                name: "Job",
                color: "blue",
                environment: "",
                lastBuild: jobJson.jobs.length
            };

            // ==================
            sendEvent("hello-build-version", helloResult);
            sendEvent("jenkins-jobs", jobResult);
        } catch (e) {
            console.warn("Failed to fetch api versions", e);
        }
    };
