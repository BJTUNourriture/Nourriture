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

test-tags:
		clear
		@echo Starting Tags tests
		mocha --reporter $(REPORTER) $(MOCHA_OPTS) ./test/API/tests-tag.js
		@echo Ending Tags tests

test-search:
		clear
		@echo Starting Search tests
		mocha --reporter $(REPORTER) $(MOCHA_OPTS) ./test/API/tests-search.js
		@echo Ending Search tests


test-types:
		clear
		@echo Starting Types tests
		mocha --reporter $(REPORTER) $(MOCHA_OPTS) ./test/API/tests-type.js
		@echo Ending Types tests

test-oauth:
		clear
		@echo Starting Search tests
		mocha --reporter $(REPORTER) $(MOCHA_OPTS) ./test/API/tests-oauth.js
		@echo Ending OAuth tests

.PHONY: test test-ingredients test-recipes test-tags test-search  test-types test-oauth

