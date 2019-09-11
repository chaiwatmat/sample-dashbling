const fetch = require("node-fetch");

module.exports = (eventId) =>
    async function apiVersion(sendEvent) {
        try {
            const response = await fetch(`https://api.something.com`);
            const json = await response.json();
            // console.log(json);

            json.bgColor = "#008800";

            sendEvent(eventId, json);
        } catch (e) {
            console.warn("Failed to fetch api versions", e);
        }
    };
