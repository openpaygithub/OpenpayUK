const path = require('./path')
module.exports = error = {
    label: "Error",
    url: `${path}error.html`,
    clickSelector: ".cookie-popup__button",
    selectors: ["document"],
    misMatchThreshold: 2
}