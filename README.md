# use-redux-store

[![npm version](https://badge.fury.io/js/react-webcomponentify.svg)](https://badge.fury.io/js/use-redux-store)

**A simple react hook to get access to redux store**

# Pre-requisite

**Needs:**

- react > 16.8,
- react-redux > 6.0.0

# Use cases

Currently only way to get access to redux is via the connect HOC. There is no clean way to do it the hook way.
This module is a tiny hook that gives out redux store

# Install

```
npm install use-redux-store
```

or

```
yarn add use-redux-store
```

# Usage

### Basic

**Simple use case**

```js
import React from "react";
import { useReduxStore } from "use-redux-store";

export const ExampleReactComponent = () => {
  const store = useReduxStore();
  const { user } = store.getState();
  return <div> Hello {user.name}</div>;
};
```
