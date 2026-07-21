# Learn Playwright Fundamentals 2x

This repository contains a Playwright Test learning project with practical browser automation examples, locator exercises, and task-based test cases.

## What’s included

- Playwright test setup and configuration in [playwright.config.ts](playwright.config.ts)
- Sample tests organized by topic in [tests](tests)
- Browser automation exercises for basics, first runs, locators, web tables, and task-based scenarios
- Project metadata and dev dependencies in [package.json](package.json)

## Test structure

- [tests/01_Basics](tests/01_Basics) - basic Playwright examples and annotations
- [tests/02_First_tests](tests/02_First_tests) - first test executions and browser context scenarios
- [tests/03_Locators_Commands](tests/03_Locators_Commands) - locator and command practice
- [tests/07_WebTables](tests/07_WebTables) - dynamic XPath and web table handling examples
- [tests/Tasks](tests/Tasks) - task-based practice tests

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the full suite:
   ```bash
   npm test
   ```

3. Run a single spec file:
   ```bash
   npx playwright test tests/02_First_tests/237_BCP_Test_Options.spec.ts --headed
   ```

4. Generate and open the HTML report:
   ```bash
   npx playwright show-report
   ```

## Notes

- The repository ignores generated folders such as node_modules, test-results, and playwright-report.
- The Playwright configuration points tests to the [tests](tests) folder.
- Use the Playwright test runner for both local execution and report generation.
