const toTestResult = require('./toTestResult');

const skip = ({ start, end, test }) =>
  toTestResult({
    stats: {
      failures: 0,
      pending: 1,
      passes: 0,
      start,
      end,
    },
    skipped: true,
    tests: [Object.assign({ duration: end - start }, test)],
    jestTestPath: test.path,
  });

module.exports = skip;
