# AI-Powered Test Automation Project

## Overview

This project demonstrates AI-assisted test automation using three different approaches:
1. **Playwright with Cursor IDE** - Test generation using Cursor IDE with Playwright MCP
2. **Playwright with Claude Desktop** - Test generation using Claude Desktop client with Playwright MCP
3. **Cypress with Cloud** - Test generation using Cypress framework connected to Cypress Cloud

The project contains **6 test cases** in total, with **2 test cases per solution** (2 for Playwright+Cursor, 2 for Playwright+Claude, 2 for Cypress).

## Project Structure

This repository contains **3 packages**, each representing a separate test automation project:

```
AI-pref_task12/
├── playwright-cursor/      # Playwright tests with Cursor IDE + MCP
├── playwright-claude/      # Playwright tests with Claude Desktop + MCP
└── cypress-cloud/          # Cypress tests with Cloud integration
```

Each package has its own:
- **README.md** - Complete documentation with summary, requirements, installation steps, how to run tests, and how to generate reports
- **package.json** - Project dependencies and scripts
- **Test files** - Test specifications and page objects
- **Configuration files** - Framework-specific configuration

## Setup Instructions

### 1. Install Cursor IDE and Set Up Playwright MCP

1. **Install Cursor IDE**
   - Download from [cursor.sh](https://cursor.sh)
   - Install and launch Cursor IDE

2. **Set Up Playwright MCP for Cursor**
   - Navigate to the `playwright-cursor` directory
   - Follow the installation steps in `playwright-cursor/README.md`
   - Configure Playwright MCP server in Cursor IDE settings

### 2. Install Claude Desktop Client and Set Up Playwright MCP

1. **Install Claude Desktop**
   - Download from [claude.ai/download](https://claude.ai/download)
   - Install and launch Claude Desktop

2. **Set Up Playwright MCP for Claude**
   - Navigate to the `playwright-claude` directory
   - Follow the installation steps in `playwright-claude/README.md`
   - Configure Playwright MCP server in Claude Desktop settings
   - Review AI agent rules in `playwright-claude/ai-instructions-claude.md`

### 3. Set Up Cypress Framework with Cloud

1. **Install Cypress**
   - Navigate to the `cypress-cloud` directory
   - Follow the installation steps in `cypress-cloud/README.md`

2. **Connect to Cypress Cloud**
   - Sign up for a Cypress Cloud account (if needed)
   - Configure Cypress Cloud connection in `cypress.config.js`
   - Set up your project key for cloud integration

## Test Cases

### Playwright + Cursor (2 test cases)
- **Add to Cart Test** - Tests product selection and cart functionality
- **Sign Up Test** - Tests user registration with random credentials

Location: `playwright-cursor/tests/`

### Playwright + Claude (2 test cases)
- **Negative Login Test** - Tests unsuccessful login attempts with validation
- **About Us Video Test** - Tests video playback functionality

Location: `playwright-claude/specs/`

### Cypress + Cloud (2 test cases)
- **Cart Tests** - Tests product addition, removal, and empty cart scenarios
- **Contact Form Tests** - Tests contact form submission with dynamic test data

Location: `cypress-cloud/cypress/e2e/`

## AI Agent Rules

**Note:** AI agent rules apply only to Playwright MCP solutions (Cursor and Claude).

### Rules for Playwright MCP Solutions

The AI agent follows specific guidelines when generating tests:

- **File Interaction**: Work only within the respective project folder (`playwright-cursor` or `playwright-claude`)
- **Page Object Model**: All tests must use POM pattern with corresponding page object files
- **MCP Usage**: All navigation, assertions, and locator discovery must be performed via Playwright MCP
- **Selector Validation**: All selectors must be validated using MCP browser/inspector before implementation
- **File Structure**: Spec files must be created in designated folders (`specs/` or `tests/`)

For detailed rules, see:
- `playwright-claude/ai-instructions-claude.md` - Complete coding guidelines for Claude Desktop
- Similar rules apply to Cursor IDE project

## Running the Projects

**Important:** Each project has its own README with detailed instructions. To run a specific project, please follow its own README.


## Requirements Summary

- **Node.js**: Version 14+ (recommended: 16+ or 18+)
- **npm**: Version 6+ (comes with Node.js)
- **Cursor IDE**: For Playwright + Cursor solution
- **Claude Desktop**: For Playwright + Claude solution
- **Cypress Cloud Account**: For Cypress Cloud integration (optional but recommended)
