/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.discussions = element.all(by.css('.discussion'));
  this.programs = element.all(by.css('.program'));
};

module.exports = new MainPage();

