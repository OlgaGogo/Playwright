# Playwright E2E Testing Framework

A modern end-to-end testing framework built with Playwright, supporting multiple browsers and test configurations.

## 🚀 Features

- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel test execution
- HTML test reports
- CI/CD integration support (GitHub Actions)
- Screenshot and trace capture on failures
- Multiple test configurations

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/OlgaGogo/Playwright.git
cd Playwright
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🧪 Running Tests

### Run All Tests in All Browsers
```bash
npx playwright test
```

### Run Tests in Specific Browser
```bash
# Run in Chrome
npx playwright test --project=chromium

# Run in Firefox
npx playwright test --project=firefox

# Run in Safari
npx playwright test --project=webkit
```

### Development Mode with Playwright Inspector
```bash
npm run test:e2e:dev
```

### Smoke Tests
```bash
npm run test:e2e:smoke
```

### Non-Smoke Tests
```bash
npm run test:e2e:non-smoke
```

### CI Pipeline
```bash
npm run test:e2e:ci
```

## 📁 Project Structure

```
.
├── tests/               # Main test files
├── tests-examples/      # Example test files
├── utils/               # Utility functions
├── playwright.config.ts # Configuration file
└── package.json         # Project dependencies
```

## ⚙️ Configuration

The project is configured in `playwright.config.ts` with the following features:
- Parallel test execution
- Retry mechanism for failed tests
- HTML reporter
- Screenshot capture on failures
- Trace collection and Playwright Inspector for debugging
- Multiple browser configurations (Chromium, Firefox, WebKit)

## 📊 Test Reports

After test execution, you can view the HTML report:
```bash
npx playwright show-report
```

In CI, reports are available as artifacts in the GitHub Actions tab.