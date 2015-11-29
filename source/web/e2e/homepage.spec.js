describe('Homepage', function() {
  it('should have Nourriture as title', function() {
    browser.get("http://localhost:3000/");
    expect(browser.getTitle()).toEqual("Nourriture");
  });

  it('should display the menu when clicking on the menu icon', function() {
    var hasClass = function (element, cls) {
        return element.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(cls) !== -1;
        });
    };

    element(by.css(".icon-menu")).click()
    expect(hasClass(element(by.name('md-backdrop')), 'md-opaque')).toBe(true);
  });
});

