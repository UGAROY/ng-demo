'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /group-query when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/group-query");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/group-query');
    });


    it('should render group-query when user navigates to /group-query', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('tasks', function() {

    beforeEach(function() {
      browser.get('index.html#/tasks');
    });


    it('should render tasks when user navigates to /tasks', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
