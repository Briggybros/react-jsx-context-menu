[![NPM](https://nodei.co/npm/react-jsx-context-menu.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-jsx-context-menu/)

# react-jsx-context-menu #

## Installation ##

Using npm:

```bash
npm install --save react-jsx-context-menu
```

Using yarn:

```bash
yarn add react-jsx-context-menu
```

## Usage ##

Here is a simple example of how to use:

```javascript
import React from 'react';
import { render } from 'react-dom';
import ContextMenu from 'react-jsx-context-menu';

function App() {
  return (
    <div>
      <ContextMenu
        menu={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        }
      >
        <div>
          Right click me to see the context menu
        </div>
      </ContextMenu>
    </div>
  );
}
render(<App />, document.getElementById('root'));
```

You can play around with it here: https://codesandbox.io/s/5mxow9wkon

## License ##

[MIT](./LICENSE.md)
