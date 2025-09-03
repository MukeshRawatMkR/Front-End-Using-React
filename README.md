# Concepts that I've covered:

- **Component-Driven Architecture**:

  - Building UIs from reusable UI components/elements.
  - React elements are used to make those components.

- **CDN Links**

  - Deliver static files.

- **JSX -> Pure React Code(which is eventually JS Code), this conversion is called transpilation**

  - Transpilation done by -> Babel.

- **set-up the Vite project for React**

  - just we set up the CDN links for React & ReactDOM, if we keep manually adding links like this, for other third party tools as well then we would have a lot of 'src' files and configuration code in our file, which will become messy and eventually all we would see the configuration code in our file not the actual code that we wanna run.
  - for that we use framework/starter/scaffolder.
  - Framework vs scaffolder vs starter: https://chatgpt.com/c/68abfea4-a440-832f-a842-56e20d1222be

- **Component**

  - Just a function, and always start with upper case, otherwise error.
  -

- **Exporting/importing modules**

  - We have two ways: 'ES'(module) and 'CJS'(commonjs) moduling.
    - 1. In ES we have 'named' and 'default' export
      - Default: export default function-name; | to import this we use: import funtion-name from file-path;
        - in this default we export only one function, and can import it using any name(nick-name). In fact we can export by adding 'export default' in front of the function/variable/class.
      - Named: export function-name; | to import this we use object: import {-,-,-} from file-path;
        - we can export by adding 'export' in front of the function/variable/class. if we don't use 'default' keyowrd it'll automatically behave as a named export.
        - we can alias our named import, for e.g, import {button as btn} from file-path;
      - Note: if we want to write mix of both world, we can do it, but first 'named export' and at the bottom of the file we can write 'export default'.
    - 2. CJS(commonjs)
      - Default: to export: 'module.exports' | to import: 'const name-> require('file-path');'
      - Named: to export: 'module.exports' with object | to import:

- **Set-up folder structure**

  - Like user-defined components into src/components/Component1.jsx
  - make sure each component we make, it should be saved as Component name with first letter capital. 

- **Props**

  - Note: We can access 'props' which is an object, without even passing any parameters to a component, react itself gives this feature to every component.
  - e.g, of props -> <Button text  "click me" more  "somthing"/>




 05:40 timeline(4)