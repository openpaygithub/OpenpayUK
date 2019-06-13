const path = require('./path')
module.exports = landingPage = {
    label: "Landingpage",
    url: `${path}landingpage.html`,
    clickSelector: ".cookie-popup__button",
    selectors: ["document"],
    misMatchThreshold: 2
}