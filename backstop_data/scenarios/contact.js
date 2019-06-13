const path = require('./path')
module.exports = contact = {
    label: "Contact us",
    url: `${path}contact.html`,
    clickSelector: ".cookie-popup__button",
    selectors: ["document"],
    misMatchThreshold: 0.1
}