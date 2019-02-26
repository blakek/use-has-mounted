# use-has-mounted

> 🌠 React hook for knowing if a component has mounted yet… for when you'd
> otherwise need `componentDidMount` and state.

[![Build status](https://travis-ci.com/blakek/use-has-mounted.svg?branch=master)](https://travis-ci.com/blakek/use-has-mounted)
[![NPM](https://img.shields.io/npm/v/use-has-mounted.svg)](https://www.npmjs.com/package/use-has-mounted)

Use to know if a component has mounted.

Instead of using [`componentDidMount`](https://reactjs.org/docs/react-component.html#componentdidmount) and a variable in state to know if a
component has mounted or not, you can know in two lines:

```js
import useHasMounted from 'use-has-mounted';

const hasMounted = useHasMounted();
```

### Why was this created?

There are several situations where you just need a stylistic component that
needs to know if it has been rendered. For example, if you need to use different
classes in the browser than initially created on the server, you may wait until
the component has mounted before making changes so
[`ReactDOM.hydrate()`](https://reactjs.org/docs/react-dom.html#hydrate) works
properly.

Mainly, I wanted to see if the process for publishing a hook would be much
different from other packages. This one of the simplest, still useful hooks I
could think of.

Also, this is a simple, fast, small way of accomplishing what would have been
done before as `componentDidMount` + state.

## Usage

```jsx
import React from 'react'; // At least v16.8
import useHasMounted from 'use-has-mounted';
import isCurrentPath from './navlink-is-active';

// Example: a link that changes classes if the page it links to is the current page
function NavLink({ path }) {
  // `useHasMounted` usage
  // To run before initial paint, pass `true` as the only argument
  const hasMounted = useHasMounted();
  const className =
    hasMounted && isCurrentPath(path) ? '.navlink__active' : '.navlink';

  return (
    <a href={path} className={className}>
      {hasMounted}
    </a>
  );
}
```

## API

### `useHasMounted(beforePaint)`

#### `beforePaint`

Type: `Boolean`<br />
Default: `false`

If `true`, the call runs during the same phase as `componentDidMount` did:
before the browser has had a chance to paint. This also means other visual
updates are blocked until this finishes. Uses
[`useLayoutEffect()`](https://reactjs.org/docs/hooks-reference.html#uselayouteffect).

If `false`, this runs asynchronously after an initial paint. That means visual
updates aren't blocked, but any visual changes may flash on the screen between
changes. Uses
[`useEffect()`](https://reactjs.org/docs/hooks-reference.html#useeffect).

## Install

With either [Yarn](https://yarnpkg.com/) or [npm](https://npmjs.org/) installed,
run **one** of the following:

**Yarn:**

```bash
yarn add use-has-mounted
```

**npm:**

```bash
npm install --save use-has-mounted
```

## License

MIT
