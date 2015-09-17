## Clothes Shop

[![Build Status](https://travis-ci.org/TheoLeanse/clothes-shop.svg?branch=configure-project)](https://travis-ci.org/TheoLeanse/clothes-shop)

### How to build and run the code:

### Code layout:

### Approach and thinking:

PRs:
- configure-project
- add-product-to-cart
- configure-protractor

Steps:
- decided on JS, almost certainly angular framework
- choose karma and jasmine to run unit tests and set up gruntfile to run tests in the background (issues with...)
- Travis CI set up to run grunt karma (via npm test)
- test-drive user story one on the angular side: namespace of store; JSON to store one product; store controller to have a shopping cart model; function to add an item to the shopping cart.
- set up protractor to prepare to test drive the UI (problems with conf.js, chromeDriver, updating global rather than local selenium...)
- need to serve up some files to test, so make a little static app
- now I have it, set up staging heroku and development heroku

Steps to remove error: WARNING - more than one element found for locator by.buttonText("Add to cart") - the first result will be used
Annoyed by vagueness of my protractor locators, so used filter, but then was a bit of a humungus function, and repeated for each product - so thought about helper methods and decided to make a module
