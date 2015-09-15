exports.config = {
    directConnect: true,
    
    capabilities: {
      'browserName': 'chrome'
  },
    
    framework: 'jasmine2',
    
    specs: [
        'adding-product-to-cart-spec.js'
    ],
    
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
  }
};
