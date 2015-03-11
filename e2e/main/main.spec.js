'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function(done) {
    browser.get('/');

    setTimeout(function () {
      page = require('./main.po');
      done();
    }, 1000);
  });

  it('should include programs and discussions', function() {
    expect(page.programs.count()).toBe(3);
    expect(page.discussions.count()).toBe(3);
  });
});
