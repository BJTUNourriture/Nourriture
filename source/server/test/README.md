# Tests

Here you will find the several tests written to test the backend server. They are written following a specific architecture and let you test the whole project or parts of it.

## Tests Architecture

```
├──  test.js
└──  API/
	├──  tests-ingredient.js
	└──  tests-recipe.js
```

## test.js

This is the main test file. In this file, the architecture is set to run all the test parts and subparts.
To add a test part simply add it as follow at the end of the file :

```
...
describe('Test Part', function() {
//Your subtests here
});
```

To append a subpart simply add it in a test part as follow :
```
describe('Test Part', function() {
	...

	//Tests ingredients
  	require('./API/tests-ingredient');

  	//New Subpart
  	require('./<Part Test Name>/<Subpart test file>');

  	...
});
```

## API

In this folder you can put our subpart tests for the API. You will have to include the subtest in the `test.js` file situated at the root of the test folder.
You will also need to create a rule in the `Makefile` located at the root of the backend server.
Here is an exemple :

```
test-dummy:
		clear
		@echo Starting Dummy tests
		mocha --reporter $(REPORTER) $(MOCHA_OPTS) ./test/<Part Test Name>/test-dummy.js
		@echo Ending Dummy tests
```

Dont't forget to protect the rule and to append it to `.PHONY` :

```
.PHONY : test ... test-dummy
```

You are now ready to test your subpart!