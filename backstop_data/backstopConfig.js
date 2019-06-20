const homePage = require('./scenarios/homePage')
const works = require('./scenarios/works')
const business = require('./scenarios/business')
const contact = require('./scenarios/contact')
const faq = require('./scenarios/faq')
const legal = require('./scenarios/legal')
const getInTouch = require('./scenarios/getInTouch')
const landingPage = require('./scenarios/landingPage')

module.exports = {
  id: "openpay_uk",
  viewports: [
    {
      label: "desktop",
      width: 1366,
      height: 768
    },
    {
      label: "iphone-5",
      width: 320,
      height: 568
    }
  ],
  onBeforeScript: "chromy/onBefore.js",
  onReadyScript: "chromy/onReady.js",
  scenarios: [
    homePage,
    works,
    business,
    contact,
    faq,
    legal,
    getInTouch,
    landingPage
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report"
  },
  report: ["browser"],
  engine: "chromy",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 1,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};
