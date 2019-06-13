const path = require('./path')
module.exports = legal = {
    label: "Legal",
    url: `${path}legal.html`,
    clickSelector: ".cookie-popup__button",
    selectors: ["document"],
    misMatchThreshold: 0.1
}