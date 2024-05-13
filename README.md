# My personal website

This website is built with Astro.

## 🚀 Getting Started

To get started, run the following commands:

```bash
npm install
npm run dev
```

## Run tests

```bash
npm run test:unit
```

For e2e tests, you need to run the following commands:

```bash
npm run build && npm run docker:build-e2e && npm run test:e2e
```

To update the e2e screenshots, run the following command:

```bash
npm run test:e2e -- -u
```

> e2e tests runs in a docker container, so you need to have Docker installed.
> The reason for this is to have a consistent environment for the screenshot
> generation.
