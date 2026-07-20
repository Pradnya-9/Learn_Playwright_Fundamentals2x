# Learn Playwright Fundamentals 2x

This repository contains a Playwright Test project with sample browser automation tests and organized test suites.

## Project contents

- `package.json` - project metadata and dev dependencies
- `playwright.config.ts` - Playwright test configuration
- `tests/` - main test directory with grouped spec files
- `.gitignore` - excludes `node_modules/`, Playwright reports, and test result artifacts
- `.gitkeep` - placeholder files for empty folders that need to stay tracked in Git

## Test directories

- `tests/01_Basics` - basic Playwright test examples
- `tests/02_First_tests` - first test runs and browser context examples
- `tests/03_Locators_Commands` - locator usage and command examples
- `tests/Tasks` - task-based practice tests

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the full test suite:
   ```bash
   npm test
   ```

3. Run a specific test file:
   ```bash
   npx playwright test tests/02_First_tests/237_BCP_Test_Options.spec.ts --headed
   ```

## Notes

- The `node_modules/`, `test-results/`, and `playwright-report/` folders are ignored by `.gitignore`.
- The repository includes `.gitkeep` files to preserve empty directories in Git when needed.
- The Playwright configuration has been set to use `tests/` as the test directory and includes browser run settings.
