// run with npm test
// or npm --feature=featureFileName test
// for only running specific feature


let whatFeature = process.env.npm_config_feature;
if (whatFeature && !whatFeature.includes('.feature')) {
  whatFeature += '.feature';
}

let toRun = `./node_modules/selenium-cucumber-js/index.js`

process.argv.push('-b', 'firefox')
if (!whatFeature) {
 whatFeature = '';
}
process.argv.push('-f', './test/features/' + whatFeature);
require(toRun);