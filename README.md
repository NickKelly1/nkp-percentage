# @nkp/percentage

[![npm version](https://badge.fury.io/js/%40nkp%2Fpercentage.svg)](https://www.npmjs.com/package/@nkp/percentage)
[![deploy status](https://github.com/NickKelly1/nkp-percentage/actions/workflows/release.yml/badge.svg)](https://github.com/NickKelly1/nkp-percentage/actions/workflows/release.yml)
[![known vulnerabilities](https://snyk.io/test/github/NickKelly1/nkp-percentage/badge.svg)](https://snyk.io/test/github/NickKelly1/nkp-percentage)

Zero dependency utility functions to turn a numbers into a percentages.

```ts
import { toPercentage } from '@nkp/percentage';

toPercentage(1);                      // "100.00%"
toPercentage(0.1);                    // "10.00%"
toPercentage(0.01);                   // " 1.00%"
toPercentage(0.001);                  // " 0.10%"
toPercentage(0.0001);                 // " 0.01%"
toPercentage(0.00001);                // " 0.00%"
toPercentage(0.5);                    // "50.00%"
toPercentage(0.5, { decimals: 3 });   // "50.000%"
toPercentage.defaults.decimals = 5
toPercentage(0.5);                    // "50.00000%"
toPercentage.defaults.sign = false
toPercentage(0.5);                    // "50.00000"
```

## Table of contents

- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
  - [pnpm](#pnpm)
  - [Exports](#exports)
- [Usage](#usage)
- [Updating Dependencies](#updating-dependencies)

## Installation

### npm

```sh
npm install @nkp/percentage
```

### yarn

```sh
yarn add @nkp/percentage
```

### pnpm

```sh
pnpm add @nkp/percentage
```

### Exports

`@nkp/percentage` targets CommonJS and ES modules. To utilise ES modules consider using a bundler like `webpack` or `rollup`.

## Updating dependencies

To update dependencies run one of

```sh
# if npm
# update package.json
npx npm-check-updates -u
# install
npm install

# if yarn
# update package.json
yarn create npm-check-updates -u
# install
yarn

# if pnpm
# update package.json
pnpx npm-check-updates -u
# install
pnpm install
```

## Publishing

To a release a new version:

1. Update the version number in package.json
2. Push the new version to the `master` branch on GitHub
3. Create a `new release` on GitHub for the latest version

This will trigger a GitHub action that tests and publishes the npm package.
