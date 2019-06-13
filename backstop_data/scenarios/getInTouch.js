const path = require('./path')
module.exports = getInTouch = {
    label: "Get in touch",
    url: `${path}get-in-touch.html`,
    clickSelector: ".cookie-popup__button",
    selectors: ["document"],
    misMatchThreshold: 0.1
}