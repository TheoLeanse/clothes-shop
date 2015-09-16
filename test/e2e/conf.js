exports.config = {
    directConnect: true,
    
    capabilities: {
      'browserName': 'chrome'
  },
    
    framework: 'jasmine2',
    
    specs: [
        'adding-product-to-cart-spec.js',
        'removing-items-from-cart-spec.js',
        'viewing-total-price-spec.js'
    ],
    
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
  }
};
