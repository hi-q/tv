'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function(done) {
    browser.get('/');
    browser.waitForAngular();

    setTimeout(function () {
      page = require('./main.po');
      done();
    }, 1000);
  });

  it('should include programs and discussions', function() {
    expect(page.programs.count()).toBe(3);
    expect(page.discussions.count()).toBe(3);
  });

  it ('should focus to comment section on comment click', function(done) {
    var row = page.programs.get(1);

    browser.driver
        .actions()
        .mouseMove(row)
        .perform();

    var discussButton = row.element(by.css('.discuss'));
    expect(discussButton.getAttribute('title')).toBe('Обсудить');

    discussButton.click();

    setTimeout(function () {
      var textarea = element(by.css('.add-discussion textarea'));
      expect(textarea).toEqual(browser.driver.switchTo().activeElement());
      done();
    }, 1000);
  })
});
