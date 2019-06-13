const path = require('./path')
module.exports = faq = {
    label: "FAQ",
    url: `${path}faq.html`,
    clickSelector: ".cookie-popup__button",
    selectors: ["document"],
    misMatchThreshold: 0.1
}