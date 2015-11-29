describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://127.0.0.1:3000');

    expect(browser.getTitle()).toEqual("Nourriture");
  });
});

