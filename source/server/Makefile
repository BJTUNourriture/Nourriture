REPORTER = ""
MOCHA_OPTS = 

all: test

test:
		clear
		@echo Starting all tests
		mocha --reporter $(REPORTER) $(MOCHA_OPTS) ./test/test.js
	 	@echo Ending Tests

test-ingredients:
		clear
		@echo Starting Ingredients tests
		mocha --reporter $(REPORTER) $(MOCHA_OPTS) ./test/API/tests-ingredient.js
		@echo Ending Ingredients tests

test-recipes:
		clear
		@echo Starting Recipes tests
		mocha --reporter $(REPORTER) $(MOCHA_OPTS) ./test/API/tests-recipe.js
		@echo Ending Recipes tests

.PHONY: test test-ingredients