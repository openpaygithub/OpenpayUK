const path = require('./path')
module.exports = homePage = {
    label: "Homepage",
    url: `${path}index.html`,
    clickSelector: ".cookie-popup__button",
    selectors: ["document"],
    misMatchThreshold: 2
}