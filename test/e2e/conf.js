exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine2',

  specs: ['dummy-spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
